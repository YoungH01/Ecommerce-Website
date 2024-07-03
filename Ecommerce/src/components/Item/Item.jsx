import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='max-w-[350px] max-xl:max-w-[210px] screen-ipadPro:w-[180px] screen-ipad:max-w-[150px] screen-tele:max-w-[120px] flex flex-col'>
      <Link to={`/product/${props.id}`}><img onClick={()=>{window.scrollTo(0,0)}} src={props.image} alt="" /></Link>
      <p className='my-[6px] mx-[0px] text-[18px] screen-mobile:text-[16px]'>{props.name}</p>
      <div className="flex gap-5">
        <div className='text-[#374151] text-[18px] screen-mobile:text-[16px] font-semibold'>{props.new_price}</div>
        <div className="text-[#8c8c8c] font-medium text-[18px] screen-mobile:text-[16px] line-through">{props.old_price}</div>
      </div>
    </div>
  )
}

export default Item
