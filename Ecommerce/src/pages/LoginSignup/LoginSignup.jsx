import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import InputCustom from "../../components/InputCustom/InputCustom";
const LoginSignup = () => {
  const [title, setTitle] = useState("Login");
  const login= async (value)=>{
    console.log("login excuted",value);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'Post',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(value)
    }).then((res)=>res.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else alert(responseData.errors);
  }
  const signup=async (value)=>{
    console.log("signup excuted",value);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'Post',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(value)
    }).then((res)=>res.json()).then((data)=>responseData=data);
    if(responseData.success){
      // localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else alert(responseData.errors);
  }
  const formilk = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (value, { resetForm }) => {
      console.log(value);
      if(title=='Login'){
        login(value);
      }else{
        signup(value);
      }
      resetForm();
    },
    validationSchema: Yup.object({
      name: title=='Login'? Yup.string() : Yup.string().required("Please enter you name"),
      email: Yup.string()
        .email("Vui lòng nhập đúng email")
        .required("Vui lòng không bỏ trống"),
      password: Yup.string().required("Vui long nhap dung"),
    }),
  });
  return (
    <div className="pt-[100px] pb-[100px] w-full h-[80%] bg-[#fce3fe]">
      <div className="w-[580px] screen-mobile:w-[350px] h-full bg-white m-auto py-[40px] px-[60px]">
        <h1 className="mx-auto text-3xl font-semibold my-5 text-center">{title}</h1>
        <div>
          <form
            className="flex flex-col gap-[30px] mt-[30px]"
            onSubmit={formilk.handleSubmit}
          >
            {title != "Login" ? (
              <InputCustom
                label={"Your name"}
                name={"name"}
                type={"text"}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={"Nguyễn Văn A"}
                error={formilk.errors.name}
                touched={formilk.touched.name}
                value={formilk.values.name}
              />
            ) : null}
            <InputCustom
              label={"Your Email"}
              name={"email"}
              type={"email"}
              handleChange={formilk.handleChange}
              handleBlur={formilk.handleBlur}
              placeholder={"name@gmail.com"}
              error={formilk.errors.email}
              touched={formilk.touched.email}
              value={formilk.values.email}
            />
            <InputCustom
              label={"Your Password"}
              name={"password"}
              type={"password"}
              handleChange={formilk.handleChange}
              handleBlur={formilk.handleBlur}
              placeholder={"••••••••"}
              error={formilk.errors.password}
              touched={formilk.touched.password}
              value={formilk.values.password}
            />
            <button
              className="border w-full h-[72px] bg-red-500 rounded-lg text-white mt-[30px] font-medium"
              type="submit"
            >
              Continue
            </button>
            {title == "Login" ? (
              <p className="mt-5 text-[#5c5c5c] text-[18px] font-medium">
                Create an account?{" "}
                <span
                  onClick={() => {
                    setTitle("Sign Up");
                  }}
                  className="text-red-500 font-semibold cursor-pointer"
                >
                  Click here
                </span>
              </p>
            ) : (
              <p className="mt-5 text-[#5c5c5c] text-[18px]  font-medium">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setTitle("Login");
                  }}
                  className="text-red-500 font-semibold cursor-pointer"
                >
                  Login here
                </span>
              </p>
            )}
            <div className="flex gap-5 items-center text-[15px] font-medium  text-[#5c5c5c]">
              <input type="checkbox" name="" id="" />
              <p>By continuing, i agree to the term of use & privacy policy.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
