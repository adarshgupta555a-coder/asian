import React, { useState } from 'react';
import "../../css/chatbot.css";
import { toast } from 'react-toastify';
import supabase from "../../Database/supabase"
import { useNavigate } from 'react-router';
import { getAllproducts } from '../../utils/getAllProduct';
import { useSelector } from 'react-redux';
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const userData = useSelector((state) => state.Auth.value);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: 'bot', time: '10:30 AM' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const navigate = useNavigate()

  const quickReplies = [
    "Track my order",
    "Product sizes",
    "Return policy",
    "Contact support"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: getBotResponse(inputMessage),
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('order') || msg.includes('track')) {
      navigate("/profile")
      return "Sure! Please provide your order number and I'll track it for you.";
    } else if (msg.includes('size')) {
      return "Our size guide: S (36-38), M (40-42), L (44-46), XL (48-50), XXL (52-54). Need help finding your size?";
    } else if (msg.includes('return')) {
      return "We offer 30-day easy returns! Items must be unworn with tags attached. Would you like to initiate a return?";
    } else if (msg.includes('support') || msg.includes('help')) {
      return "I'm here to help! You can reach our support team at support@asianfashion.com or call +91 1234567890.";
    } else if (msg.includes('@') && msg.includes('product')) {
      getAnalysisProductByAI(msg)
      return "please wait my response I am checking...";
    }
    else {
      getQueryUserByAI(msg)
      return "please wait for my response.";
    }
  };



  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    handleSendMessage();
  };


  const getAnalysisProductByAI = async (msg) => {
    try {
      const getAllItems = await getAllproducts()
      let ItemNames = [];

      getAllItems.forEach(elm => ItemNames.push(elm.name))
      console.log(ItemNames)
      const res = await fetch("http://localhost:3000/chat/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "chat": msg,
          "productName": ItemNames
        })
      })

      const data = await res.json();
      if (data) {
        console.log(data)
        intentOfUser(data)
      }
      console.log(data)


    } catch (error) {
      console.log(error)
    }

  }


  const getQueryUserByAI = async (msg) => {
    try {
      if (!userData?.id) {
        navigate("/signin")
      }


      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "user": userData,
          "message": msg
        })
      })

      const data = await res.json();
      console.log(data)
      if (data) {
        const newMessage = {
          id: messages.length + 1,
          text: data.message,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMessage]);
        setInputMessage('');
      }
      console.log(data)


    } catch (error) {
      console.log(error)
    }

  }


  const intentOfUser = (data) => {
    if (data.intent == "search_product") {
      getProductData(data.query)
    }
    if (data.intent == "product_info") {
      navigate("/shop")
    }
  }

  const getProductData = async (query) => {
    const { data } = await supabase
      .from("product")
      .select("*")
      .ilike("name", `%${query}%`)
      .limit(1)

    if (data && data.length > 0) {
      navigate(`/product-page/${data[0].id}`)
    }
  }

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="chatbot-container">
        <button
          className={`chat-button ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '💬'}
          {!isOpen && <span className="notification-badge">1</span>}
        </button>

        <div className={`chat-window ${isOpen ? 'open' : ''}`}>
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="bot-avatar">🤖</div>
              <div className="chat-header-text">
                <h3>ASIAN Fashion Bot</h3>
                <p>Online • Typically replies instantly</p>
              </div>
            </div>
            <button className="close-chat" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-avatar">
                  {message.sender === 'bot' ? '🤖' : '👤'}
                </div>
                <div className="message-content">
                  <div className="message-bubble">{message.text}</div>
                  <div className="message-time">{message.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-replies">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                className="quick-reply-btn"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </button>
            ))}
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              className="send-btn"
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}