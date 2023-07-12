import React from "react";
import './Events.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from "react-bootstrap";
import { Pagination, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

var data = [
    {
        "id" : 1,
        "title": "Custom Parties",
        "price": 99,
        "text": "Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.",
        "image": require("../../assets/images/events-1.jpg")
    },
    {
        "id" : 2,
        "title": "Private Parties",
        "price": 289,
        "text": "In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.",
        "image": require("../../assets/images/events-2.jpg")
    },
    {
        "id" : 3,
        "title": "Birthday Parties",
        "price": 499,
        "text": "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.",
        "image": require("../../assets/images/events-3.jpg")
    },
    {
        "id" : 4,
        "title": "Custom Parties",
        "price": 99,
        "text": "Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.",
        "image": require("../../assets/images/events-1.jpg")
    },
    {
        "id" : 5,
        "title": "Private Parties",
        "price": 289,
        "text": "In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.",
        "image": require("../../assets/images/events-2.jpg")
    },
    {
        "id" : 6,
        "title": "Birthday Parties",
        "price": 499,
        "text": "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.",
        "image": require("../../assets/images/events-3.jpg")
    },
]
export default function AppEvents(){
    return(
        <>
            <section id="events" className="events">
                <div className="section-header">
                    <h2>Events</h2>
                    <p>Share <span>Your Moments</span> In Our Restaurant</p>
                </div>
                {/* <Container> */}
                <Swiper className="swiper-wrapper"
                    modules={[ Pagination, A11y ]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                          },
                          1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                          },
                      }}
                    >
                        {data.map((slide)=>(
                            <SwiperSlide key={slide.id}>
                                <Row className="item">
                                    <div className="img">
                                        <img src={slide.image}/>
                                    </div>
                                    <div className="content">
                                        <h3>{slide.title}</h3>
                                        <div className="price">${slide.price}</div>
                                        <p>{slide.text}</p>
                                    </div>
                                </Row>
                                

                            </SwiperSlide>
                        ))}

                    </Swiper>
                {/* </Container> */}
            </section>
        </>
    )
}