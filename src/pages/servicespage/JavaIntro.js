import React from 'react'
import { Button } from "reactstrap";
import ideas from "../../static/ideas.svg";
function Javaintro() {
    return (
      <div className="technicalcards technicalcards2 ">
        
        <div
          className="technicalimgcontainer"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={ideas} alt="web development "></img>
        </div>
        <div className="technicaltext">
          <h2>Java Fullstack Development</h2>
          <p>
            We pride ourselves in creating responsive websites and web
            applications for our customers while maintaining a dynamic flow of
            content to all of their pages
          </p>
          <Button outline color="info" style={{ color: "#043937" }}>
            Read What our Customers Say...
          </Button>
        </div>
  
      </div>
    );
  }
  
  export default Javaintro;