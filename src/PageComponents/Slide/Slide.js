import React, { useRef, useEffect } from 'react';
import { SlideWrapper, SlideContainer, SlideImage, CloseBtn } from "./SlideStyle";

// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { hideProjectImages } from "../../Features/pledgeSlice";


// Swiper.
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import "./style.css";
SwiperCore.use([Pagination]);


function Slide() {
    // Redux.
    const dispatch = useDispatch();


    const seeDisplayProject = useSelector((state) => state.pledge.displayImagesPopUp);
    const sliderRef = useRef();


    const closePopUp = () => {
        dispatch(hideProjectImages());
    };






    return (
        <SlideWrapper showDiv={seeDisplayProject}>
            <SlideContainer>
                <Swiper
                pagination={{
                    "clickable": true,
                    "className" : "swiper-pagination-bullet"
                }}
                spaceBetween={50}
                slidesPerView={1}
                >
                    <SwiperSlide>
                        <SlideImage src="./images/project-1.jpg" alt="Project Slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideImage src="./images/project-2.jpg" alt="Project Slide"/>
                    </SwiperSlide>
                </Swiper>
                <CloseBtn onClick={closePopUp}>Close</CloseBtn>
            </SlideContainer>
        </SlideWrapper>
    )
}

export default Slide
