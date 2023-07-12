import React from "react";

import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from "react-bootstrap";
import { Pagination, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

var data =[
    {
        "id": 1,
        "text": "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
        "image": require("../../assets/images/testimonials/testimonials-1.jpg"),
        "title": "Saul Goodman",
        "job": "Ceo & Founder"
    },
    {
        "id": 2,
        "text": "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
        "image": require("../../assets/images/testimonials/testimonials-2.jpg"),
        "title": "Sara Wilsson",
        "job": "Designer"
    },
    {
        "id": 3,
        "text": "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
        "image": require("../../assets/images/testimonials/testimonials-3.jpg"),
        "title": "Jena Karlis",
        "job": "Store Owner"
    },
    {
        "id": 4,
        "text": "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
        "image": require("../../assets/images/testimonials/testimonials-4.jpg"),
        "title": "John Larson",
        "job": "Entrepreneur"
    }
]

export default function AppTestimonials(){
    return(
        <>
            <section id="testimonials" className="testimonials section-bg">
                <div className="section-header">
                    <h2>Testimonials</h2>
                    <p>What Are They <span>Saying About Us</span></p>
                </div>
                <Container>
                <Swiper className="swiper-wrapper"
                    modules={[ Pagination, A11y ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    >
                        {data.map((slide)=>(
                            <SwiperSlide key={slide.id}>
                                <div className="item">
                                    <Row className="testimonials-item">
                                        <Col lg={6}>
                                            <div className="content">
                                                <p><FontAwesomeIcon icon={faQuoteLeft} className="quote left"></FontAwesomeIcon> {slide.text} <FontAwesomeIcon icon={faQuoteRight} className="quote right"></FontAwesomeIcon></p>
                                                <h4>{slide.title}</h4>
                                                <h6>{slide.job}</h6>
                                                <ul className="stars d-flex">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon></li>
                                                    <li><FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon></li>
                                                    <li><FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon></li>
                                                    <li><FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon></li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col lg={2} className="text-center">
                                            <img src={slide.image} className="img img-fluid" alt={slide.title}/>
                                        </Col>
                                    </Row>
                                </div>
                                

                            </SwiperSlide>
                        ))}

                    </Swiper>
                </Container>
            </section>
        </>
    )
}