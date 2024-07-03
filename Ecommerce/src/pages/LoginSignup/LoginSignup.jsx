import React from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import InputCustom from '../../components/InputCustom/InputCustom';
const LoginSignup = () => {
  const formilk=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
    onSubmit:(value,{resetForm})=>{

      resetForm();
    },
    validationSchema:Yup.object({
      name:Yup.string().required("Please enter you name"),
      email: Yup.string()
        .email('Vui lòng nhập đúng email')
        .required('Vui lòng không bỏ trống'),
      password:Yup.string().required('Vui long nhap dung')
    })
  })
  return (
    <div className='pt-[100px] pb-[100px] w-full h-[80%] bg-[#fce3fe]'>
      <div className='w-[580px] h-full bg-white m-auto py-[40px] px-[60px]'>
        <h1 className='mx-auto my-5 text-center'>Sign Up</h1>
        <div>
          <form className='flex flex-col gap-[30px] mt-[30px]'  onSubmit={formilk.handleSubmit}>
          <InputCustom
                label={'Your name'}
                name={'name'}
                type={'text'}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={"Nguyễn Văn A"}
                error={formilk.errors.name}
                touched={formilk.touched.name}
                value={formilk.values.name}
              />
            <InputCustom
                label={'Your Email'}
                name={'email'}
                type={'email'}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={"name@gmail.com"}
                error={formilk.errors.email}
                touched={formilk.touched.email}
                value={formilk.values.email}
              />
            <InputCustom
                label={'Your Password'}
                name={'password'}
                type={'password'}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={"••••••••"}
                error={formilk.errors.password}
                touched={formilk.touched.password}
                value={formilk.values.password}
              />
            <button className='border w-[460px] h-[72px] bg-red-500 rounded-lg text-white mt-[30px] font-medium' type='submit'>Continue</button>
            <p className='mt-5 text-[#5c5c5c] text-[18px]  font-medium'>Already have an account? <span className='text-red-500 font-semibold'>Login here</span></p>
            <div className='flex gap-5 items-center text-[15px] font-medium  text-[#5c5c5c]'>
              <input type="checkbox" name='' id='' />
              <p>By continuing, i agree to the term of use & privacy policy.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
