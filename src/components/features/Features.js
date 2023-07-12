import React from "react";
import './Features.css';
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faClipboard ,faGem } from '@fortawesome/free-regular-svg-icons';

export default function AppFeatures(){
    return(
        <>
            <section id="features" className="features section-bg">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col lg={4}>
                            <div className="why">
                                <h3>Why Choose Yummy?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                    Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-more">Learn More</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Row className="right">
                                <Col lg={4}>
                                   <div className="box">
                                        <FontAwesomeIcon icon={faClipboard} className="box-icon"/>
                                        <h4>Corporis voluptates officia eiusmod</h4>
                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                   </div>
                                </Col>
                                <Col lg={4}>
                                   <div className="box">
                                        <FontAwesomeIcon icon={faGem} className="box-icon"/>
                                        <h4>Ullamco laboris ladore pan</h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                   </div>
                                </Col>
                                <Col lg={4}>
                                   <div className="box">
                                        <FontAwesomeIcon icon={faInbox} className="box-icon"/>
                                        <h4>Labore consequatur incidid dolore</h4>
                                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                   </div>
                                </Col>
                               
                            </Row>
                        </Col>
                      
                    </Row>
                </Container>
            </section>
        </>
    )
}