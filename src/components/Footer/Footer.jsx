import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";


import { FaLinkedinIn, FaDiscord } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Made with 💜</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright ©{year} <a href="https://github.com/pushkardevil">pushkardevil</a></span>

        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/pushkardevil"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.com/channels/1137299174010912828/1137299174010912837"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="discord"
              >
                <FaDiscord />

              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pushkar-kumar-939449209/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/im.pushkar044/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer