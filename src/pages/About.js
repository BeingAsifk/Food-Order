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
            where our passion for Indian cuisine was born. Today, we bring the
            authentic flavors of India to your plate, right here in our
            restaurant.
          </p>
          <h3> Our Philosophy 🌿</h3>
          <p>
            We believe in the power of food to bring people together. Our dishes
            are more than just meals - they’re a celebration of culture,
            tradition, and a testament to the vibrant diversity of India. We use
            only the freshest ingredients, sourced locally whenever possible,
            and each dish is prepared with utmost care and love.
          </p>
          <h3> Our Menu 🍽️</h3>
          <p>
            Our menu is a culinary journey through India, featuring dishes from
            different regions, each with its unique flavors and cooking styles.
            From the spicy curries of the North to the tangy chutneys of the
            South, from the aromatic biryanis of the East to the hearty dals of
            the West, there’s something for everyone.
          </p>
          <h3>Our Promise 🤝</h3>
          <p>
            We promise to provide you with an unforgettable dining experience.
            Our team is dedicated to ensuring that every meal you have with us
            is a celebration of Indian cuisine at its finest. We look forward to
            serving you and making your visit a memorable one. Thank you for
            choosing us. We can’t wait to welcome you to our Indian Food
            Restaurant! Namaste 🙏
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
