import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'
import { useState, useEffect } from 'react';
import img1 from '../assets/images-carousel/img1.jpg'
import img2 from '../assets/images-carousel/img2.jpg'
import img3 from '../assets/images-carousel/img3.jpg'



function Carousel() {
    const images = [img1, img2, img3];
    console.log(images);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        cssEase: "linear",
        pauseOnHover: false,
    };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog mw-100 m-0">
                <div className="modal-content rounded-0">
                    <button type="button" className="btn-close btn-close-white position-absolute button-close-carousel" data-bs-dismiss="modal" aria-label="Close"></button>
                    <Slider {...settings}>
                        {images.map((item, index) => (
                            <div className='container-box'>
                                <img className='w-100 h-100 object-fit-cover' src={item} alt="" />
                                
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}


export default Carousel;
