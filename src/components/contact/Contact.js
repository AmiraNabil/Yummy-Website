import React from "react";
import './Contact.css';
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function AppContact(){
    return (
        <>
            <section id='contact' className="contact">
            <   div className="section-header">
                    <h2>Contact</h2>
                    <p>Need Help? <span> Contact Us </span></p>
                </div>
                <Container>
                    <Row>
                        <Col className="mb-3 map" lg={12}>
                            <div className="google-map position-relative overflow-hidden h-100">
                            <iframe className="position-relative w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col lg={6}>
                            <div className="item">
                                <div>
                                    <FontAwesomeIcon className="icon" icon={faMap}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>Our Address</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="item">
                                <div>
                                    <FontAwesomeIcon className="icon" icon={faEnvelope}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>contact@example.com</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col lg={6}>
                            <div className="item">
                                <div>
                                    <FontAwesomeIcon className="icon" icon={faPhone}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="item">
                                <div>
                                    <FontAwesomeIcon className="icon" icon={faShareNodes}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>Opening Hours</h4>
                                    <div><strong>Mon-Sat:</strong> 11AM - 23PM; 
                                    <strong> Sunday:</strong> Closed
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="form">
                    <Row className="form-row">
                        <Col lg={6} className="name">
                            <Form.Control type="text" placeholder="Your Name" size="sm"></Form.Control>
                        </Col>
                        <Col lg={6}>
                            <Form.Control type="email" placeholder="Your Email" size="sm"></Form.Control>
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col lg={12}>
                            <Form.Control type="text" placeholder="Subject" size="sm"></Form.Control>
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col lg={12}>
                            <Form.Control as="textarea" placeholder="Message" className="textarea" size="sm"></Form.Control>
                        </Col>
                    </Row>
                    <div className="text-center">
                        <a className="btn btn-primary">Send Message</a>
                    </div>
                    </div>
                </Container>
            </section>
        </>
    )
}