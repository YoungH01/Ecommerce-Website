import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../../assets/dropdown_icon.png';
import Item from '../../components/Item/Item';
const ShopCategory = ({category,banner}) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className=''>
      <img className='block w-[82%] my-[75px] mx-auto' src={banner} alt="" />
      <div className='flex my-auto mx-[170px] screen-tele:mx-[40px] screen-mobile:mx-[60px] screen-ipad:mx-[100px] justify-between items-center'>
        <p><span className='font-semibold'>Showing 1-12 </span>out of 36 products</p>
        <div className='px-5 py-[10px] rounded-[40px] border border-[#8888]'>
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className=' my-5 mx-[170px] max-xl:mx-[130px] screen-ipadPro:mx-[100px] screen-mobile:mx-[50px] screen-ipad:mx-[90px] screen-ipad:grid-cols-3 screen-mobile:grid-cols-2 grid grid-flow-row grid-cols-4 gap-[30px]'>
        {all_product.map((item,index)=>{
          if(category==item.category){
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else return null;
        })}
      </div>
      <div className='flex justify-center items-center w-[233px] h-[69px] rounded-[75px] my-[150px] mx-auto text-[#787878] text-[18px] font-medium bg-[#ededed]'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
