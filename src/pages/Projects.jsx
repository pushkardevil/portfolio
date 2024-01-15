import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// import Blog from "../assets/projects/Blog.png";
// import krypto from "../assets/projects/krypto.png";

import yummtumm from "../assets/projects/yummytummy.png"
import portfolio from "../assets/projects/portfolio.png"
import webapp from "../assets/projects/webapp.png"
import trenders from "../assets/projects/trenders.png"
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Project <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trenders}
              isBlog={false}
              title="Trenders"
              description="Developed a responsive web app with CRUD functionality, intuitive cart, purchase history, and real-time market prices. Integrated Google login/signup and efficient search/sorting for optimal user experience."
              ghLink="https://github.com/pushkardevil/trenders"
            // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webapp}
              isBlog={false}
              title="Olympics Data Analysis Web App"
              description="Developed a Python-based web application using the Streamlit library to perform a comprehensive analysis of Olympic games data spanning from 1896 to 2016."
              ghLink="https://github.com/pushkardevil/Olympics-Data-Analysis-Web-App"
            // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio website to showcases my skills and accomplishments. Using React, React Router, and Bootstrap, it offers a seamless user experience."
              ghLink="https://github.com/pushkardevil/portfolio"
            // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yummtumm}
              isBlog={false}
              title="Yummy Tummy"
              description="A React Cart website."
              ghLink=""
            // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects