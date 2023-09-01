import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Footer = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    <footer className="py-4">
      <Container>
        <Row className='rowdes'>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <div className="logo-container2">
              <span className="logo-text">RHA</span>
              <p id="lodes">Sculpting Financial Success beyond the Horizon</p>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <div>
              <h5>Site Map</h5>
              <ul className="list-unstyled sitemapdes">
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About Us</a></li>             
              </ul>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <div>
              <h5 className='centerdes2'>Connect with Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item link-popup">
                  <a href="#facebook" className="hover-facebook link-with-tooltip">
                    <FaFacebook size={24} />
                    <span className="link-tooltip">RHA Bookkeeping Incorporated</span>
                  </a>
                </li>
                <li className="list-inline-item link-popup">
                  <a href="#instagram" className="hover-instagram link-with-tooltip">
                    <FaInstagram size={24} />
                    <span className="link-tooltip">rhabookkeepinginc</span>
                  </a>
                </li>
                <li className="list-inline-item  link-popup">
                  <a href="#twitter" className="hover-twitter link-with-tooltip">
                    <FaTwitter size={24} />
                    <span className="link-tooltip">@rhainc</span>
                  </a>
                </li>
                <li className="list-inline-item link-popup">
                  <a href="#linkedin" className="hover-linkedin link-with-tooltip">
                    <FaLinkedin size={24} />
                    <span className="link-tooltip">rhabookkeepinginc</span>
                  </a>
                </li>
                <li className="list-inline-item link-popup">
                  <a href="#phone" className="hover-phone link-with-tooltip">
                    <FaPhone size={24} />
                    <span className="link-tooltip">09064172625</span>
                  </a>
                </li>
                <li className="list-inline-item link-popup">
                  <a href="#email" className="hover-mail link-with-tooltip">
                    <FaEnvelope size={24} />
                    <span className="link-tooltip">RHA_BInc@google.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2023 Rising Horizon Associates. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  </>
  );
}

export default Footer;
