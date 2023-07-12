import React from "react";
import './Gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from "react-bootstrap";
import { Autoplay, Pagination, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// import '/path/to/glightbox.js';
// import glightbox from "glightbox";
// import GLightbox from 'glightbox';
var data = [
    {
        "id" : 1,
        "image": require("../../assets/images/gallery/gallery-1.jpg")
    },
    {
        "id" : 2,
        "image": require("../../assets/images/gallery/gallery-2.jpg")
    },
    {
        "id" : 3,
        "image": require("../../assets/images/gallery/gallery-3.jpg")
    },
    {
        "id" : 4,
        "image": require("../../assets/images/gallery/gallery-4.jpg")
    },
    {
        "id" : 5,
        "image": require("../../assets/images/gallery/gallery-5.jpg")
    },
    {
        "id" : 6, 
        "image": require("../../assets/images/gallery/gallery-6.jpg")
    },
    {
        "id" : 7, 
        "image": require("../../assets/images/gallery/gallery-7.jpg")
    },
    {
        "id" : 8, 
        "image": require("../../assets/images/gallery/gallery-8.jpg")
    },
]
export default function AppGallery(){
    return(
        <>
            <section id="gallery" className="gallery section-bg">
                <div className="section-header">
                    <h2>gallery</h2>
                    <p>Check  <span>Our Gallery</span></p>
                </div>
                <Container>
                <Swiper className="swiper-wrapper  align-items-center" 
                    modules={[Autoplay, Pagination, A11y ]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    // centeredSlides={true}
                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                          },
                          1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                      }}
                    >
                        {data.map((slide)=>(
                            <div className=" text-center align-items-center" key={slide.id}>
                                <SwiperSlide key={slide.id}>
                                    <a className="glightbox" href={slide.image} key={slide.id}>
                                        <img src={slide.image} className="img-fluid img" alt="" key={slide.id}/>
                                    </a>
                                </SwiperSlide>
                            </div>
                        ))} 

                    </Swiper>
                </Container>
            </section>
        </>
    )
}