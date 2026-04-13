import { useState } from "react";
import "../../css/Contact.css"
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
    const [contact, setContact] = useState({
        name:"",
        email:"",
        address:"no address",
        message:""
    });

    const OnChangeForm = (e) => {
        const {name, value} = e.target;
        setContact((prev) => ({...prev, [name]: value}))
    }

    const OnSubmitForm = async (e) =>  {
        e.preventDefault();
        const serviceId = 'service_ncdfvma';
      const templateId = 'template_bs8vmpy';
      const publicKey = 'NXBv5vpceMZKr5hDy';
      console.log(contact)
        const sendToEmail = await emailjs.send(serviceId, templateId, contact, {
    publicKey,
  });
        const res = await sendToEmail.text
        console.log(res)
        if (res) {
            toast.success("message sended successfully");
        } else{
            toast.error("message is not sended");
        }
    }


    return (
        <section className="Contact">
            <div className="contact_us">
                <h1>Contact Us</h1>
                <div className="contact_details">
                    <div className="contact_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74843366394!2d72.41493152021693!3d23.020474454733477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                            ></iframe>
                    </div>
                    <div className="contact_main">
                        <div className="contact_content">
                            <h2>Contact Address</h2>
                            <p>1234 Street Name, City, State, 12345</p>
                            <h2>Phone</h2>
                            <p>(123) 456-7890</p>
                            <h2>Email</h2>
                            <p>ecommerce@gmail.com</p>
                        </div>
                        <div className="contact_form">
                            <form onSubmit={OnSubmitForm}>
                                <input type="text" name="name" placeholder="Your Name" defaultValue={contact.name} onChange={OnChangeForm} required />
                                <input type="email" name="email" placeholder="Your Email" defaultValue={contact.email} onChange={OnChangeForm} required />
                                <textarea name="message" placeholder="Your Message" onChange={OnChangeForm} required>{contact.message}</textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
