import React from 'react'
import { Input, Select, Option } from "@material-tailwind/react";
import SliderLogin from "./SliderLogin";
function PaymentMethod() {
  return (
    <div>
      <div className="w-full p-28 flex gap-28 ml-72">
        <div className="w-[30%]">
            <SliderLogin/>
        </div>
        <div className="w-[30%]">
        <div className='mb-10'>
            <a href="/"><img src="./images/logo-black.png" alt="" /></a>
          </div>
          <div className='flex items-center mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.75 18.75L9 12L15.75 5.25" stroke="#112211" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  
                <a className='text-md' href="/sign-up">Back</a>
            </div>
          <div className='typo'>
            <form action="">
              <div className="flex flex-col gap-4">
                <h1 className="text-[40px] font-['Trade_Gothic_LT_Std'] font-semibold">Add a payment method</h1>
                <p className="font-normal">
                Let’s get you all set up so you can access your personal account.
                </p>
              </div>
              <div className="mt-12 flex flex-col gap-6 ">
                <div className="w-full flex gap-6">
                    
                    <Input className="h-[50px]" variant="outlined" label="Card Number" type="text" />
                   
                </div>
                <div className="w-full flex gap-6">
                    <div className='w-1/2'>
                    <Input className="h-[50px]" variant="outlined" label="Exp. Date" type="date"  />
                    </div>
                  <div className='w-1/2'>
                  <Input className="h-[50px]" type="text" label='CVC' maxLength={3} minLength={3}/>
                  </div>
                  </div>
                  <div className="w-full">
                  <Input className="h-[50px]" variant="outlined" label="Name on card" type="text" minLength={3}/>   
                    </div>
                    <div className="w-full flex gap-6 flex-col"> 
                  <Select variant='outlined' label='Country or Region'>
                    <Option>India</Option>
                    <Option>United States of America</Option>
                  </Select>
                    </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" required/>
                    <label className="font-normal" htmlFor="">
                    Securely save my information for 1-click checkout
                    </label>
                  </div>
                </div>
                <div className="w-full text-center">
                  <button type="submit" className="bg-[#8DD3BB] w-full py-5 rounded-md">Add payment method</button>
                </div>
                <div>
                    <p className='font-normal text-center mx-10'>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
