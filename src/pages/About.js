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
          <p>
            Welcome to our Indian Food Restaurant! 🍛 We are a family-owned
            business, deeply rooted in the rich culinary heritage of India. Our
            journey began decades ago in the bustling streets of New Delhi,
            where our passion for Indian cuisine was born.
          </p>
          <h3> Our Philosophy 🌿</h3>
          <p>
            We believe in the power of food to bring people together. Our dishes
            are more than just meals - they’re a celebration of culture,
            tradition, and a testament to the vibrant diversity of India. 
          </p>
          <h3> Our Menu 🍽️</h3>
          <p>
            Our menu is a culinary journey through India, featuring dishes from
            different regions, each with its unique flavors and cooking styles.
           
          </p>
          <h3>Our Promise 🤝</h3>
          <p>
            We promise to provide you with an unforgettable dining experience.
            We can’t wait to welcome you to our Indian Food
            Restaurant! Namaste 🙏
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
