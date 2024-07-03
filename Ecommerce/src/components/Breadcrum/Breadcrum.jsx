import React from 'react'
import arrow_icon from '../../assets/breadcrum_arrow.png'
const BreadCrum = (props) => {
    const {product}=props;
    console.log(product);
  return (
    <div className='capitalize flex items-center gap-2 text-[#5e5e5e] text-base font-semibold mt-[80px] mb-[60px] mx-[170px] screen-ipadPro:mx-[70px] screen-ipad:mx-[25px] screen-ipad:text-[14px]'>
      HOME<img src={arrow_icon} alt="" />SHOP<img src={arrow_icon} alt="" />{product.category}<img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default BreadCrum
