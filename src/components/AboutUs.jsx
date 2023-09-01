import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutus1 from '../images/aboutus-1.jpg';
import aboutus2 from '../images/aboutus-2.jpg';
import aboutus3 from '../images/aboutus-3.jpg';
import '../styles/main.css';

const AboutUs = () => {
    return (
        <Container className="about-us-container">
            <div>
                <h1 className="about-us-title">About Rising Horizon Associates (RHA)</h1>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="description-container">
                            <p className="about-us-description">
                                <span className="emphasized-text">Rising Horizon Associates (RHA)</span> emerges as a strong beacon of
                                financial planning and strategic direction in the dynamic fabric of the Philippine business environment.
                            </p>
                            <p className="about-us-description">
                                Recognizing the critical role taxation plays in sustainable national growth and development, <span 
                                className="emphasized-text">Rising Horizon Associates (RHA)</span> has embarked on a project to address
                                the burden businesses often face when navigating the sophisticated tax loopholes.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="image-container1">
                            <img src={aboutus1} alt="About RHA 1" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="image-container1">
                            <img src={aboutus2} alt="About RHA 2" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="description-container">
                            <p className="about-us-description">
                                This study begins to explore the complex challenges of trying to fulfill their tax obligations in a timely 
                                manner to the <span className="emphasized-text">Bureau of Internal Revenue (BIR)</span>. By delving into 
                                the roots of these challenges, we aim to explain a wide range of factors contributing to late tax payments
                            </p>
                            <p className="about-us-description">
                                With <span className="emphasized-text">Rising Horizon Associates (RHA)</span> as our guiding light, we 
                                embark on a journey of challenges faced by Filipino Entrepreneurs.  
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="description-container">
                            <p className="about-us-description">
                                Our goal is to highlight the way to improve financial governance and tax compliance through tax challenges 
                                complexity and innovative solutions offered by <span className="emphasized-text">Rising "to highlight" 
                                Horizon Associates</span>, 
                            </p>
                            <p className="about-us-description">
                                We seek to empower businesses to navigate the complex tax arena with confidence, and not only the success 
                                of their businesses but also the Philippine economy.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="image-container1">
                            <img src={aboutus3} alt="About RHA 3" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default AboutUs;
