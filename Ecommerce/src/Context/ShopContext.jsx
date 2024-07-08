import React,{createContext, useEffect, useState}from 'react'
// import all_product from '../assets/all_product'
export const ShopContext=createContext(null);
const getDefaultCart=()=>{
  let cart={}
 for(let i=0;i<=300;i++){
  cart[i]=0
 }
  return cart;
}
const ShopContextProvider = (props) => {
  const [all_product,setAll_product]=useState([]);
  const [cartItem,setCartItem]=useState(getDefaultCart());
  useEffect(()=>{
    fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>setAll_product(data));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/getcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:""
      }).then((res)=>res.json()).then((data)=>{setCartItem(data)});
    }
  },[])
  const addToCart=(itemId)=>{
    setCartItem(prev => ({
      ...prev,
      [itemId]: prev[itemId] + 1
  }));
  if(localStorage.getItem('auth-token')){
    fetch('http://localhost:4000/addtocart',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json',
      },
      body:JSON.stringify({"itemId":itemId})
    }).then((res)=>res.json()).then((data)=>{console.log(data)});
  }
  }
  const removeFromCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId.toString()]:prev[itemId.toString()]-1}));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId})
      }).then((res)=>res.json()).then((data)=>{console.log(data)});
    }
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
