// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y, Thumbs} from 'swiper';
import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';
import CardItemsShop from "src/component/helper/cardItemsShop/cardItemsShop.jsx";
import {icon_Arrow_right , icon_Arrow_left} from "../../../assets/img";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.scss"
import 'swiper/swiper-bundle.css'
import {img1Sec2 , img2Sec2 , img3Sec2 , img4Sec2 , img5Sec2 , img6Sec2 ,img7Sec2 , img8Sec2 , img9Sec2 , img10Sec2} from "../../../assets/img";
import {useState} from "react";

const SwiperHelper = ({
                          typeCmp , data_swipe1 ,
                          data_swipe_sec1 , number_option_sec1 , changeTabSec1,
                          data_swipe2 , SwiperHandleClick ,currentCategory , data_swipe3,
                          data_swipe4 , data_swipe6

}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiper = useSwiper();
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
    let breakSwiper3 = {
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
    let breakSwiper4 = {
        360: {
            slidesPerView: 1,
        },
        577: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
    let breakSwiper5 = {
        360: {
            slidesPerView: 1,
        },
        577: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    }
    let breakSwiper6 = {
        360: {
            slidesPerView: 1,
        },
        577: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        }
    }

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <div onClick={() => swiper.slideNext()}>{children}</div>;
    };
    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <div onClick={() => swiper.slidePrev()}>{children}</div>;
    };
    return<>
        <div className="w-100 flex-center" >
            {
                typeCmp === 'sec_header' ?  <div className="box_category flex-wrap">
                        <Swiper

                            breakpoints={breakSwiper1}
                            className="w-100 mb-5"
                             spaceBetween={20}
                            freeMode={true}
                        >

                            {data_swipe1.map((items)=> <SwiperSlide key={items.key}>

                                <div className="items_category  mt-2">
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
                    </Swiper>
                        : typeCmp === "sec_2_nav" ?<Swiper
                        className="w-100"
                            breakpoints={breakSwiper3}
                            freeMode={true}
                        >
                            {data_swipe2.map((items)=> <SwiperSlide key={items.id} >

                                <div className={`cursor_pointer items_sec_2_nav ${items.category === currentCategory && 'items_sec_2_nav_Active'}`} key={items.key}  onClick={(e)=>SwiperHandleClick(items.category)}>
                                    <span className="mt-2 ">{ items.text }</span>
                                </div>
                            </SwiperSlide>)}
                        </Swiper>
                :  typeCmp === "sec_2_content" ?
                            <Swiper
                                className="w-100"
                                breakpoints={breakSwiper4}
                                freeMode={true}
                            >
                                {data_swipe3.map((items , index)=> <SwiperSlide key={index} >
                                    <CardItemsShop dataCard={items}/>
                                </SwiperSlide>)}
                            </Swiper>
                            : typeCmp === "sec_4" ?
                                    <Swiper
                                        className="w-100 d-flex flex-column-reverse"
                                        breakpoints={breakSwiper5}
                                        freeMode={true}
                                    >
                                        <div className="d-flex flex-column align-items-center">
                                            <span className="text_title_swiper">جدیدترین محصولات</span>
                                            <div className="d-flex flex-row my-3 gap-3">
                                                <SwiperButtonNext><img src={icon_Arrow_right} className="icon_R_L" alt=""/></SwiperButtonNext>
                                                <SwiperButtonPrev><img src={icon_Arrow_left} className="icon_R_L" alt=""/></SwiperButtonPrev>
                                            </div>
                                        </div>
                                        {data_swipe4.map((items , index)=> <SwiperSlide key={index} >
                                            <CardItemsShop dataCard={items}/>
                                        </SwiperSlide>)}
                                    </Swiper>
                                    :typeCmp === "sec_6" ?
                                        <Swiper
                                            className="w-100 d-flex flex-column-reverse"
                                            breakpoints={breakSwiper6}
                                            spaceBetween={20}
                                            freeMode={true}
                                        >
                                            <div className="d-flex flex-column align-items-center">
                                                <span className="text_title_swiper">جدیدترین محصولات</span>
                                                <div className="d-flex flex-row my-3 gap-3">
                                                    <SwiperButtonNext><img src={icon_Arrow_right} className="icon_R_L" alt=""/></SwiperButtonNext>
                                                    <SwiperButtonPrev><img src={icon_Arrow_left} className="icon_R_L" alt=""/></SwiperButtonPrev>
                                                </div>

                                                <div className="d-flex flex-column text-center mt-2 mb-4 text_description_swiper">
                                                    <span>تامین منافع مشتری از جمله اهداف مهم در شرکت می‌مد می‌باشد </span>
                                                    <span>و باعث افتخار ماست که توانسته‌ایم با کیفیت و توانایی‌های خود رضایت مشتریان خود را جلب کنیم.</span>
                                                </div>
                                            </div>
                                            {data_swipe6.map((items , index)=> <SwiperSlide key={index} >
                                                <div className="box_items_s2"><img src={items.img} alt=""/></div>
                                            </SwiperSlide>)}
                                        </Swiper>

                                    :""
            }

        </div>
    </>
}

export default SwiperHelper
