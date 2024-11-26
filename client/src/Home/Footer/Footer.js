import React from "react";
import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { Element } from "react-scroll";
import './Footer.css'; // Add the custom styles here
import '../../logo.svg';

function Footer() {
  return (
    <Element name="Footer">
    <footer className="footer py-4">
      <Container>
        <Row className="text-white">
          <Col xs={12} sm={6} md={4} className="footer-col">
            <Stack className="text-center">
              <Image
                src="logo.svg"
                alt="Company logo"
                rounded
                width={150}
                height={150}
                className="mb-3"
              />
              <h2 className="footer-brand">Yalla-Sawa</h2>
            </Stack>
          </Col>
          <Col xs={12} sm={6} md={4} className="footer-col">
            <Nav className="flex-column fs-5">
              <h4>Contact Us!</h4>
              <p>Email: <a href="mailto:yala@gmail.com" className="text-white">yala@gmail.com</a></p>
              <p>Phone: <a href="tel:+17171717171" className="text-white">+961 71 717171</a></p>
              <NavLink href="#" className="text-white mt-2">
              <FaLinkedin /> LinkedIn
              </NavLink>
            </Nav>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p className="text-white">© 2024 Yalla-Sawa. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </Element>
  );
}

export default Footer;
