import React from 'react';
import { PopUpWrapper, PopUpContainer, SlideImage, PopUpTextContainer, PopUpDesc, CloseBtn } from "./SlideStyle";

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
    const seeDisplayProject = useSelector((state) => state.pledge.displayImagesPopUp);
    const dispatch = useDispatch();

    // Close popUp on button &/or outside click.
    const closePopUp = () => {
        dispatch(hideProjectImages());
    };




    return (
        <PopUpWrapper showelement={seeDisplayProject}>
            <PopUpContainer>
                <Swiper
                pagination={{
                    "clickable": true,
                    "className" : "swiper-pagination-bullet"
                }}
                observer={true}
                observeParents={true}
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

                <PopUpTextContainer>
                    <PopUpDesc>Whether it’s for work or for leisure activities like video games, your desk setup is sure to have an impact on your performance. These monitor stands are super versatile, improve posture and help reduce eye and neck strain. These monitor stands are sleek, stylish and eco-friendly.</PopUpDesc>
                </PopUpTextContainer>
                <CloseBtn onClick={closePopUp}>Close</CloseBtn>
            </PopUpContainer>
        </PopUpWrapper>
    )
}

export default Slide;