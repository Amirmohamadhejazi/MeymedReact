import {ImgLogo , SearchIcon , ShopIcon ,CallIcon , CTScanner , Catheter , HospitalGown , HospitalWheelBed , Stethoscope} from "../../../assets/img";
import "./style.scss"
import Swiper from "src/component/helper/Swiper/Swiper";

const Index = ()=>{

   let dataMenu =[
        {
            text:"ابزار جراحی",
            href:"#",
            key:0
        },
        {
            text:"اتاق عمل",
            href:"#",
            key:1
        },
        {
            text:"تجهیزات پزشکی عمومی",
            href:"#",
            key:2
        },
        {
            text:"هتلینگ",
            href:"#",
            key:3
        },
        {
            text:"تخصصی",
            href:"#",
            key:4
        },
        {
            text:"فیزیوتراپی و توانبخشی",
            href:"#",
            key:5
        },
        {
            text:"تصویربرداری",
            href:"#",
            key:6
        },
        {
            text:"استریلیزاسیون و لندری",
            href:"#",
            key:7
        },
        {
            text:"لوازم مصرفی پزشکی و بیمارستانی",
            href:"#",
            key:8
        },
        {
            text:"تجهیزات آزمایشگاهی",
            href:"#",
            key:9
        },
    ]
    let dataCategory=[
        {
            text:"دستگاه های پزشکی",
            img:`${CTScanner}`,
            href:"#",
            key:0
        },
        {
            text:"تجهیزات اتاق عمل",
            img:`${Catheter}`,
            href:"#",
            key:1
        },
        {
            text:"روپوش های پزشکی",
            img:`${HospitalGown}`,
            href:"#",
            key:2
        },
        {
            text:"تخت های بیمارستانی",
            img:`${HospitalWheelBed}`,
            href:"#",
            key:3
        },
        {
            text:"ابزار پزشکی",
            img:`${Stethoscope}`,
            href:"#",
            key:4
        },
    ]

    return<>

        <div className="header">
            <div className="navbar">
                <div className="iconLogo" style={{zIndex:"4"}}>
                    <img src={ImgLogo} width="100%" height="100%" alt="icon"/>
                </div>
                <div className="input-group flex-nowrap position-relative input_search input_desktop">
                    <div className="position-absolute iconInput" style={{zIndex:"6"}}>
                        <img src={SearchIcon} width="100%" height="100%" alt="icon"/>
                    </div>
                    <input type="text" className="form-control inputCustom"
                           placeholder="نام محصول یا برند مورد نظرتان را وارد نمایید!" aria-label="numberpeopel"
                           aria-describedby="addon-wrapping" name="numberpeopel"/>
                </div>
                <div className="inputNav flex-center bg-white">
                    <span className="familly_iranyekan_bold display_span_sell">سبد درخواست</span>
                    <div className=" iconbtn" style={{zIndex:"4"}}>
                        <img src={ShopIcon} width="100%" height="100%" alt="icon"/>
                    </div>
                </div>


                <div className="btn_menu_mob bg-white">
                    <div className="w-100 h-100 flex-center">

                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>

                        </button>
                    </div>
                </div>

                <div className="inputNav flex-center bg_Saffron display_btn_nav_desc">
                    <div className="w-100 d-flex justify-content-around align-items-center">
                        <div className="d-flex flex-column text-left">
                            <span>۰۲۱</span>
                            <span className="familly_iranyekan_bold">۹۱۱۰۱۴۹۱۹</span>
                        </div>
                        <div className=" iconbtn" style={{zIndex: "4"}}>
                            <img src={CallIcon} width="100%" height="100%" alt="icon"/>
                        </div>
                    </div>
                </div>
                <div className="inputNav flex-center bg_TuftsBlue display_btn_nav_desc">
                    <div className="w-100 d-flex justify-content-around align-items-center text-center text-white">
                        ورود | ثبت نام
                    </div>
                </div>


            </div>
            <div className="input-group flex-nowrap position-relative input_search input_mob mb-5">
                <div className="position-absolute iconInput" style={{zIndex:"4"}}>
                    <img src={SearchIcon} width="100%" height="100%" alt="icon"/>
                </div>
                <input type="text" className="form-control inputCustom" placeholder="نام محصول یا برند مورد نظرتان را وارد نمایید!" aria-label="numberpeopel" aria-describedby="addon-wrapping" name="numberpeopel"/>
            </div>
            <nav className="navbar navbar-expand-xl bg-white rounded nav-canvas   nav_mobile_items ">
                <div className="w-100 p-0 ">
                    <button className="navbar-toggler menu_btn_mob" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop"
                         aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel"></h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            <div className="d-flex  align-items-center justify-content-around">
                                <div className="inputNav flex-center bg_TuftsBlue display_btn_nav_mobile">
                                    <div
                                        className="w-100 d-flex justify-content-around align-items-center text-center text-white">
                                        ورود | ثبت نام
                                    </div>
                                </div>
                                <div className="inputNav flex-center bg_Saffron display_btn_nav_mobile mt-2">
                                    <div className="w-100 d-flex justify-content-around align-items-center">
                                        <div className="d-flex flex-column text-left">
                                            <span>۰۲۱</span>
                                            <span className="familly_iranyekan_bold">۹۱۱۰۱۴۹۱۹</span>
                                        </div>
                                        <div className=" iconbtn" style={{zIndex:"4"}}>
                                            <img src={CallIcon} width="100%" height="100%" alt="icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="w-100 d-lg-flex justify-content-between navbar-nav p-0">
                                {dataMenu.map((items)=><li className="nav-item" key={items.key}>
                                    <a className="nav-link box_menu_items" aria-current="page" href="#" >{items.text}</a>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Swiper data_swipe1={dataCategory} typeCmp="sec_header"/>
        </div>

    </>
}

export default Index