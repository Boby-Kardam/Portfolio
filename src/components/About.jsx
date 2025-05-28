import React from "react";
import "./style.css";

function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-img">
          <img src="sidebar.jpg" width="550" height="350" alt="About" />
        </div>
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>
          <h4>Full Stack Web Developer!</h4>
          <div className="paraAbout">
            Hi, I’m <b>Boby Kardam</b>, a <b>Full Stack Web Developer</b> with a strong
            foundation in both frontend and backend technologies. I hold a
            <b>B.Tech in Computer Science</b> and a Diploma in <b>Computer Science</b>,
            equipping me with a robust understanding of software development
            principles, algorithms, and system design. <br /><br /> I thrive on building
            scalable, user-centric web applications that solve real-world
            problems. My expertise spans: <br /><br /> <b>Frontend:</b> React.js, HTML5, CSS3,
            JavaScript (ES6+), Tailwind CSS, React.JS <br /> <b>Backend:</b> Node.js, Express.js, Python, Java, PHP,
            MongoDB, SQL <br /><b>Tools & Practices:</b> Git, RESTful APIs, Responsive
            Design, Agile Development <br /><br /> What drives me? Turning ideas into
            functional, elegant solutions. Whether it’s crafting intuitive UIs
            or optimizing server performance, I’m passionate about writing
            clean, efficient code and staying ahead of industry trends. When I’m
            not coding, I love contributing to open-source projects, exploring
            new tech stacks, and mentoring aspiring developers. Let’s connect
            and create something amazing together!
          </div>
          <br />
          <br />
          <a
            href="https://github.com/Boby-Kardam/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-box"
          >
            More About Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
