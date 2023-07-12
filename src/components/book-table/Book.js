import React from "react";
import './Book.css';
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import imgBook from '../../assets/images/reservation.jpg'

export default function AppBook(){
    return (
        <>
            <section id='book' className="book">
            <   div className="section-header">
                    <h2>Book A Table</h2>
                    <p>Book<span> Your Stay </span>With Us</p>
                </div>
                <Container>
                    <Row className="form-wrapper g-0">
                        <Col lg={4}>
                            <Image src={imgBook}/>
                        </Col>
                        <Col lg={8} className="right">
                            <div className="form">
                                <Row className="row">
                                    <Col lg={4}>
                                        <Form.Control type="text" placeholder="Your Name" size="sm"></Form.Control>
                                    </Col>
                                    <Col lg={4}>
                                        <Form.Control type="email" placeholder="Your Email" size="sm"></Form.Control>
                                    </Col>
                                    <Col lg={4}>
                                        <Form.Control type="tel" placeholder="Your Phone" size="sm"></Form.Control>
                                    </Col>
                                </Row>
                                <Row  className="row">
                                    <Col lg={4}>
                                        <Form.Control type="date" placeholder="Date" size="sm"></Form.Control>
                                    </Col>
                                    <Col lg={4}>
                                        <Form.Control type="time" placeholder="Time" size="sm"></Form.Control>
                                    </Col>
                                    <Col lg={4}>
                                        <Form.Control type="number" min="1" placeholder="# of people" size="sm"></Form.Control>
                                    </Col>
                                </Row>
                                <Row  className="row"> 
                                    <Col lg={12}>
                                        <Form.Control as="textarea" className="textarea" placeholder="Message" size="sm"></Form.Control>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <a className="btn btn-primary">Book a Table</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}