import "./style.scss"

import {Sec3icon_shampo , Sec3icon_mask} from "src/assets/img/index.js";
const Section3 = ()=>{
    return <div className="sec3">

        <div className="content_box_sec3 d-flex flex-lg-row justify-content-lg-between align-items-center  flex-column ">
            <div className="box1 d-flex flex-lg-row align-items-center flex-column-reverse ">
                <div className="col-lg-6 col-12 d-flex align-items-lg-start align-items-center flex-column pe-3 ">
                    <span>انواع محصولات ضدعفونی کننده</span>
                    <div className="box_btn  mt-3 mb-3 mb-lg-0">مشاهده بیشتر</div>
                </div>
                <div className="col-lg-6 col-12 flex-center ">
                    <div className="p5 mt-3 mt-lg-0">
                        <img src={Sec3icon_shampo} style={{width: "100%" , height: "100%" , objectFit: "cover"}} alt=""/>
                    </div>
                </div>
            </div>
            <div className="box2  d-flex flex-lg-row align-items-center flex-column-reverse ">
                <div className="col-lg-6 col-12 d-flex align-items-lg-start align-items-center flex-column pe-3 ">
                    <span>ماسک‌های N95 مدل سه‌بعدی</span>
                    <div className="box_btn  mt-3 mb-3 mb-lg-0 ">مشاهده بیشتر</div>
                </div>
                <div className="col-lg-6 col-12 flex-center ">
                    <div className="p5 mt-3 mt-lg-0">
                        <img src={Sec3icon_mask}  style={{width: "100%" , height: "100%" , objectFit: "cover"}}  alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Section3