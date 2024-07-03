import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' mt-[100px] flex gap-8 w-[65%] flex-col justify-center items-center m-auto py-[100px] px-[140px] screen-mobile:py-[50px] screen-mobile:px-[30px]  mb-[150px]' style={{background:'linear-gradient(180deg,#fed1ff 0%,#e1ffea22 60%)'}}>
      <h1 className='text-[#454545] font-semibold text-[55px] screen-mobile:text-[30px]'>Get Exclusive Offers On Your EMail</h1>
      <p className='text-[#454545] text-[20px] screen-mobile:text-[16px]'>Subssribe to our newsletter and stay updated </p>
      <div className='flex justify-between items-center rounded-[80px] w-[730px] screen-mobile:w-[370px] h-[70] border mt-50px'>
        <input className=' focus:ring-transparent outline-none w-[500px] screen-mobile:w-[250px] ml-[30px] text-[#616161] text-[16px] border-none' type="email" placeholder='abc@gmail.com' />
        <button className='w-[210px] screen-mobile:w-[150px] h-[70px] rounded-[80px] bg-black text-white text-[16px]'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
