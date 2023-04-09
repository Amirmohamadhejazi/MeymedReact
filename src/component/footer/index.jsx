import "./style.scss"
import {ImgLogo , certificate_icon1 , certificate_icon2} from "src/assets/img/index.js";
import { FaTelegramPlane } from 'react-icons/fa';
import {  SiAparat  } from 'react-icons/si';
import {  AiFillInstagram } from 'react-icons/ai';
import {  IoLogoWhatsapp} from 'react-icons/io';
// import { SiAparat } from 'react-icons/s';

const FooterPage = () => {
  return <div className="footerHome">
    <div className="box_footer">
      <div className="box_top_footer1">
        <div className=" iconLogo" style={{zIndex: "4"}}>
          <img src={ImgLogo} width="100%" height="100%" alt="icon" />
        </div>
        <span className="text_title_top_footer">فروشگاه اینترنتی تجهیزات پزشکی و بیمارستانی می مد</span>
        <span className="text_desc_top_footer">با ایجاد دسترسی عمومی آسان به ابزار و تجهیزات پزشکی با کیفیت که مورد تایید اداره کل تجهیزات پزشکی ایران نیز می باشند، با تعداد زیادی از تولیدکنندگان و واردکنندگان معتبر کالاهای پزشکی همکاری کرده و طیف گسترده ای از محصولات و ابزارآلات پزشکی را به صورت مستقیم و بدون واسطه، با قیمتی مناسب در فروشگاه آنلاین خود عرضه می کند. فروشگاه اینترنتی تجهیزات پزشکی می مد، مجموعه ای از تجهیزات اتاق عمل، تجهیزات آزمایشگاهی، ابزار جراحی، تجهیزات هتلینگ بیمارستانی، تجهیزات پزشکی عمومی و خانگی، دستگاه های استریلیزاسون و لندری بیمارستانی، تجهیزات تخصصی زنان و زایمان، دستگاه ها و تجهیزات تصویربرداری پزشکی، محصولات فیزیوتراپی، توانبخشی و کاردرمانی، لوازم مصرفی پزشکی و بیمارستانی را در یک فروشگاه آنلاین گرد هم آورده تا خریدار با مشاهده ی کالای پزشکی مورد نیاز خود، اطلاعات لازم در رابطه با کالا (شامل قیمت، توضیحات کلی و مشخصات فنی کالا، کشور تولید کننده و رزومه ی برند مورد نظر و همچنین عکس و ویدیوی کالای پزشکی و مراقبتی) را دریافت و با مقایسه ی آن در بازار رقابتی حاضر، راحتی و اطمینان در خرید تجهیزات پزشکی بیمارستانی و آزمایشگاهی را با ما تجربه کند.</span>
      </div>
      <div className="box_top_footer2"/>

      <div
          className="col-12 d-flex flex-column flex-lg-row align-items-start text-center text-lg-end   justify-content-lg-between">

        <div className="col-12 col-lg-6 d-flex flex-column text_details_sm_footer  gap-4">
          <div className="d-flex justify-content-between">
            <span className="text_details_md_footer">راه‌های ارتباطی</span>
            <div className="d-flex gap-2 icon_media">
              <SiAparat/>
              <FaTelegramPlane/>
              <AiFillInstagram/>
              <IoLogoWhatsapp/>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <span>شماره تماس:</span>
            <span>021-91014919</span>
          </div>
          <div className="d-flex justify-content-between">

            <span>فکس:</span>
            <span>021-91014919 داخلی ۲۰۰</span>
          </div>


          <div className="d-flex justify-content-between">
            <span>ایمیل:</span>
            <span>info.meymed@gmail.com</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>
               شعب:
            </span>
            <div className="d-flex w-90 flex-column">
              <span>تهران خیابان ولی عصر نرسیده به سه راه جمهوری کوچه رجب بیگی تلفن دفتر: 021-91014919 </span>
              <span>مازندران ساری خیابان فرهنگ خیابان حافظ فروشگاه اینترنتی تجهیزات ‍‍‍پزشکی می مد کد پستی: 4818819959 تلفن دفتر: 011-33322437</span>
            </div>
          </div>
        </div>

        <div
            className="col-12 col-lg-6 d-flex flex-column flex-lg-row   justify-content-lg-between text_details_sm_footer text-center mt-lg-0 mt-3">
          <div className="col-12 col-lg-4 d-flex flex-column gap-2">
            <span className="text_details_md_footer">دسترسی سریع </span>
            <span className="cursor_pointer">ورود و ثبت نام</span>
            <span className="cursor_pointer">درباره ما</span>
            <span className="cursor_pointer">همکاری با ما</span>
            <span className="cursor_pointer">حریم خصوصی</span>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column  mt-lg-0 mt-2 gap-2">
            <span className="text_details_md_footer">خدمات مشتریان </span>
            <span className="cursor_pointer">ثبت درخواست محصول</span>
            <span className="cursor_pointer">ارتباط با مشاوران</span>
            <span className="cursor_pointer">قوانین و مقررات می‌مد</span>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column  mt-lg-0 mt-2 gap-2">
            <span className="text_details_md_footer">گواهی‌های می‌مد </span>

            <div className="d-flex flex-center  mt-lg-0 mt-2">
              <div className="d-flex flex-row col-6 col-lg-12 justify-content-between">
                <div className="box_Certificate cursor_pointer"><img src={certificate_icon1} alt=""/></div>
                <div className="box_Certificate cursor_pointer"><img src={certificate_icon2} alt=""/></div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="w-100 d-flex flex-column flex-lg-row justify-content-lg-between">
        <div className="col-12 col-lg-6 d-flex align-items-center align-items-lg-end  mt-5  mt-lg-0 ">
          <div className="box_end_footer_blue">
            <span>ساعات کاری می مد از شنبه تا چهارشنبه 8 صبح الی 5 بعد از ظهر و پنج شنبه ها 8 صبح الی 12 ظهر است.لطفا در غیر این ساعات فقط از طریق واتساپ پیام خود را به سایت می مد ارسال فرمایید تا همکاران فروش در اسرع وقت (اولین ساعات کاری) خدمت شما تماس حاصل نمایند.</span>
          </div>
        </div>
        <div className="col-12 col-lg-5 d-flex flex-column align-items-center  mt-3  mt-lg-0 ">
          <div className="text_end_footer_left_blue my-3 my-lg-0 ">با عضویت در خبرنامه فروشگاه می‌مد از محصولات جدید و به‌روزرسانی‌ها
            با خبر شوید
          </div>
          <div className=" col-10 col-lg-10 flex-nowrap position-relative mt-2  mt-lg-5">

            <div className="d-flex flex-row">

              <input type="text" className="form-control form-control-footer inputCustom"
                     placeholder="لطفا ایمیل خود را وارد کنید!" aria-label="numberpeopel"
                     aria-describedby="addon-wrapping" name="numberpeopel"/>
              <div className="bg-white box-input-custom flex-center p-1">
                <div className=" box_on_Input cursor_pointer me-2"  >
                  عضویت
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="w-100 d-flex justify-content-center my-3">
      <span className="text_end_footer">  استفاده از مطالب فروشگاه اینترنتی می مد فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت لوازم پزشکی میثم طبرستان (فروشگاه اینترنتی تجهیزات پزشکی و بیمارستانی می مد) می‌باشد.</span>
    </div>

  </div>
}
export  default FooterPage