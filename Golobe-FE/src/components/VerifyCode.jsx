import React from 'react'
import { Input } from "@material-tailwind/react";
import SliderLogin from "./SliderLogin";
import { useNavigate } from 'react-router-dom';
function VerifyCode() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/set-password')
    }
  return (
    <div>
      <div className="w-full p-32 flex gap-28 ml-72">
        <div className="w-[30%] flex flex-col typo">
            
          <div className='mb-16'>
            <img src="./images/logo-black.png" alt="" />
          </div>

          <div className="typo">
          <div className='flex items-center mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.75 18.75L9 12L15.75 5.25" stroke="#112211" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  
                <a className='text-md' href="/login">Back to login</a>
            </div>
            <form action="">
              <div className="flex flex-col gap-4">
                <h1 className="text-[40px] font-['Trade_Gothic_LT_Std']">
                Verify code
                </h1>
                <p className="text-md font-normal">
                An authentication code has been sent to your email.
                </p>
              </div>
              <div className="mt-12 flex flex-col gap-6 ">
                <div className="">
                  <Input name="code" className="h-[50px]" variant="outlined" label="Enter Code"/>
                </div>
                <div className='mb-2'>
                    <p>Didn't get a code <a href="" className='text-[#FF8682]'>Resend</a></p>
                </div>
                <div className="w-full text-center ">
                  <button onClick={handleClick} className="bg-[#8DD3BB] w-full py-5 rounded-md">Verify Code</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="w-[30%]">
        <SliderLogin/>
        </div>
      </div>
    </div>
  )
}

export default VerifyCode
