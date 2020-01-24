import React from "react";
import "./technical-styles.scss";
import { Button } from "reactstrap";
import ideas from "../../static/ideas.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Technicalcards() {
  return (
    <div className="technicalcards">
      <div className="technicaltext">
        <h2>We Build Next Generation IT Solutions</h2>
        <p>
          We pride ourselves in creating responsive websites and web
          applications for our customers while maintaining a dynamic flow of
          content to all of their pages
        </p>
        <Button outline color="info" style={{ color: "#043937" }}>
          Read What our Customers Say...
        </Button>
      </div>

      <div
        className="technicalimgcontainer"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={ideas} alt="web development "></img>
      </div>
    </div>
  );
}

export default Technicalcards;
