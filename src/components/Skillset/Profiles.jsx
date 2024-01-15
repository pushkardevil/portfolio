import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
  SiCodingninjas
} from "react-icons/si";

const Profiles = () => {
  return (
    <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Col xs={4} md={2} className="tech-icons" >
        <SiLeetcode />
        <div className="name">
          <a href="https://leetcode.com/pushkar_devil/" className="btn btn-dark">Leetcode</a>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiCodingninjas />
        <span className="name">
          <a href="https://www.codingninjas.com/studio/profile/pushkar_devil" className="btn btn-dark">CodeStudio</a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiCodechef />
        <span className="name">
          <a href="https://www.codechef.com/users/pushkar_devil" className="btn btn-dark">Codechef</a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiGeeksforgeeks />
        <span className="name">
          <a href="https://auth.geeksforgeeks.org/user/20bsm044/" className="btn btn-dark">GeeksForGeeks</a>
        </span>
      </Col>
    </Row>
  );
}

export default Profiles;
