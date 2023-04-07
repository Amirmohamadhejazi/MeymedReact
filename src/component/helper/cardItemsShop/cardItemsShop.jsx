import "./style.scss"
import {heartImg} from "src/assets/img/index.js";
import { HiHeart } from 'react-icons/hi';
import {useState} from "react";

const CardItemsShop = ({dataCard})=>{

    function separateNumber( num ) {
        let str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }


    return <div className="cardShop">
        <div className="box_items">
            <div className="d-flex flex-center">
                <img src={dataCard.img} className="img-cover" alt=""/>
            </div>
            <span className="title">{dataCard.title}</span>
            <span className="description">{dataCard.description}</span>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <HiHeart className={`heart`}/>
                {
                    dataCard.price && <div className="d-flex flex-column align-items-end">
                        <div className="d-flex flex-row">
                            {
                                dataCard.percentage && <>
                                    <span className="badge_percentage">{dataCard.percentage}%</span>
                                    <span className="text_old_price mx-1">{separateNumber(dataCard.price)}</span>
                                </>
                            }

                            <span>تومان</span>
                        </div>
                        <span className="text_price">{dataCard.percentage ? separateNumber(Math.round(dataCard.price - dataCard.price / 100 * dataCard.percentage)) : separateNumber(dataCard.price)}</span>
                    </div>
                }
                {
                    !dataCard.price && <span className="call_price">استعلام قیمت با ثبت درخواست</span>
                }

            </div>
        </div>
    </div>
}

export default CardItemsShop