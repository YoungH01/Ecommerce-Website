import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'
const RelatedProduct = () => {
  return (
    <div className='flex items-center flex-col gap-[10px] h-[90vh]'>
      <h1 className='text-[50px] font-semibold text-[#171717] screen-mobile:text-[30px]'>Related Product</h1>
      <hr className='w-[200px] h-[6px] rounded-lg bg-[#252525]'/>
      <div className='mt-[50px] flex gap-7 screen-ipad:grid screen-ipad:grid-flow-row screen-ipad:grid-cols-2'>
        {data_product.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
