import React from "react";
import "./PrintServicePage.css";

function PrintServicePage() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>PrintWorks</h1>
        <p>Exceptional print services for every need</p>
        <button>Get a Quote</button>
      </header>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">📄 Business Cards</div>
          <div className="service-item">🎨 Flyers & Brochures</div>
          <div className="service-item">📦 Packaging Design</div>
          <div className="service-item">🖼 Posters & Banners</div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-gallery">
          <div className="portfolio-item">🖼 Project A</div>
          <div className="portfolio-item">🖼 Project B</div>
          <div className="portfolio-item">🖼 Project C</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 PrintWorks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PrintServicePage;
