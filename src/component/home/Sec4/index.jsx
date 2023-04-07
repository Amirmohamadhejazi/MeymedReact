import "./style.scss"

import {Sec2img1 , Sec2img2 , Sec2img3 , Sec2img4 , Sec2img6, Sec2img7, Sec2img8, Sec2img9, Sec2img10, Sec2img11 ,Sec2img12 ,Sec2img13 ,
    sec4img1 , sec4img2 , sec4img3, sec4img4, sec4img5, sec4img6
} from "src/assets/img";
import Swiper from "src/component/helper/Swiper/Swiper";

const Section4 = ()=>{

    let itemsSwipe1 = [
        {
            img:`${Sec2img1}`,
            title:"کد 84514",
            description:"تب سنج دیجیتال رز دیتا",
            price:45000,
            percentage:1,
            id:0
        },
        {
            img:`${Sec2img2}`,
            title:"کد 81544",
            description:"تب سنج دیجیتال رز دیتا",
            price:68479,
            percentage:1,
            id:1
        },
        {
            img:`${Sec2img3}`,
            title:"کد 823014",
            description:"تب سنج دیجیتال رز دیتا",
            price:547920,
            percentage:10,
            id:2
        },
        {
            img:`${Sec2img4}`,
            title:"کد 81774",
            description:"تب سنج دیجیتال رز دیتا",
            price:390000,
            percentage:6,
            id:3
        },
        {
            img:`${Sec2img6}`,
            title:"کد 84514",
            description:"تب سنج دیجیتال رز دیتا",
            price:45000,
            percentage:1,
            id:4
        },
        {
            img:`${Sec2img7}`,
            title:"کد 81544",
            description:"تب سنج دیجیتال رز دیتا",
            price:68479,
            percentage:1,
            id:5
        },
        {
            img:`${Sec2img8}`,
            title:"کد 823014",
            description:"تب سنج دیجیتال رز دیتا",
            price:547920,
            percentage:10,
            id:6
        },
        {
            img:`${Sec2img9}`,
            title:"کد 81774",
            description:"تب سنج دیجیتال رز دیتا",
            price:390000,
            percentage:6,
            id:7
        },
        {
            img:`${Sec2img10}`,
            title:"کد 84514",
            description:"تب سنج دیجیتال رز دیتا",
            price:45000,
            percentage:1,
            id:8
        },
        {
            img:`${Sec2img11}`,
            title:"کد 81544",
            description:"تب سنج دیجیتال رز دیتا",
            price:68479,
            percentage:0.1,
            id:9
        },
        {
            img:`${Sec2img12}`,
            title:"کد 823014",
            description:"تب سنج دیجیتال رز دیتا",
            price:547920,
            percentage:10,
            id:10
        },
        {
            img:`${Sec2img13}`,
            title:"کد 81774",
            description:"تب سنج دیجیتال رز دیتا",
            price:390000,
            percentage:6,
            id:11
        },
    ]

    return <div className="sec4">

        <div className="w-100 flex-center flex-column mt-5 mb-2" >

            {/*<span className="text_title_swiper"  v-if="typeCmp === 'sec6'">برخی از مشتریان ما</span>*/}
            {/*<div className="d-flex flex-column text-center text_description_swiper"  v-if="typeCmp === 'sec6'">*/}
            {/*    <span>تامین منافع مشتری از جمله اهداف مهم در شرکت می‌مد می‌باشد </span>*/}
            {/*    <span>و باعث افتخار ماست که توانسته‌ایم با کیفیت و توانایی‌های خود رضایت مشتریان خود را جلب کنیم.</span>*/}
            {/*</div>*/}

            <Swiper typeCmp="sec_4" data_swipe4={itemsSwipe1} />
        </div>
    </div>
}

export default Section4