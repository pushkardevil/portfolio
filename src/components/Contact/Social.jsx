import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{ padding: '30px' }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className='contact-text'>
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/pushkardevil"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.instagram.com/im.pushkar044/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/pushkar-kumar-939449209/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://discord.com/channels/1137299174010912828/1137299174010912837"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaDiscord />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Social