import React from "react";
import './Footer.css';
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import { faTwitter ,faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function AppFooter(){
    return(
        <>
            <footer id='footer' className="footer">
                <Container>
                    <Row>
                        <Col lg={3} md={6} className="d-flex mb-5">
                            <FontAwesomeIcon icon={faLocationDot} className="icon"></FontAwesomeIcon>
                            <div>
                                <h4>Address</h4>
                                <p>
                                    A108 Adam Street <br/>
                                    New York, NY 535022 - US<br/>
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="d-flex mb-5">
                            <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
                            <div>
                                <h4>Reservations</h4>
                                <strong>Phone:</strong> +1 5589 55488 55<br/>
                                <strong>Email:</strong> info@example.com<br/>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="d-flex mb-5">
                            <FontAwesomeIcon icon={faClock} className="icon"></FontAwesomeIcon>
                            <div>
                                <h4>Opening Hours</h4>
                                <p>
                                    <strong>Mon-Sat: 11AM</strong> - 23PM<br/>
                                    Sunday: Closed
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="d-flex mb-5">
                            <div>
                                <h4>Follow Us</h4>
                                <div className="social-links d-flex">
                                    <a href=""><FontAwesomeIcon icon={faTwitter} className="social-icon"></FontAwesomeIcon></a>
                                    <a href=""><FontAwesomeIcon icon={faFacebook} className="social-icon"></FontAwesomeIcon></a>
                                    <a href=""><FontAwesomeIcon icon={faInstagram} className="social-icon"></FontAwesomeIcon></a>
                                    <a href=""><FontAwesomeIcon icon={faLinkedin} className="social-icon"></FontAwesomeIcon></a>
                                </div>
                            </div>
                        </Col>

                        <div className="copyright">
                            Copyright &copy;2023 All rights reserved to <a href="https://www.linkedin.com/in/amira-nabil-an100/" target="_blank"><strong className="link">Amira Nabil</strong></a>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    )
}