import "../../css/Contact.css"
const Contact = () => {
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
                            <form action="">
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                                <textarea placeholder="Your Message" required></textarea>
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
