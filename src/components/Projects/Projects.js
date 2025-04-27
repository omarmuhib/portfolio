import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mena E-Learning Platform"
              description="A comprehensive e-learning platform built with Laravel and Vue.js, featuring course management, user enrollment, progress tracking, and interactive learning materials."              ghLink="https://training.menatech.edu.jo/"
              demoLink="https://training.menatech.edu.jo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="enroll users Plugin"
              description="A Laravel plugin that allows users to enroll in courses and track their progress."
              ghLink="https://github.com/omarmuhib/enroll_users"
              demoLink="https://github.com/omarmuhib/enroll_users"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio website built with React.js, showcasing skills, projects, and contact information."
              ghLink="https://github.com/omarmuhib/Portfolio"
              demoLink="https://portfolio-omarmuhib.vercel.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
