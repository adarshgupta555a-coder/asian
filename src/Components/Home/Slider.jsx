import React, { useState } from "react";
import style from "../../Css/Slider.module.css";

const Slider = () =>{
   const [img,setimage] = useState(0);
   const arrimg = ["https://cdn.pixabay.com/photo/2025/10/07/15/39/cherries-9879407_1280.jpg","https://cdn.pixabay.com/photo/2016/08/12/10/00/raindrop-1587994_1280.jpg","https://cdn.pixabay.com/photo/2022/05/13/09/12/raindrop-7193181_1280.jpg","https://cdn.pixabay.com/photo/2020/04/22/08/06/dolomites-5076487_960_720.jpg"]

   const onHandleSlider = (opr)=>{
    if (opr) {
        if (img >= (arrimg.length-1)) {
            setimage(0)
        } else {
            setimage((prev)=> ++prev )
        }
    } else {
            if (img < 0) {
            setimage((arrimg.length-1))
        } else {
            setimage((prev)=> --prev )
        }
    }
   }
   return(<>
   <div className={style.slider}>
    <img src={arrimg[img]} alt="image-1" style={{width:"100%",height:"300px"}} width={1000} height={1000}/>
    <div className={style.btn}>
        
    <i  onClick={()=>onHandleSlider("-")} className={"fa fa-arrow-left"}></i>
    <i  onClick={()=>onHandleSlider("+")} className={"fa fa-arrow-right"}></i>
    </div>
</div>
    </>)
}

export default Slider;