import React,{createContext, useState}from 'react'
import all_product from '../assets/all_product'
export const ShopContext=createContext(null);
const getDefaultCart=()=>{
  let cart={}
 for(let i=0;i<=all_product.length;i++){
  cart[i]=0
 }
  return cart;
}
const ShopContextProvider = (props) => {
  const [cartItem,setCartItem]=useState(getDefaultCart());
  const addToCart=(itemId)=>{
    setCartItem(prev => ({
      ...prev,
      [itemId]: prev[itemId] + 1
  }));
  }
  const removeFromCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId.toString()]:prev[itemId.toString()]-1}))
  }
  const getTotalCartAmount=()=>{
    let total=0;
    // cartItem.forEarch((item,index)=>{
    //   if(item>0) total+=(item *all_product[index].new_price);
    // })
    for(const item in cartItem){
      if(cartItem[item]>0){
        let product=all_product.find((e)=> e.id=== Number(item));
        total+=(product.new_price*cartItem[item])
      }
    }
    return total;
  }
  const getTotalItems=()=>{
    let total=0;
    for(const index in cartItem){
      if(cartItem[index]>0) total+=cartItem[index]
    }
    return total;
  }
  const contextValue={all_product,cartItem,addToCart,removeFromCart,getTotalCartAmount,getTotalItems};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
