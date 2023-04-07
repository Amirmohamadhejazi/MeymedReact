import "./style.scss"
import Collapse from "src/component/helper/collapse/Collapse.jsx";
import {iconSec8} from "src/assets/img/index.js";

const Section8 = () => {
    let items_clp=[
        {
            title:"نحوه فعالیت فروشگاه اینترنتی تجهیزات پزشکی می مد به چه صورت است؟" ,
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur consequatur explicabo facere neque obcaecati optio porro, qui ratione vitae? Cumque dolor doloremque dolorum excepturi expedita modi odit, quidem velit?",
            id:0
        },
        {
            title:"کالای مورد نظرتان را در ساید می مد چگونه جستجو کنید؟" ,
            desc:"کالا ها و تجهیزات پزشکی موجود در سایت، همگی در بخش هایی مجزا دسته بندی شده اند و شما می توانید با ورود به هر دسته، از تنوع کالاهای موجود در آن دیدن کنید. همچنین در قسمت جستجوی سایت نیز می توانید نام برند یا محصول مورد نظرتان را درج و سپس گزینه های موجود در سایت را مشاهده نمایید.",
            id:1
        },
        {
            title:"روش های استعلام قیمت هر کالا چگونه است؟" ,
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur consequatur explicabo facere neque obcaecati optio porro, qui ratione vitae? Cumque dolor doloremque dolorum excepturi expedita modi odit, quidem velit?",
            id:2
        },
        {
            title:"نحوه پرداخت خرید هر کالا چگونه است؟" ,
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur consequatur explicabo facere neque obcaecati optio porro, qui ratione vitae? Cumque dolor doloremque dolorum excepturi expedita modi odit, quidem velit?",
            id:3
        }
    ]


    return <div className="sec8">
        <span className="w-100 flex-center text_top">سوالات متداول</span>
        <div className="box_content  d-flex flex-lg-row justify-content-lg-between flex-column   ">
            <div className="col-12 col-lg-7  mt-2 p-2">
                <Collapse items_collapse={items_clp}/>
            </div>
            <div className="col-12 col-lg-4 d-flex mt-2 p-2 align-items-start justify-content-center">
                <img src={iconSec8} className="img_sec8" alt="s"/>
            </div>
        </div>
    </div>
}

export default Section8