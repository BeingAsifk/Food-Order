import React from "react";
import MultiplePizzas from "../assets/masala.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
         Foods® is one of India’s great food companies and a leading foodservice distributor, partnering with approximately 300,000 restaurants and foodservice operators to help their businesses succeed. With nearly 28,000 employees and more than 70 locations, we provide our customers with a broad and innovative food offering and a comprehensive suite of e-commerce, technology, and business solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
