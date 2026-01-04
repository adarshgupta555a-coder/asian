import "../../Css/SliderFeature.css"
const SliderFeature = () => {
    
  return (
      <section className="slider-section">
        <h1>Featured Collection</h1>
        <div className="slider-container">
            <div className="slider-wrapper">
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&h=800&fit=crop"
                        alt="Slide 1"/>
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>Summer Collection 2024</h2>
                            <p>Discover the latest trends in fashion with our exclusive summer collection. Premium
                                quality meets contemporary style.</p>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&h=800&fit=crop"
                        alt="Slide 2"/>
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>New Arrivals</h2>
                            <p>Step into elegance with our newest collection. Crafted with precision and designed for
                                the modern lifestyle.</p>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&h=800&fit=crop"
                        alt="Slide 3"/>
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>Premium Accessories</h2>
                            <p>Complete your look with our handpicked accessories. Quality and style in every detail.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1400&h=800&fit=crop"
                        alt="Slide 4"/>
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>Urban Essentials</h2>
                            <p>Elevate your everyday wardrobe with timeless pieces designed for city living and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <div className="progress-bar"></div>
        </div>
    </section>
  )
}

export default SliderFeature
