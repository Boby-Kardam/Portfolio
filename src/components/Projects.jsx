import React from 'react';
import './style.css';

function Projects() {
  return (
    <div>
      <section>
        <div className="portfolio" id="project">
          <div className="main-text">
            <h1 className="sub-title">Latest <span>Projects</span></h1>

            <div className="portfolio-content">
              <div className="row">

                <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?ga=GA1.1.1078950495.1726315559&semt=ais_hybrid&w=740" alt="Portfolio" />
                <div className="layer">
                  <h5>My Portfolio</h5>
                  <p>Creative web developer crafting stunning, responsive websites. Passionate about clean code & user-friendly design. Let's build something amazing together!</p>
                  <a href="https://github.com/Boby-Kardam/Portfolio" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: "black" }}></i>
                  </a>
                </div>
              </div>

              <div className="row">
                <img src="https://img.freepik.com/free-photo/online-collage-application-document-form-concept_53876-127413.jpg?ga=GA1.1.1078950495.1726315559&semt=ais_hybrid&w=740" alt="Student Registration" />
                <div className="layer">
                  <h5>Student Registration Form</h5>
                  <p>A dynamic Student Registration System built with JavaScript. Securely stores student data with form validation. Easy to use & fully responsive!</p>
                  <a href="https://github.com/Boby-Kardam/Student-Registration-Form" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: "black" }}></i>
                  </a>
                </div>
              </div>

              <div className="row">
                <img src="https://img.freepik.com/free-psd/3d-rendering-tic-tac-toe-board_23-2151686074.jpg?ga=GA1.1.1078950495.1726315559&semt=ais_hybrid&w=740" alt="black" />
                <div className="layer">
                  <h5>Tic Tac Toe Game</h5>
                  <p>Classic Tic-Tac-Toe game built with JavaScript! Play vs AI or a friend. Responsive, intuitive, and fun. Try it now! ❌⭕</p>
                  <a href="https://github.com/Boby-Kardam/Tic-Tac-Toe-Game" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: "black" }}></i>
                  </a>
                </div>
              </div>

              <div className="row">
                <img src="https://img.freepik.com/free-vector/realistic-weather-widget_1284-4092.jpg?ga=GA1.1.1078950495.1726315559&semt=ais_hybrid&w=740" alt="Weather" />
                <div className="layer">
                  <h5>Weather App</h5>
                  <p>Real-time weather app built with JavaScript. Shows temperature, humidity, and forecasts using API data. Clean UI, responsive design. Try it now! 🌦️</p>
                  <a href="https://github.com/Boby-Kardam/Weather-App" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: "black" }}></i>
                  </a>
                </div>
              </div>

              <div className="row">
                <img src="https://img.freepik.com/free-psd/superhero-3d-text-style-effect_1389-1534.jpg?ga=GA1.1.1078950495.1726315559&semt=ais_hybrid&w=740" alt="Avengers" />
                <div className="layer">
                  <h5>Avengers Gallary</h5>
                  <p>Avengers Gallery: A JavaScript-powered tribute showcasing Earth's Mightiest Heroes with interactive filters and smooth animations. Explore now!</p>
                  <a href="https://github.com/Boby-Kardam/Avengers" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: "black" }}></i>
                  </a>
                </div>
              </div>

              <div className="row">
                <img src="https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg?ga=GA1.1.1078950495.1726315559&semt=ais_hybrid&w=740" alt="Youtube" />
                <div className="layer">
                  <h5>YouTube Clone</h5>
                  <p>Build a YouTube clone with JavaScript! Features: video player, search, comments & responsive UI. Perfect for learning web dev!</p>
                  <a href="https://github.com/Boby-Kardam/YouTube-Clone" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: "black" }}></i>
                  </a>
                </div>
              </div>

              <div className="row">
                <img src="https://img.freepik.com/free-vector/grand-opening_52683-8452.jpg?ga=GA1.1.1078950495.1726315559&semt=ais_hybrid&w=740" alt="Credex" />
                <div className="layer">
                  <h5>Credex E-Commerce Website</h5>
                  <p>Sell software effortlessly with our JavaScript platform! Secure payments, user-friendly dashboard, and seamless integrations. Boost your digital sales today!</p>
                  <a href="https://github.com/Boby-Kardam/Credex---Software-Sell-App" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: "black" }}></i>
                  </a>
                </div>
              </div>

              <div className="row">
                <img src="https://img.freepik.com/free-photo/earth-day-environment-eco-concept-close-up_185193-110602.jpg?ga=GA1.1.1078950495.1726315559&semt=ais_hybrid&w=740" alt="Shoppyglobe" />
                <div className="layer">
                  <h5>Shoppyglobe E-Commerce Website</h5>
                  <p>Build a sleek e-commerce app with JavaScript! Features cart, payments, product filters & responsive design. Modern UI with React/Node.js.</p>
                  <a href="https://github.com/Boby-Kardam/shoppyglobe-E-Commerce-Website" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: "black" }}></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;