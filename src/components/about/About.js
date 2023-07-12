import React from "react";
import './About.css';
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import aboutImage from '../../assets/images/about.jpg';
import aboutImage2 from '../../assets/images/about-2.jpg';

export default function AppAbout(){
    return (
        <>
            <section id="about" className="about">
                <div className="section-header">
                    <h2>About Us</h2>
                    <p>Learn More <span>About Us</span></p>
                </div>
                <Container>
                    <Row>
                        <Col lg={7} className="position-relative">
                            <Image src={aboutImage} className="about-image"/>
                            <div className="position-absolute call">
                                <h3>Book a Table</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                        <div className="content ps-lg-5 ps-0">
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li className="d-flex">
                                    <p><FontAwesomeIcon icon={faCheckDouble} className="check-icon"/> </p>
                                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </li>
                                <li className="d-flex">
                                    <p><FontAwesomeIcon icon={faCheckDouble} className="check-icon"/> </p>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                </li>
                                <li className="d-flex">
                                    <p><FontAwesomeIcon icon={faCheckDouble} className="check-icon"/> </p> 
                                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                                </li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                            </p>
                            <div>
                                <Image src={aboutImage2}/>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}