import "./style.scss"
import { HiHeart } from 'react-icons/hi';
import {useState} from "react";

const CardItemsShop = ({dataCard})=>{

    function separateNumber( num ) {
        return num.toLocaleString()
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
                                dataCard.percentage>1 && <>
                                    <span className="badge_percentage">{dataCard.percentage}%</span>
                                    <span className="text_old_price mx-1">{separateNumber(dataCard.price)}</span>
                                     <span>تومان</span>
                                </>
                            }
                           
                        </div>
                        <span className="text_price">{dataCard.percentage ? separateNumber(dataCard.price - dataCard.price / 100 * dataCard.percentage) : separateNumber(dataCard.price)} تومان</span>
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