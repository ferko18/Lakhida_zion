import React from "react";
import { FaFacebook, FaTwitter,  FaLinkedin } from 'react-icons/fa';
function Footercontent() {
  return (
    <div>
      <footer>
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">Navigate</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <form className='footerform'>
              <input className='footerinput'
                type="email"
                name="email"
                placeholder="Enter email address"
              ></input>
              <input type="submit" value="Subscribe"></input>
            </form>
          </div>
        </section>
        <section className="ft-social">
          <ul className="ft-social-list">
            <li>
              <a href="#">
               <FaFacebook/>
              </a>
            </li>
            <li>
              <a href="#">
               <FaTwitter/>
              </a>
            </li>
           
            <li>
              <a href="#">
                <FaLinkedin/>
              </a>
            </li>
          </ul>
        </section>
        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>&copy; 2019 Copyright Lakhida Tech LLC</li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default Footercontent;
