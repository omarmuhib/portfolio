import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Omar Saleem </span>
            from <span className="purple"> Amman , Jordan.</span>
            <br />
            I am currently employed as a Full-Stack Developer at Mena.
            <br />
            I have completed  softwear engineering at Al-Zaytoonah University .
            <br />
            <br />
          </p>
          
            

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Omar Saleem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
