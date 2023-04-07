import "./style.scss"
import Swiper from "src/component/helper/Swiper/Swiper";
import {sec4img1, sec4img2, sec4img3, sec4img4, sec4img5, sec4img6} from "src/assets/img";

const Section6 = ()=>{
    let itemsSwipe2= [
        {
            img:`${sec4img6}`,
            id:0
        },
        {
            img:`${sec4img1}`,
            id:1
        },
        {
            img:`${sec4img2}`,
            id:2
        },
        {
            img:`${sec4img3}`,
            id:3
        },
        {
            img:`${sec4img4}`,
            id:4
        },
        {
            img:`${sec4img5}`,
            id:5
        },
    ]
    return<div className="sec6">
        <Swiper typeCmp="sec_6" data_swipe6={itemsSwipe2} />
    </div>
}

export default Section6