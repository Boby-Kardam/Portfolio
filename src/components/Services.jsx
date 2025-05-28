import React from "react";
import './style.css';

function Services() {
  return (
    <div>
      <section>
        <div className="services" id="services">
          <div className="container">
            <h1 className="sub-title">
              My <span>Services</span>
            </h1>
            <div className="services-list">
              <div>
                <i className="bx bx-code" style={{ color: "#00eeff" }}></i>
                <h2>Web Development</h2>
                <p className="servicePara">
                  Looking for a fast, modern, and responsive website? I specialize in custom web development using HTML, CSS, JavaScript, and frameworks like React & Node.js. Whether you need a business site, e-commerce store, or web app, I deliver clean, SEO-friendly, and user-friendly designs. Let’s bring your vision to life! 📩 Contact me today.
                </p>
                <a
                  href="#about"
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="read"
                >
                  Learn More
                </a>
              </div>
              <div>
                <i className="bx bx-paint" style={{ color: "#00eeff" }}></i>
                <h2>Web Design</h2>
                <p className="servicePara">
                  Transform your online presence with a stunning, user-friendly website! I specialize in custom, responsive designs that look great on all devices. Fast loading, SEO-friendly, and tailored to your brand. Let’s create a site that attracts customers and grows your business! 📩 Contact me today! 
                </p>
                <a
                  href="#about"
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="read"
                >
                  Learn More
                </a>
              </div>
              <div>
                <i className="bx bxs-data" style={{ color: "#00eeff" }}></i>
                <h2>Database</h2>
                <p className="servicePara">
                  Boost your business with our secure, scalable, and high-performance database solutions! Our service ensures lightning-fast queries, automated backups, and 24/7 uptime—so your data stays safe and accessible. Perfect for apps, websites, and enterprise systems. Focus on growth while we handle your data! Get started today! 🚀
                </p>
                <a
                  href="#about"
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="read"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;