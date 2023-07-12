import React from "react";
import './Counter.css';
import { PureCounter } from "@srexi/purecounterjs";
import { Container, Row, Col } from "react-bootstrap";
export default function AppCounter(){
    return(
        <>
            <section id="counter" className="counter">
                <Container>
                    <Row>
                        <Col lg={3} md={6}>
                            <div className="counter-item">
                                <span data-purecounter-start="0" data-purecounter-end="232" className="purecounter">232</span>
                                <p>Clients</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="counter-item">
                                <span data-purecounter-start="0" data-purecounter-end="521" className="purecounter" >521</span>
                                <p>Projects</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="counter-item">
                                <span data-purecounter-start="0" data-purecounter-end="1453" className="purecounter" >1453</span>
                                <p>Hours Of Support</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="counter-item">
                                <span data-purecounter-start="0" data-purecounter-end="32" className="purecounter" >32</span>
                                <p>Workers</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}