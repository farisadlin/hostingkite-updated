/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="footer-section bg-dark pt-5 pb-4 mt-5">
      <Container>
        <Row>
          <Col xl={2} lg={4} md={6} sm={6} xs={6} className="footer-column">
            <h5 className="text-white">Address</h5>
            <p className="footer-info">
              HostingKite Kaliurang <br />
              Street Number 44 <br />
              Yogyakarta 55581 <br />
              Yogyakarta, Indonesia
            </p>
          </Col>
          <Col xl={2} lg={4} md={6} sm={6} xs={6} className="footer-column">
            <h5 className="text-white">Customer Service</h5>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li className="footer-info">Phone: (0274) 999999</li>
              <li className="footer-info">IM: 085742424242</li>
              <li className="footer-info">sales@hostingkite.com</li>
            </ul>
          </Col>
          <Col
            xl={2}
            lg={4}
            md={6}
            sm={6}
            xs={6}
            className="footer-column mb-2"
          >
            <h5 className="text-white">Payment Process</h5>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Price List
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Payment Register
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Payment Transfer
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Reseller
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Requirements
                </a>
              </li>
            </ul>
          </Col>
          <Col
            xl={2}
            lg={4}
            md={6}
            sm={6}
            xs={6}
            className="footer-column mb-2"
          >
            <h5 className="text-white">Services</h5>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Web Hosting
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Virtual Private Server
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Web Hosting
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Virtual Private Server
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  SSL Certificate
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Hosting Migration
                </a>
              </li>
            </ul>
          </Col>
          <Col
            xl={2}
            lg={4}
            md={6}
            sm={6}
            xs={6}
            className="footer-column mb-2"
          >
            <h5 className="text-white">About Us</h5>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  About{" "}
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Special Promotion
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Career{" "}
                </a>
              </li>
              <li className="footer-info">
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
          <Col
            xl={2}
            lg={4}
            md={6}
            sm={6}
            xs={6}
            className="footer-column mb-2"
          >
            <h5 className="text-white">Social Media</h5>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li className="footer-info">
                <div className="footer-social d-flex align-items-center my-1">
                  <FaFacebook className="footer-icon mr-2" />
                  <a href="#" className="footer-link">
                    Facebook
                  </a>
                </div>
              </li>
              <li className="footer-info">
                <div className="footer-social d-flex align-items-center flex-row my-1">
                  <FaInstagram className="footer-icon mr-2" />
                  <a href="#" className="footer-link">
                    Instagram
                  </a>
                </div>
              </li>
              <li className="footer-info">
                <div className="footer-social d-flex align-items-center my-1">
                  <FaYoutube className="footer-icon mr-2" />
                  <a href="#" className="footer-link">
                    Youtube
                  </a>
                </div>
              </li>
              <li className="footer-info">
                <div className="footer-social d-flex align-items-center my-1">
                  <FaTwitter className="footer-icon mr-2" />
                  <a href="#" className="footer-link">
                    Twitter
                  </a>
                </div>
              </li>
              <li className="footer-info">
                <div className="footer-social d-flex align-items-center my-1">
                  <FaLinkedin className="footer-icon mr-2" />
                  <a href="#" className="footer-link">
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="mt-4" style={{ borderColor: "white", width: "100%" }} />
        <p className="text-white">Copyright © {thisYear} HostingKite </p>
      </Container>
    </footer>
  );
};

export default Footer;
