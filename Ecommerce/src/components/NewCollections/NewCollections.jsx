import React, { useEffect, useState } from 'react'
// import new_collections from '../../assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  const [new_collections,setNew_collection]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcollections').then((res)=>res.json()).then((data)=>{setNew_collection(data)});
  },[])
  return (
    <div className='flex flex-col items-center gap-[10px] h-full'>
      <h1 className='text-[50px] font-semibold screen-mobile:text-[30px]'>NEW COLLECTIONS</h1>
      <hr className='w-[200px] h-[6px] roundeed-[10px] bg-[#252525]'/>
      <div className='mt-[50px] grid grid-flow-row grid-cols-4 screen-mobile:grid-cols-2  gap-[30px] screen-ipad:gap-[20px]'>
        {new_collections.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      
    </div>
  )
}

export default NewCollections
