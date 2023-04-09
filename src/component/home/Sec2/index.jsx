import "./style.scss"
import {Sec2img1 ,Sec2img2 ,Sec2img3,Sec2img4 ,Sec2img5 ,Sec2img6 ,Sec2img7 ,Sec2img8 ,Sec2img9 ,Sec2img10 ,Sec2img11 ,Sec2img12 ,Sec2img13 ,Sec2img14 ,Sec2img15 , } from "src/assets/img";
import CardItemsShop from "src/component/helper/cardItemsShop/cardItemsShop.jsx";
import { v4 as uuidv4 } from 'uuid';
import {useEffect, useState} from "react";
import Swiper from "src/component/helper/Swiper/Swiper";

const Index = ()=>{

    const [width_desc , SetWidth_desc] = useState(true)
    const [currentCategory , SetCurrentCategory] = useState("category5")
    const [filteredItems , SetFilteredItems] = useState([])
    let itemsNav=[
        {text:"دستگاه های پزشکی ",
            category:"category1",
            id:0},
        {text:"تجهیزات اتاق عمل",
            category:"category2",
            id:1},
        {text:"روپوش‌های پزشکی",
            category:"category3",
            id:2},
        {text:"تخت‌های بیمارستانی",
            category:"category4",
            id:3},
        {text:"ابزار پزشکی",
            category:"category5",
            id:4},
    ]
    let itemsCard= [
        {
            img:`${Sec2img1}`,
            title:"کد 84514",
            description:"تب سنج دیجیتال رز دیتا",
            price:45000,
            percentage:0,
            category: 'category5',
            id:uuidv4()
        },
        {
            img:`${Sec2img2}`,
            title:"کد 81544",
            description:"تب سنج دیجیتال رز دیتا",
            price:68479,
            percentage:0,
            category: 'category5',
            id:uuidv4()
        },
        {
            img:`${Sec2img3}`,
            title:"کد 823014",
            description:"تب سنج دیجیتال رز دیتا",
            price:547920,
            percentage:0,
            category: 'category5',
            id:uuidv4()
        },
        {
            img:`${Sec2img4}`,
            title:"کد 81774",
            description:"تب سنج دیجیتال رز دیتا",
            price:390000,
            percentage:0,
            category: 'category5',
            id:uuidv4()
        },
        {
            img:`${Sec2img5}`,
            title:"کد 81055",
            description:"تب سنج دیجیتال رز دیتا",
            price:390000,
            percentage:0,
            category: 'category5',
            id:uuidv4()
        },
        {
            img:`${Sec2img6}`,
            title:"کد 81114",
            description:"تب سنج دیجیتال رز دیتا",
            price:1221120,
            percentage:0,
            category: 'category5',
            id:uuidv4()
        },
        {
            img:`${Sec2img7}`,
            title:"کد 83014",
            description:"تب سنج دیجیتال رز دیتا",
            price:504873,
            percentage:0,
            category: 'category5',
            id:uuidv4()
        },
        {
            img:`${Sec2img8}`,
            title:"کد 81114",
            description:"تب سنج دیجیتال رز دیتا",
            price:10002000,
            percentage:0,
            category: 'category5',
            id:uuidv4()
        },
        {
            img:`${Sec2img9}`,
            title:"کد 12111",
            description:"تخت بیمارستانی",
            price:102000,
            percentage:0,
            category: 'category4',
            id:uuidv4()
        },
        {
            img:`${Sec2img10}`,
            title:"کد 1321",
            description:"تخت بیمارستانی",
            price:1020540,
            percentage:0,
            category: 'category4',
            id:uuidv4()
        },
        {
            img:`${Sec2img11}`,
            title:"کد 1212",
            description:"روپوش پزشکی",
            price:10002000,
            percentage:0,
            category: 'category3',
            id:uuidv4()
        },
        {
            img:`${Sec2img12}`,
            title:"کد 1231",
            description:"تیغ جراحی",
            price:10002000,
            percentage:0,
            category: 'category2',
            id:uuidv4()
        },
        {
            img:`${Sec2img13}`,
            title:"کد 1231",
            description:"تخت بیمارستانی",
            price:10002000,
            percentage:0,
            category: 'category4',
            id:uuidv4()
        },
        {
            img:`${Sec2img14}`,
            title:"کد 1231",
            description:"تخت بیمارستانی",
            price:10002000,
            percentage:0,
            category: 'category4',
            id:uuidv4()
        },
        {
            img:`${Sec2img15}`,
            title:"کد 1231",
            description:"مانیتورینگ",
            price:1502000,
            percentage:0,
            category: 'category1',
            id:uuidv4()
        },

    ]

    function filter(category) {
        SetCurrentCategory(category)
    }
    function handleClickSwiper(data) {
        filter(`${data}`)
    }

    useEffect(()=>{
        if (currentCategory !== 'all') {
            SetFilteredItems(itemsCard.filter(item => item.category === currentCategory))
        }
    },[currentCategory])

    useEffect(()=>{
        setInterval(()=>{
            SetWidth_desc(window.innerWidth > 1200)
        },[1000])
    },[])

    return <>
    <div className="sec2">
        <div className="box_menu_sec2">
            <div className="menu_inner_t col-12 col-lg-11 flex-wrap">
                <Swiper typeCmp="sec_2_nav" data_swipe2={itemsNav} SwiperHandleClick={handleClickSwiper} currentCategory={currentCategory}/>
            </div>
            <div className="menu_inner_b col-11 col-lg-10"/>
        </div>
        <div className="w-100 flex-center mb-5">
            {
                width_desc ? <div className={`w-100 d-flex ${filteredItems.length <= 2 ? 'justify-content-start' : 'justify-content-center'} align-items-center flex-wrap  sec2-content-des `}>
                    {filteredItems.map((items )=> <CardItemsShop  dataCard={items} key={items.id} />)}
                </div> : <Swiper typeCmp="sec_2_content" data_swipe3={filteredItems} />
            }
        </div>
    </div>
    </>
}

export default Index