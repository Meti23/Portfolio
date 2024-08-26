import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import girl from "../../img/girl.jpeg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
          <span>Metasebia Tariku</span>
          <span>
            I am a skilled front-end developer dedicated to crafting visually appealing and user-friendly interfaces. With meticulous attention to detail and a genuine passion for design, I bring a valuable perspective to the development process. My goal is to create responsive and scalable websites that exceed expectations and leave a lasting impression. Through effective collaboration with designers and back-end developers, I ensure seamless integration for a cohesive final product.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
      </div>
      {/* right image side */}
      <div className="i-right">
        
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <img
            src={girl}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </div>

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
