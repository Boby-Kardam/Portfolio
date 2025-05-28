import React from 'react';
import './style.css';

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>Contact <span className='span'>Me</span></h2>
          <h4>Let's Work Together</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque totam neque quidem voluptatem, suscipit inventore dignissimos quaerat nam aliquid ipsam assumenda quos! Autem adipisci veniam modi, atque quaerat quos!</p>
          
          <ul className="contact-list">
            <li><i className='bx bxs-send' style={{color: '#00eeff'}}></i>bobykardam90@gmail.com</li>
            <li><i className='bx bxs-phone'></i>0123456789</li>
          </ul>
          
          <div className="contact-icons">
            <a href="https://www.facebook.com/saurabh.barar.50" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook-circle'></i></a>
            <a href="https://x.com/BobyKardam90" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
            <a href="https://www.instagram.com/b.o.b.y_k.a.r.d.a.m" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt'></i></a>
            <a href="https://www.linkedin.com/in/boby-kardam-7729ba19a/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a>
          </div>
        </div>

        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="abc@gmail.com" required />
            <input type="text" placeholder="Enter your subject" />
            <textarea name="" id="" cols="40" rows="10" placeholder="Enter your message here.."></textarea>
            <input type="submit" value="Save" className="send" />
          </form>
        </div>
      </section>

      <section>
        <div className="last-text">
          <p>Developed with love by Boby Kardam @ 2024.</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;