import React from "react";
import "./servicepage-styles.scss";

import Sharepointintro from "./Sharepointintro";
import Javaintro from "./JavaIntro";
import Reactintro from "./Reactintro";
import Nodeintro from "./Nodeintro";

function Servicepage() {
  return (
    <div className="servicepage-container">
      <div className="service-wrapper">
        <Sharepointintro />
        <Javaintro />
        <Reactintro />
        <Nodeintro />
      </div>
    </div>
  );
}

export default Servicepage;
