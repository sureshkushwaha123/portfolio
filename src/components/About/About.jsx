import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.jpg";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.svg";
import node from "../../assets/Node.js.svg";
import nextjs from "../../assets/Next.js.svg";
import MongoDb from "../../assets/MongoDb.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import java from "../../assets/Java.svg";
import c from "../../assets/C.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="about-profile" src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello everyone! I'm a Computer Science student at KIIT University,
              Bhubaneswar, with a strong passion for the world of technology and
              coding. Whether it's designing intuitive user interfaces or
              developing robust back-end systems, I love transforming ideas into
              practical solutions.
            </p>
            <p>
              Apart from academics, I make time for playing football, exploring
              emerging tech trends, and actively engaging with my peers. I
              believe in learning through experience and continuously strive to
              grow—both personally and professionally. I always aim to maintain
              a positive learning attitude
            </p>
            <p>
              I'm excited to connect, collaborate, and share ideas with
              like-minded individuals. Let's build something amazing together!
            </p>
          </div>
          <h2 className="about-subtitle">Skills</h2>
          <div className="about-skills">
  <div className="about-skill">
    <img src={html} alt="HTML" className="skill-logo" />
    <p className="skill-name">HTML</p>
  </div>
  <div className="about-skill">
    <img src={css} alt="CSS" className="skill-logo" />
    <p className="skill-name">CSS</p>
  </div>
  <div className="about-skill">
    <img src={javascript} alt="JavaScript" className="skill-logo" />
    <p className="skill-name">JavaScript</p>
  </div>
  <div className="about-skill">
    <img src={react} alt="React" className="skill-logo" />
    <p className="skill-name">React</p>
  </div>
  <div className="about-skill">
    <img src={node} alt="Node.js" className="skill-logo" />
    <p className="skill-name">Node.js</p>
  </div>
  <div className="about-skill">
    <img src={nextjs} alt="Next.js" className="skill-logo" />
    <p className="skill-name">Next.js</p>
  </div>
  <div className="about-skill">
    <img src={MongoDb} alt="MongoDB" className="skill-logo" />
    <p className="skill-name">MongoDB</p>
  </div>
  <div className="about-skill">
    <img src={tailwindcss} alt="Tailwind CSS" className="skill-logo" />
    <p className="skill-name">Tailwind CSS</p>
  </div>
  <div className="about-skill">
    <img src={java} alt="Java" className="skill-logo" />
    <p className="skill-name">Java</p>
  </div>
  <div className="about-skill">
    <img src={c} alt="C" className="skill-logo" />
    <p className="skill-name">C</p>
  </div>
</div>


        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Programming languages & tools</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>Academic & personal projects </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p> Hackathons participated</p>
        </div>
      </div>
    </div>
  );
};

export default About;
