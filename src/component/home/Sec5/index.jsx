import "./style.scss"
import {sec5Logo} from "src/assets/img";
import {useEffect, useState} from "react";
const Section5 = () => {

    const [timer , SetTimer] = useState({d:0 ,h:0 ,m:0 ,s:0 })

    useEffect(()=>{
        let countDownDate = new Date("April 10, 2023 15:37:25").getTime();
        setInterval(()=> {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            if (distance <= 0){
                SetTimer({d:0 ,h:0 ,m:0 ,s:0 })
            }else {
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                SetTimer({d:days ,h:hours ,m:minutes ,s:seconds })
            }

        }, 1000);
    },[])
    return <div className="sec5">
            <div className="row gx-lg-5 my-5">
                <div className="col-12 col-lg-6 mt-3">
                    <div className="box_items1 align-items-center text-center justify-content-lg-between">
                        <span className="text-title-sec5">پیشنهاد ویژه</span>
                        <span className=" text-desc-sec5">انواع تجهیزات پزشکی مخصوص اتاق عمل از معتبرترین برندهای موجود در بازار با تخفیف اختصاصی ویژه فروشگاه می‌مد به مدت محدود</span>
                        <div className="w-100 d-flex flex-column flex-lg-row justify-lg-content-between align-items-lg-end ">
                            <div className="d-flex col-12 col-lg-6 flex-row justify-content-between">
                                <div className="d-flex flex-column">
                                    <span className="title_detail">ثانیه</span>
                                    <span className="value_detail">{timer.s}</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="title_detail">دقیقه</span>
                                    <span className="value_detail">{timer.m}</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="title_detail">ساعت</span>
                                    <span className="value_detail">{timer.h}</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="title_detail">روز</span>
                                    <span className="value_detail">{timer.d}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center justify-content-lg-end col-12 col-lg-6 ">
                                <div className="btn_box_items">
                                    <span>مشاهده بیشتر</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12  col-lg-6 mt-3">
                    <div className="d-flex  align-items-start justify-content-center justify-content-lg-between box_items2">
                        <div className="w-100 d-flex flex-column-reverse flex-lg-row text-center justify-content-lg-between align-items-center align-items-lg-start">
                            <div className="d-flex flex-column text-title-sec5 mt-3 mt-lg-0">
                                <span>بیش از 30 درصد تخفیف</span>
                                <span> برای محصولات برند رزمکس</span>
                            </div>
                            <div><img src={sec5Logo} alt="" /></div>
                        </div>
                        <div
                            className="w-100 d-flex flex-column text-desc-sec5 my-lg-3 align-items-center align-items-lg-start  my-3 my-lg-0">
                            <span>محصولات نمونه برند رزمکس</span>
                            <span> با تکنولوژی برتر و بالاترین کیفیت</span>
                        </div>
                        <div
                            className="d-flex justify-content-center justify-content-lg-start align-items-start col-12 col-lg-12  ">
                            <div className="btn_box_items">
                                <span>مشاهده بیشتر</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
}
export default Section5