import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";
const CartItems = () => {
  const { all_product, cartItem, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  const styleIndex="grid screen-mobile:hidden gap-[75px] screen-ipad:gap-[30px] grid-flow-col grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] text-[#454545] items-center font-semibold py-5 px-0 text-lg screen-ipad:text-base"
  const styleItem="grid gap-[75px] screen-ipad:gap-[30px] screen-mobile:grid-cols-[0.5fr,3fr,0.5fr] screen-mobile:gap-[10px] grid-flow-col grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] text-[#454545] items-center font-medium py-5 px-0 text-[17px] screen-ipad:text-[12px]"
  const styleHr="h-[3px] bg-[#e2e2e2] border-0"
  return (
    <div className="my-[100px] mx-[70px]">
      <div className={styleIndex}>
        <p>Product</p> 
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className={styleHr} />
      {all_product.map((item, index) => {
        if (cartItem[item.id] > 0) {
          return (
            <div key={index}>
              <div className={styleItem}>
                <img className="h-[62px]" src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="w-16 h-12 border-[2px] border-[#ebebeb] bg-[#fff]">{cartItem[item.id]}</button>
                <p>${item.new_price * cartItem[item.id]}</p>
                <img
                  className="w-4 my-0 mx-10 cursor-pointer"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  alt=""
                />
              </div>
              <hr className={styleHr} />
            </div>
          );
        }else return null;
      })}
      <div className="flex my-24 mx-0 screen-mobile:flex-col screen-mobile:gap-[30px]">
        <div className="flex flex-1 flex-col mr-[200px] screen-ipad:mr-[20px] gap-10">
          <h1 className="font-bold text-2xl">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-4 px-0">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className={styleHr}/>
            <div className="flex justify-between py-4 px-0">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr className={styleHr}/>
            <div className="flex justify-between py-4 px-0 text-lg font-medium">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-64 h-14 border-none text-white bg-red-500 font-semibold outline-none text-[16px]">PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1 text-base font-medium">
          <p className="text-[#555]">If you have promo code, Enter it here</p>
          <div className="w-[504px] max-xl:w-[420px] screen-ipadPro:max-w-[300px] screen-ipad:max-w-[270px] mt-[15px] pl-5 h-[58px] bg-[#eaeaea]">
            <input className=" border-none max-xl:w-[290px] screen-ipad:max-w-[160px] screen-ipadPro:max-w-[190px] focus:ring-transparent outline-none bg-transparent text-base w-[330px] h-[58px]" type="text" placeholder="promo code" />
            <button className="w-[154px] max-xl:w-[110px] screen-ipadPro:max-w-[90px] h-[58px] text-base bg-black text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
