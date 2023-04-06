// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.scss"
import 'swiper/swiper-bundle.css'
import {img1Sec2 , img2Sec2 , img3Sec2 , img4Sec2 , img5Sec2 , img6Sec2 ,img7Sec2 , img8Sec2 , img9Sec2 , img10Sec2} from "../../../assets/img";

const SwiperHelper = ({
                          typeCmp , data_swipe1 ,
                          data_swipe_sec1 , number_option_sec1 , changeTabSec1

}) => {

    console.log(data_swipe_sec1 , number_option_sec1 , changeTabSec1)

    let breakSwiper1 = {
        360: {
            slidesPerView: 1,
        },
        577: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
    }
    let breakSwiper2 = {
        360: {
            slidesPerView: 1,
        },
        577: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400:{
            slidesPerView: 5,
        }
    }
    return<>
        <div className="w-100 flex-center" >

            {
                typeCmp === 'sec_header' ?  <div className="box_category flex-wrap">
                        <Swiper
                            breakpoints={breakSwiper1}
                            className="w-100 " style={{height:"300px"}}
                             spaceBetween={20}
                            freeMode={true}
                        >

                            {data_swipe1.map((items)=> <SwiperSlide key={items.key}>
                                <div className="items_category mt-2">
                                    <div className="img_category">
                                        <img src={items.img} style={{width: "100%" , height: "100%" , objectFit: "cover"}} alt=""/>
                                    </div>
                                    <span>{items.text}</span>
                                </div>

                            </SwiperSlide>)}
                        </Swiper>
                </div>

                    : typeCmp === "sec_1" ?<Swiper

                        breakpoints={breakSwiper2}

                        spaceBetween={10}
                        freeMode={true}

                    >
                        {data_swipe_sec1.map((items)=> <SwiperSlide key={items.id} onClick={(e)=>changeTabSec1(items.id)}>
                            <div className={`options_box_select  d-flex flex-column ${items.id  === number_option_sec1 && 'options_box_selected'}`} >
                                <img src={items.id  === number_option_sec1 ? items.imgActive :items.img} alt=""/>
                                <span className="mt-3">{items.text}</span>
                            </div>

                        </SwiperSlide>)}
                    </Swiper>  :""
            }

        </div>
    </>
}

export default SwiperHelper
