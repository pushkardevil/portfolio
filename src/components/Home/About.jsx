import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord, FaBluetooth } from "react-icons/fa";


const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em"}}>
              Let me Introduce Myself !!
            </h1>
            <p className="home-about-body" style={{ color:"blueviolet"}}>
              Hyy! I am <span className="yellow">Pushkar Kumar </span>
              and I'm from <span className="yellow"> Jabalpur , India</span>
              <br />
              <br />
              Recently I have Completed my Bachelor's degree in the Department of Smart Manufacturing from IIIT Jabalpur.
              
              As a
              <b className="yellow"> Full-Stack </b>Developer,
              I enjoy tackling new challenges and continuously expanding my skillset.
              <br />
              <br />
              I have a passion for working
              with <b className="yellow">Javascript, ReactJs & NodeJs.</b> 
              {/* <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks.
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i> */}
              <br />I am proficient in
              <b className="yellow"> C++ </b>
              as well as have knowledge in languages such as
              <b className="yellow"> Python, SQL & Javascript.</b>
              <br />
              <br />I am also interested in building new
              <b className="yellow"> Web Technologies and Products, </b>
              as well as exploring areas related to
              <b className="yellow"> Technology.</b>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pushkardevil"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.com/channels/1137299174010912828/1137299174010912837"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="discord"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pushkar-kumar-939449209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/im.pushkar044/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );

}

export default About
