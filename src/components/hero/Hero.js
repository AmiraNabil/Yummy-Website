import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/hero-img.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import glightboxMin from 'glightbox/dist/js/glightbox';

export default function AppHero(){
    
    return(
        <>
            <div id="hero" className='section-bg hero'>
                <Container>
                    <Row  className='d-flex align-items-center justify-content-between hero-container'>
                        <Col lg={5} md={12}>
                        <h1 data-aos="fade-up">Enjoy Your Healthy <br/>Delicious Food</h1>
                        <p data-aos="fade-up" data-aos-delay="100">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                        <div className="d-flex hero-btns" data-aos="fade-up" data-aos-delay="200">
                            <a href="#book-a-table" className="btn btn-primary">Book a Table</a>
                            <a href="#" className="glightbox btn-watch d-flex align-items-center"  data-aos="zoom-out" data-aos-delay="300"> 
                            <FontAwesomeIcon icon={faCirclePlay} className='play-icon'/> <span className='watch'>Watch Video</span></a>
                        </div>
                        </Col>
                        <Col lg={5} md={12}>
                            <Image src={heroImage} data-aos="zoom-out" data-aos-delay="300"/> 
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}