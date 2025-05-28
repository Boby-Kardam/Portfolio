import React from "react";
import "./style.css";

function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hey, This is</h3>
          <h1>Boby Kardam</h1>
          <h3>
            And I'm a <span style={{ color: "#0ef" }}>Web Developer</span>
          </h3>
          <p>
            A passionate Frontend / Full-Stack Developer with a love for
            crafting sleek, responsive, and user-friendly digital experiences. I
            turn ideas into code and problems into solutions—one line at a time.
          </p>
          <div className="home-sci">
            <a
              href="https://www.facebook.com/saurabh.barar.50"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--i": 6 }} // Custom property (requires CSS-in-JS support)
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/b.o.b.y_k.a.r.d.a.m"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--i": 7 }}
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/boby-kardam-7729ba19a/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--i": 8 }}
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://x.com/BobyKardam90"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--i": 9 }}
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://accounts.google.com/SignOutOptions?hl=en-GB&continue=https://mail.google.com/mail&service=mail&ec=GBRAFw"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--i": 10 }}
            >
              <i className="bx bxl-gmail"></i>
            </a>
          </div>
          <a
            href="#about"
            // target="_blank"
            rel="noopener noreferrer"
            className="btn-box"
          >
            More About Me
          </a>
        </div>
        <span className="home-imgHover"></span>
      </section>
    </div>
  );
}

export default Home;
