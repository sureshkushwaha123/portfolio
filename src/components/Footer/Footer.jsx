import React, { useState, useEffect } from "react";
import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1 className="footer-title">Suresh Kushwaha</h1>
          <p>
            Aspiring Full Stack Developer | BTech CSE Student |
            Design-Develop-Deploy-Repeat.
          </p>
        </div>
        <div className="footer-top-right">
          <a
            href="https://www.linkedin.com/in/suresh-prasad-kushwaha-b03461251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/sureshkushwaha1430/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" className="footer-icon" />
          </a>
          <a
            href="https://github.com/sureshkushwaha123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="footer-icon" />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; {new Date().getFullYear()} Suresh Kushwaha. All rights
          reserved.
        </p>
        <div className="footer-bottom-right">
          <p className="footer-bottom-right">🕒 Local Time: {currentTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
