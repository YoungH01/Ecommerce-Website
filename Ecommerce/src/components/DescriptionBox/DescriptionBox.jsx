import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-[120px] mx-[170px] screen-ipad:mx-[100px]'>
      <div className='flex'>
        <div className='flex items-center justify-center text-base font-semibold screen-ipad:w-[241px] w-[171px] h-[70px] border border-[#d0d0d0] cursor-pointer screen-mobile:text-[14px]'>Descriptions</div>
        <div className='cursor-pointer flex items-center justify-center text-base font-semibold screen-ipad:w-[241px] w-[171px] h-[70px] border border-[#d0d0d0] screen-mobile:text-[14px]'>Review (122)</div>
      </div>
      <div className='flex gap-6 flex-col border border-[#D0D0D0] p-[48px] screen-mobile:p-[10px] pb-[70x]'>
        <p className='screen-ipad:text-[12px]'>
        An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
        </p>
        <p className='screen-ipad:text-[12px]'>
        E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
