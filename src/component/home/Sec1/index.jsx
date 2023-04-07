import {
    imgSec1hospital,
    img5Sec1,
    img5Sec1Active,
    img4Sec1,
    img4Sec1Active,
    img3Sec1,
    img3Sec1Active,
    img2Sec1,
    img2Sec1Active,
    img1Sec1,
    img1Sec1Active,
    CTScanner, Catheter, HospitalGown, HospitalWheelBed, Stethoscope
} from "src/assets/img";
import "./style.scss"
import {useState} from "react";
import Swiper from "src/component/helper/Swiper/Swiper";


const Index = () => {

    const [number_option , SetNumber_option] = useState(0)
    const [formData , SetFormData] = useState({
        name: '',
        phone: '',
        ost: '',
        city: '',
        detail: ''
    })
    let items_options =[
        {
            text:"سازمانی",
            img:`${img5Sec1}`,
            imgActive:`${img5Sec1Active}`,
            id:0
        },
        {
            text:"استعلام قیمت",
            img:`${img4Sec1}`,
            imgActive:`${img4Sec1Active}`,
            id:1
        },
        {
            text:"درخواست دمو",
            img:`${img3Sec1}`,
            imgActive:`${img3Sec1Active}`,
            id:2
        },
        {
            text:"درخواست خدمات",
            img:`${img2Sec1}`,
            imgActive:`${img2Sec1Active}`,
            id:3
        },
        {
            text:"درخواست تعمیرات",
            img:`${img1Sec1}`,
            imgActive:`${img1Sec1Active}`,
            id:4
        }
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

    function changeTab(data) {
        console.log(data)
        SetNumber_option(data)
    }
  return <>
      <div className="header">
          <Swiper data_swipe1={dataCategory} typeCmp="sec_header"/>
      </div>
      <div className="sec1">
          <div className="content_box_sec1 flex-column flex-lg-row">
              <div className="item_box col-12 col-lg-7  ">
                  <div className="d-flex flex-row justify-content-between flex-wrap">
                      <Swiper typeCmp="sec_1" data_swipe_sec1={items_options} changeTabSec1={changeTab} number_option_sec1={number_option}/>
                  </div>
                  <div className="d-flex flex-column my-3" style={{fontSize: "10px"}}>
                      {items_options[number_option].text}
                      <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</span>
                      <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</span>
                      <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</span>
                  </div>
                  <form className="d-flex flex-row justify-content-between flex-wrap " >
                      <div className="col-12 col-lg-4">
                          <div className="input-group flex-nowrap boxes_under_options ">
                              <input type="text" className="form-control inputCustom" placeholder="نام و نام خانوادگی" aria-label="name" aria-describedby="addon-wrapping" name="name"/>
                          </div>
                      </div>
                      <div className="col-12 col-lg-4">
                          <div className="input-group flex-nowrap boxes_under_options ">
                              <input type="text" className="form-control inputCustom" placeholder="شماره تماس" aria-label="phone" aria-describedby="addon-wrapping" name="phone"/>
                          </div>
                      </div>
                      <div className="col-12 col-lg-4">
                          <div className="input-group flex-nowrap boxes_under_options ">
                              <input type="text" className="form-control inputCustom" placeholder="استان" aria-label="ost" aria-describedby="addon-wrapping" name="ost"/>
                          </div>
                      </div>
                      <div className="col-12 col-lg-4">
                          <div className="input-group flex-nowrap boxes_under_options ">
                              <input type="text" className="form-control inputCustom" placeholder="شهر" aria-label="city" aria-describedby="addon-wrapping" name="city"/>
                          </div>
                      </div>
                      <div className="col-12 col-lg-4">
                          <div className="input-group flex-nowrap boxes_under_options ">
                              <input type="text" className="form-control inputCustom" placeholder="توضیحات محصول" aria-label="detail" aria-describedby="addon-wrapping" name="detail"/>
                          </div>
                      </div>
                      <div className="col-12 col-lg-4">
                          <div className="boxes_under_options bg_yellow">
                              <button >ثبت درخواست</button>
                          </div>
                      </div>
                  </form>
              </div>
              <div className="item_box d-flex align-content-center justify-content-end text-center flex-column col-12 col-lg-4 gap10 mt-sec2-partb-mob">
                  <div className="img_detail_selected">
                      <img src={imgSec1hospital} alt=""/>
                  </div>
                  <span className="font_lg mt-5" >{items_options[number_option].text}</span>
                  <div className="w-100 d-flex justify-content-center font_sm">
                      <span className="mt-3 w-75">{items_options[number_option].text} متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</span>
                  </div>
              </div>
          </div>
      </div>
  </>
}

export default Index