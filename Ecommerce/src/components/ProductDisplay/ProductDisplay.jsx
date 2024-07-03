import React, { useContext } from "react";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = ({ product }) => {
  const {addToCart}=useContext(ShopContext);
  return (
    <div className="flex my-0 mx-[170px] screen-ipadPro:mx-[70px]  screen-ipad:mx-[25px] screen-ipadPro:gap-10px screen-mobile:flex-col">
      <div className="flex gap-4 max-xl:flex-col-reverse">
        <div className="flex flex-col gap-4  screen-tele:gap-3  max-xl:flex-row">
          <img className="h-[163px] max-xl:max-h-[100px] screen-mobile:max-h-[105px] screen-mobile:max-w-[90px] max-xl:max-w-[80px]"  src={product.image} alt="" />
          <img className="h-[163px] max-xl:max-h-[100px] screen-mobile:max-h-[105px] screen-mobile:max-w-[90px] max-xl:max-w-[80px]"  src={product.image} alt="" />
          <img className="h-[163px] max-xl:max-h-[100px] screen-mobile:max-h-[105px] screen-mobile:max-w-[90px] max-xl:max-w-[80px]"  src={product.image} alt="" />
          <img className="h-[163px] max-xl:max-h-[100px] screen-mobile:max-h-[105px] screen-mobile:max-w-[90px] max-xl:max-w-[80px]"  src={product.image} alt="" />
    
        </div>
        <div>
          <img className="w-[586px] screen-tele:max-h-[450px] screen-ipad:max-h-[560px] screen-ipadPro:max-h-[500px] h-[700px] max-xl:max-h-[600px] max-xl:w-[400px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="flex my-0 mx-[70px] screen-ipadPro:mx-[30px] flex-col screen-mobile:mx-0 ">
        <h1 className="text-3xl font-bold screen-ipad:text-xl screen-ipadPro:text-2xl text-[#3d3d3d]">{product.name}</h1>
        <div className="flex items-center gap-1 mt-[13px] text-base text-[#1c1c1c]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-10 max-xl:my-6 mx-0 gap-8 text-2xl font-bold">
          <div className="text-[#818181] line-through">${product.old_price}</div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>
        <div className="screen-ipad:text-[14px]">
          A lightweight usually knitted, pullover shirt, close-fitting and with a
          round a neckline and short sleeves, worn as undershirt or outer
          garments.
        </div>
        <div>
          <h1 className="mt-[55px] max-xl:mt-[30px] text-[#656565] text-xl font-semibold">Select size</h1>
          <div className="flex my-8 mx-0 gap-5 screen-ipad:gap-2">
            <div className="cursor-pointer bg-[#fbfbfb] rounded-[3px] border border-[#ebebeb] py-4 px-6 screen-ipad:text-[14px] screen-ipad:px-2 screen-ipad:flex screen-ipad:items-center">S</div>
            <div className="cursor-pointer bg-[#fbfbfb] rounded-[3px] border border-[#ebebeb] py-4 px-6 screen-ipad:text-[14px] screen-ipad:px-2 screen-ipad:flex screen-ipad:items-center">M</div>
            <div className="cursor-pointer bg-[#fbfbfb] rounded-[3px] border border-[#ebebeb] py-4 px-6 screen-ipad:text-[14px] screen-ipad:px-2 screen-ipad:flex screen-ipad:items-center">L</div>
            <div className="cursor-pointer bg-[#fbfbfb] rounded-[3px] border border-[#ebebeb] py-4 px-6 screen-ipad:text-[14px] screen-ipad:px-2 screen-ipad:flex screen-ipad:items-center">XL</div>
            <div className="cursor-pointer bg-[#fbfbfb] rounded-[3px] border border-[#ebebeb] py-4 px-6 screen-ipad:text-[12px] screen-ipad:px-2 screen-ipad:flex screen-ipad:items-center">XXL</div>
          </div>
          <button onClick={()=>{addToCart(product.id)}} className="max-xl:mb-6 py-5 px-10 screen-ipad:max-w-[180px] w-[200px] text-base font-semibold text-white bg-red-500 mb-10  border-none outline-none">Add to cart</button>
          <p className="mt-2">
            <span className="font-semibold">Category: </span>Women, T-shirt, Crop top
          </p>
          <p>
            <span className="font-semibold">Tags: </span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
