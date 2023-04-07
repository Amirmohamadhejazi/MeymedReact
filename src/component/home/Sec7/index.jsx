import "./style.scss"
import {sec7icon1 , sec7icon2 , sec7icon3 , sec7icon4 , sec7_icon_top} from "src/assets/img/index.js";
const Section7 = () => {

  let items_sec7 = [
    {
      text:"پشتیبانی 24 ساعته",
      img:`${sec7icon1}`,
      id:0
    },
    {
      text:"قیمت‌های به‌روز و رقابتی",
      img:`${sec7icon2}`,
      id:1
    },
    {
      text:"ضمانت اصالت محصولات",
      img:`${sec7icon3}`,
      id:2
    },
    {
      text:"ارسال با پست پیشتاز",
      img:`${sec7icon4}`,
      id:3
    },
  ]
  return <div className="sec7">
    <div className="w-100 mt-5 ">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <img src={sec7_icon_top} alt=""/>
          <span className="text_top_sec7 mt-3 mt-lg-0">فروشگاه اینترنتی تجهیزات پزشکی، بیمارستانی و آزمایشگاهی می مد</span>
        </div>
        <div className="box_content_sec7 d-flex flex-column flex-lg-row align-items-center text-center justify-content-lg-between ">
          {
            items_sec7.map((items) => <div className={`col-12 col-lg-3 ${items.id !== 3 && 'border_left_box_content_items'}`} key={items.id}>
              <div className="d-flex  justify-content-between justify-content-lg-center align-items-center mt-3 mt-lg-0">
                <span className="ms-lg-2">{items.text}</span>
                <img src={items.img} alt=""/>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  </div>
}

export default Section7