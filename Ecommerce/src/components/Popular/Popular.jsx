import React, { useEffect, useState } from 'react'
// import data_product from '../../assets/data';
import Item from '../Item/Item';
const Popular = () => {
  const [data_product,setdata_product]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen').then((res)=>res.json()).then((data)=>{setdata_product(data)})
  },[])
  return (
    <div className=' max-xl:mt-[100px] flex flex-col items-center gap-[10px] h-[90vh] screen-ipadPro:h-[50vh]'>
        <h1 className='text-[50px]  screen-mobile:text-[30px] font-semibold'>POPULAR IN WOMAN</h1>
        <hr className='w-[200px] h-[6px] roundeed-[10px] bg-[#252525]'/>
        <div className='mt-[50px] flex gap-8 screen-mobile:grid screen-mobile:grid-flow-row screen-mobile:grid-cols-2'>
            {data_product.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
            })}
        </div>
    </div>
  )
}

export default Popular
