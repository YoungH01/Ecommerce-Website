import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'
const Offers = () => {
  return (
    // <div className='h-[60vh] w-[65%] flex m-auto px-[140px] py-0 mb-[150px]' style={{background:'linear-gradient(180deg,#fed1ff 0%,#e1ffea22 60%)'}}>
    //     <div className='flex flex-col justify-center flex-1'>
    //         <h1 className='font-semibold text-[80px] screen-ipad:text-[50px]'>Exclusive</h1>
    //         <h1 className='font-semibold text-[80px] screen-ipad:text-[50px]'>Offers for you</h1>
    //         <p className='font-semibold text-[22px]'>ONLY ON BEST SELLER PRODUCTS</p>
    //         <button className='rounded-[35px] bg-[#ff4141] font-medium text-[22px] text-white mt-[30px] w-[282px] h-[70px]'>Check Now</button>
    //     </div>
    //     <div className='flex flex-1 items-center justify-items-end'>
    //         <img src={exclusive_image} alt="" />
    //     </div>
    // </div>
    <div className='flex flex-col justify-center items-center my-[100px] screen-mobile:mt-[420px]'>
      <div className='flex p-[100px] screen-ipad:p-[60px]' style={{background:'linear-gradient(180deg,#fed1ff 0%,#e1ffea22 60%)'}}>
        <div>
        <h1 className='font-semibold text-[80px] screen-ipad:text-[40px]'>Exclusive</h1>
        <h1 className='font-semibold text-[80px] screen-ipad:text-[40px]'>Offers for you</h1>
        <p className='font-semibold text-[22px] screen-ipad:text-[14px]'>ONLY ON BEST SELLER PRODUCTS</p>
        <button className='screen-ipad:w-[225px]  screen-ipad:text-[14px] rounded-[35px] bg-[#ff4141] font-medium text-[22px] text-white mt-[30px] w-[282px] h-[70px]'>Check Now</button>
        </div>
        <div>
        <img className='screen-ipad:h-[250px] ' src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Offers
