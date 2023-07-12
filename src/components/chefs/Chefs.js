import React from "react";
import './Chefs.css';
import { Container, Row, Col, Image } from "react-bootstrap";
import img1 from '../../assets/images/chefs/chefs-1.jpg'
import img2 from '../../assets/images/chefs/chefs-2.jpg'
import img3 from '../../assets/images/chefs/chefs-3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function AppChefs(){
    return(
        <>
            <section id="chefs" className="chefs section-bg">
                <div className="section-header">
                    <h2>Chefs</h2>
                    <p>Our<span> Proffesional </span>Chefs</p>
                </div>

                <Container>
                    <Row className="g-4">
                        <Col lg={4} md={6}>
                            <div className="chef">
                                <div className="img">
                                    <Image src={img1}/>
                                    <div className="social">
                                        <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon"/></a>
                                        <a href="#"><FontAwesomeIcon icon={faFacebook} className="icon"/></a>
                                        <a href="#"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
                                        <a href="#"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
                                    </div>
                                </div>
                                
                                <div className="info">
                                    <h4>Walter White</h4>
                                    <span>Master Chef</span>
                                    <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="chef">
                                <div className="img">
                                    <Image src={img2}/>
                                    <div className="social">
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon"/></a>
                                        <a href="#"><FontAwesomeIcon icon={faFacebook} className="icon"/></a>
                                        <a href="#"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
                                        <a href="#"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
                                    </div>
                                </div>
                                
                                <div className="info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Patissier</span>
                                    <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="chef">
                                <div className="img">
                                    <Image src={img3}/>
                                    <div className="social">
                                        <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon"/></a>
                                        <a href="#"><FontAwesomeIcon icon={faFacebook} className="icon"/></a>
                                        <a href="#"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
                                        <a href="#"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
                                    </div>
                                </div>
                                
                                <div className="info">
                                    <h4>William Anderson</h4>
                                    <span>Cook</span>
                                    <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}