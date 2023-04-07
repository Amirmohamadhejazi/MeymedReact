import "./style.scss"
import {useEffect, useRef, useState} from "react";


const Collapse = ({items_collapse}) => {
    console.log(items_collapse)
    const [show , SetShow] = useState(false)

    function toggleCollapse(index) {
        console.log(index)
        SetShow(index)
        if (index === show){
            SetShow(false)
        }else {SetShow(index)}
    }

    useEffect(()=>{
        console.log(show)

    },[show])


  return <div className="collapseHelper">

      <div className="w-100 h-100 d-flex flex-column ">


          {
              items_collapse.map((items, index) => <div className={`${index !== 0 ? '  clp_cmp mt-4' : ' clp_cmp'}`} key={items.id}>
                      <div className="w-90 d-flex flex-column justify-content-center">
                          <div className="w-100 d-flex justify-content-between align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                  <span className="text_index">{index + 1}</span>
                                  <span className="mx-1 text-title">{items.title}</span>
                              </div>
                              <div className=" icon_clp_box" onClick={() => toggleCollapse(items.id)}>
                              <span
                                  className={show === index ? 'rotate icon_clp' :' icon_clp'}>+</span>
                              </div>
                          </div>
                          {
                              show === items.id && <div>
                                  <div className="box_clp">
                                      {items.desc}
                                  </div>
                              </div>
                          }
                      </div>
                  </div>
              )
          }


          
          
           
    
    </div>
  </div>
}

export default Collapse