import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/Admin_Assets/cross_icon.png';
const ListProduct = () => {
  const [allproducts,setAllproducts]=useState([]);
  const fetchInfor=async ()=>{
    await fetch('http://localhost:4000/allproducts',{

    }).then((res)=>res.json()).then((data)=>{setAllproducts(data)});
  }
  const removeProduct= async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfor();
  }
  useEffect(()=>{
    fetchInfor();
  },[])
  return (
    <div className='list-product'>
      <h1>all Product List</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproducts'>
        <hr />
        {allproducts.map((item,index)=>{
          return <>
          <div key={index} className='listproduct-format-main listproduct-format'>
            <img src={item.image} alt=""  className='listproduct-product-icon'/>
            <p>{item.name}</p>
            <p>${item.old_price}</p>
            <p>${item.new_price}</p>
            <p>{item.category}</p>
            <img onClick={()=>{removeProduct(item.id)}} src={cross_icon} className="listproduct-remove-icon" alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
