import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
const Banner = () => {
  return (
    <div className='h-full flex lending-tight' style={{background:'linear-gradient(180deg,#fde1ff,#e1ffea22 60%)'}}>
      <div className="pt-[200px] flex flex-1 flex-col justify-center gap-5 pl-[180px] screen-ipad:pl-[100px] screen-mobile:pl-[35px]">
        <h2 className='text-[26px] font-semibold'>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='flex items-center gap-5'>
            <p className='text-[100px] screen-ipad:text-[50px] screen-mobile:text-[30px] font-bold'>new</p>
            <img className='w-[105px] screen-ipad:w-[85px] screen-mobile:w-[50px]' src={hand_icon} alt="" />
          </div>
          <p className='text-[100px] screen-ipad:text-[50px] screen-mobile:text-[30px] font-bold'>Colection</p>
          <p className='text-[100px] screen-ipad:text-[50px] screen-mobile:text-[30px] font-bold'>for everyone</p>
        </div>
        <div className='font-medium text-[22px] screen-mobile:text-[16px] flex justify-center screen-ipad:w-[240px] screen-mobile:w-[180px] items-center gap-4 w-[310px] h-[70px] rounded-lg text-white bg-[#ff4141]'>
          <div>Lates Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="pt-[100px] flex flex-1 justify-center items-center">
        <img className='h-full' src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Banner
