import React from 'react'
import "../css/AboutPage.css"
const AboutPage = () => {
  return (
   <div className='about'>
  {/* Hero Section */}
  <section className="hero">
    <div className="hero-content">
      <h1>
        Welcome to <span className="hero-accent">ASIAN Fashion</span>
      </h1>
      <p>
        Where tradition meets contemporary style. We're redefining streetwear
        with bold designs, premium quality, and a passion for authentic
        self-expression.
      </p>
      <p>
        Join us on a journey of fashion innovation and cultural celebration.
      </p>
    </div>
  </section>
  {/* Story Section */}
  <div className="container">
    <div className="story-section">
      <div className="story-image">
        <img
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"
          alt="ASIAN Fashion Story"
        />
      </div>
      <div className="story-content">
        <h2>Our Story</h2>
        <p>
          Founded in 2015, ASIAN Fashion began with a simple vision: to create
          clothing that celebrates individuality and cultural heritage. What
          started as a small studio has grown into a movement that empowers
          people to express themselves through fashion.
        </p>
        <p>
          We believe that clothing is more than fabric—it's a statement, a
          story, and a form of art. Every piece we create is designed with care,
          crafted with precision, and inspired by the vibrant diversity of Asian
          culture.
        </p>
        <p>
          Today, ASIAN Fashion serves customers across the globe, but our
          commitment remains unchanged: quality first, authenticity always.
        </p>
      </div>
    </div>
  </div>
  {/* Values Section */}
  <section className="values-section">
    <h2 className="section-title">Our Values</h2>
    <div className="values-grid">
      <div className="value-card">
        <div className="value-icon">🎨</div>
        <h3>Authentic Design</h3>
        <p>
          Every design tells a story. We blend traditional elements with modern
          aesthetics to create unique pieces that stand out.
        </p>
      </div>
      <div className="value-card">
        <div className="value-icon">✨</div>
        <h3>Premium Quality</h3>
        <p>
          We use only the finest materials and manufacturing processes to ensure
          every product meets our high standards.
        </p>
      </div>
      <div className="value-card">
        <div className="value-icon">🌍</div>
        <h3>Sustainability</h3>
        <p>
          We're committed to ethical production practices and minimizing our
          environmental impact at every step.
        </p>
      </div>
      <div className="value-card">
        <div className="value-icon">💚</div>
        <h3>Community First</h3>
        <p>
          Our customers are family. We listen, engage, and continuously improve
          based on your feedback and experiences.
        </p>
      </div>
    </div>
  </section>
  {/* Stats Section */}
  <section className="stats-section">
    <div className="stats-grid">
      <div className="stat-item">
        <h3>50K+</h3>
        <p>Happy Customers</p>
      </div>
      <div className="stat-item">
        <h3>500+</h3>
        <p>Unique Designs</p>
      </div>
      <div className="stat-item">
        <h3>30+</h3>
        <p>Countries Served</p>
      </div>
      <div className="stat-item">
        <h3>4.8★</h3>
        <p>Average Rating</p>
      </div>
    </div>
  </section>
  {/* Timeline Section */}
  <section className="timeline-section">
    <h2 className="section-title">Our Journey</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <div className="timeline-year">2015</div>
          <h4>The Beginning</h4>
          <p>
            ASIAN Fashion was founded with a vision to celebrate cultural
            diversity through fashion.
          </p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <div className="timeline-year">2017</div>
          <h4>First Collection Launch</h4>
          <p>
            Released our signature hoodie collection that sold out within weeks.
          </p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <div className="timeline-year">2019</div>
          <h4>Global Expansion</h4>
          <p>
            Expanded shipping to over 20 countries and opened our first
            international warehouse.
          </p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <div className="timeline-year">2021</div>
          <h4>Sustainability Initiative</h4>
          <p>
            Launched our eco-friendly line using 100% organic cotton and
            recycled materials.
          </p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <div className="timeline-year">2024</div>
          <h4>50,000 Customers</h4>
          <p>Reached a milestone of 50,000+ happy customers worldwide.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Team Section */}
  <div className="container">
    <div className="team-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-grid">
        <div className="team-card">
          <div className="team-image">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
              alt="Team Member"
            />
          </div>
          <div className="team-info">
            <h4>Rajesh Kumar</h4>
            <p>Founder &amp; Creative Director</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
              alt="Team Member"
            />
          </div>
          <div className="team-info">
            <h4>Priya Sharma</h4>
            <p>Head of Design</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
              alt="Team Member"
            />
          </div>
          <div className="team-info">
            <h4>Arjun Patel</h4>
            <p>Operations Manager</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
              alt="Team Member"
            />
          </div>
          <div className="team-info">
            <h4>Ananya Singh</h4>
            <p>Marketing Lead</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* CTA Section */}
  <section className="cta-section">
    <h2>Ready to Join the Movement?</h2>
    <p>
      Discover our latest collection and find the perfect piece that speaks to
      your style and story.
    </p>
    <a href="#" className="cta-btn">
      Shop Now
    </a>
  </section>
</div>

  )
}

export default AboutPage
