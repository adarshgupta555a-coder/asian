import "../../Css/Footer.css"

const Footer = () => {
  return (
 <footer className="footer">
        <div className="footer-content">
            <div className="footer-top">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are dedicated to providing premium quality products with exceptional service. Your
                        satisfaction is our priority.</p>
                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="social-icon" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>1234 Street Name, City, State 12345</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>(123) 456-7890</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>ecommerce@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email address" required/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 E-Commerce Store. All rights reserved. | Designed with <a href="#">passion</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
