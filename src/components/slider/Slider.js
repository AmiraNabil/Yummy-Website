import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {  Pagination, A11y} from 'swiper';
import { Container } from "react-bootstrap";
// import 'swiper/swiper-bundle.min.css';

export default function Slider ({slides}){
    return (
        <Container>
            <Swiper 
    modules={[ Pagination, A11y ]}
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >
        {slides.map((slide)=>(
            <SwiperSlide key={slide.image}>
                <img src={slide.image}/>
                <p>{slide.text}</p>
                <h1>{slide.title}</h1>
            </SwiperSlide>
        ))}

    </Swiper>
        </Container>
    )
    
}