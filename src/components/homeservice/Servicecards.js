import React from "react";

import "./service-styles.scss";
import Java from "../../static/Java.svg";
import Sharepoint from "../../static/sharepoint.svg";
import Node from "../../static/Node.svg";
import Reacticon from "../../static/React.svg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";


AOS.init({offset: 50});

const Servicecards = props => {
  return (
    <Row>
      <Col  sm="3"data-aos="fade-up"
     data-aos-duration="1500">
        <Card 
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <div className="imgcontainer" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
            <img src={Sharepoint} alt="sharepoint icon"></img>
          </div>

          <CardTitle>Sharepoint Development</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content. With supporting text below as a natural lead-in
            to additional content.
          </CardText>
          <Button>Read More</Button>
        </Card>
      </Col>
      <Col sm="3" data-aos="fade-up"
     data-aos-duration="2000">
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <div className="imgcontainer" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
            <img src={Java} alt="sharepoint icon"></img>
          </div>
          <CardTitle>Java Development</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content. With supporting text below as a natural lead-in
            to additional content.
          </CardText>
          <Button>Read More</Button>
        </Card>
      </Col>
      <Col sm="3" data-aos="fade-up"
     data-aos-duration="2500">
        <Card className='hvr-fade'
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <div className="imgcontainer" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <img src={Reacticon} alt="sharepoint icon"></img>
          </div>
          <CardTitle> React Development</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content. With supporting text below as a natural lead-in
            to additional content.
          </CardText>
          <Button>Read More</Button>
        </Card>
      </Col>
      <Col sm="3" data-aos="fade-up"
     data-aos-duration="3000">
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <div className="imgcontainer" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
            <img src={Node} alt="sharepoint icon"></img>
          </div>
          <CardTitle> Node Development</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content. With supporting text below as a natural lead-in
            to additional content.
          </CardText>
          <Button>Read More </Button>
        </Card>
      </Col>
      
    </Row>
  );
};

export default Servicecards;
