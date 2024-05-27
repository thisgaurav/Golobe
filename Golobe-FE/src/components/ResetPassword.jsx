import React from 'react'
import { Input } from "@material-tailwind/react";
import SliderLogin from "./SliderLogin";
function ResetPassword() {
  return (
    <div>
      <div className="w-full p-32 flex gap-28 ml-72">
        <div className="w-[30%] flex flex-col typo">
            
          <div className='mb-16'>
            <img src="./images/logo-black.png" alt="" />
          </div>

          <div className="typo">
            <form action="">
              <div className="flex flex-col gap-4">
                <h1 className="text-[40px] font-['Trade_Gothic_LT_Std']">
                Set a password
                </h1>
                <p className="text-md font-normal">
                Your previous password has been reseted. Please set a new password for your account.
                </p>
              </div>
              <div className="mt-12 flex flex-col gap-6 ">
              <div className="">
                  <Input name="newPassword" className="h-[50px]" variant="outlined" label="Create Password"/>
                </div>
                <div className="">
                  <Input name="confirmNewPassword" className="h-[50px]" variant="outlined" label="Confirm Password"/>
                </div>
                <div className="w-full text-center ">
                  <button className="bg-[#8DD3BB] w-full py-5 rounded-md">Set password</button>
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

export default ResetPassword
