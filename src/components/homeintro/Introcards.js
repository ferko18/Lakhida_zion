import React from "react";
import './homeintro-styles.scss'
import { AnimateOnChange } from "react-animation";
const { useState, useEffect } = React;


function Introcards() {
  const introstatments = [
    "WELLCOME TO LAKHIDA TECH SERVICE", 
    "Alexandria VA, Sharepoint, Web Development and Consulting",
    "LET US HELP YOU GROW YOUR BUSINESS", 
    "with our quality services"
  ];
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (current === introstatments.length - 2) {
        setCurrent(0)
      } else {
        setCurrent(current + 2)
      }
    }, 8000);
    return (() => {
      clearInterval(interval)
    })
  })

  return <div className="introcards">
      <div className='cardcontainer'>
          <h1><AnimateOnChange durationOut="1500">{introstatments[current]}</AnimateOnChange></h1>
          <h2 style={{color:'#09e6de'}}><AnimateOnChange durationOut="1500">{introstatments[current+1]}</AnimateOnChange></h2>
      </div>
      
  </div>;
}

export default Introcards;
