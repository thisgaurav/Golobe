import React from 'react'
import Profile from './Profile'

function Account() {
  return (
    <div className='bg-[#FAFBFC]'>
      <div className="flex justify-center sticky top-0 bg-white z-[9999]">
        <nav className=" w-full flex px-20 py-6 justify-between items-center">
          <div className="flex gap-9">
            <div>
              <a className="flex gap-2 typo items-center text-center" href="/flight-search">
                <img src="./images/airplane.png" />
                <p>Find Flight</p>
              </a>
            </div>
            <div>
              <a href="/hotel-search" className="flex gap-2 items-center text-center typo">
                <img src="./images/ion_bed.png" />
                <p>Find Stays</p>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3">
            <a href="/"><img src="./images/logo-black.png" alt="logo" /></a>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-5 items-center">
              <a href="/favorites" className="border-r-[3px] border-[#000] pr-4">
                <img src="./images/Favorite.png" alt="" />
              </a>
              <div>
                <a href="" className="flex gap-2 items-center">
                  <img src="./images/Profile.png" alt="" />
                  <p className="typo">John D.</p>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <section className='font-["Montserrat"] mx-32 mt-12'>
        <Profile/>
        <h1 className='font-bold text-[32px] font-["Trade_Gothic_LT_Std"] mb-4'>Account</h1>
        <div className="flex flex-col gap-8 w-full py-8 px-6 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] font-['Montserrat'] rounded-2xl">
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Name</p>
              <h1 className='text-[20px] font-semibold'>John Doe</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full '>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Email</p>
              <h1 className='text-[20px] font-semibold'>john.doe@gmail.com</h1>
            </div>
            <div className='flex gap-2'>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Add_circle_small.png" alt="" />
                <p>Add another email</p>
              </button>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Password</p>
              <h1 className='text-[20px] font-semibold'>************</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Phone number</p>
              <h1 className='text-[20px] font-semibold'>+1 000-000-0000</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Address</p>
              <h1 className='text-[20px] font-semibold'>St 32 main downtown, Los Angeles, California, USA</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Date of birth</p>
              <h1 className='text-[20px] font-semibold'>01-01-1992</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Account
