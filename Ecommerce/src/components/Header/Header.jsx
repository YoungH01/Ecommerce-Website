import React, { useContext, useState } from "react";
// import "flowbite";
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Header = () => {
    const [menu,setMenu]=useState("shop");
    const {getTotalItems}=useContext(ShopContext);
  return (
    <div>
      <nav className="bg-white fixed  w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="Ecommerce Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Shopper
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {localStorage.getItem('auth-token')?<button onClick={()=>{
              localStorage.removeItem('auth-token');
              window.location.replace('/');
            }}>Logout</button>:
            <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           <Link to='/login'> Login</Link>
          </button>}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <Link to='/cart'><img style={{marginLeft:'1rem'}} src={cart_icon} alt="cart_icon" /></Link>
            <div className="text-[14px] flex justify-center items-center rounded-[11px] w-[22px] h-[22px] bg-red-500 text-white">{getTotalItems()}</div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li className="cursor-pointer" onClick={()=>{setMenu('shop')}} >
                <a
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                //   aria-current="page"
                >
                  <Link to='/'>Shop</Link>
                </a>
              </li>
              <li className="cursor-pointer" onClick={()=>{setMenu('Men')}}>
                <a
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  <Link to='/men'>men</Link>
                </a>
              </li>
              <li className="cursor-pointer" onClick={()=>{setMenu('Woman')}}>
                <a 
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  <Link to='/woman'>Woman</Link>
                </a>
              </li>
              <li className="cursor-pointer" onClick={()=>{setMenu('Kids')}}>
                <a
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                 <Link to='/kids'>kids</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
