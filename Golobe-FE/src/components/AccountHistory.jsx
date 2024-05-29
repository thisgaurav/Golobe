import React from "react";
import Profile from "./Profile";

function AccountHistory() {
  return (
    <div className="bg-[#FAFBFC]">
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
                <a href="/account" className="flex gap-2 items-center">
                  <img src="./images/Profile.png" alt="" />
                  <p className="typo">John D.</p>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <section className='font-["Montserrat"] mx-32 mt-12'>
        <Profile />
        <div className="flex justify-between">
          <div>
            <h1 className='font-bold text-[32px] font-["Trade_Gothic_LT_Std"] mb-4'>
              Tickets/Bookings
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-[14px] font-semibold">Upcoming</h1>
            <img src="./images/arrow_down.png" alt="" />
          </div>
        </div>
        <div className="flex gap-10 w-full p-3 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] rounded-2xl">
          <div className="w-[50%] border-r-[2px] p-2 flex gap-2 items-center">
            <img src="./images/airplane.png" alt="" />
            <h1 className="font-semibold">Flights</h1>
          </div>
          <div className="w-[50%] p-2 flex gap-2 items-center">
            <img src="./images/ion_bed.png" alt="" />
            <h1 className="font-semibold">Stays</h1>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-10 w-full p-3 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] rounded-2xl">
            <div className="px-6 py-8 flex w-full">
              <div className="flex gap-8 w-[25%]">
                <div className="">
                  <img
                    src="./images/Emirates-logo.png"
                    className="h-[80px] w-[80px]"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-4 border-r-[1px] pr-6">
                  <div>
                    <p>Newark(EWR)</p>
                    <p className="font-semibold">12:00pm</p>
                  </div>
                  <div>
                    <p className="font-semibold">—</p>
                  </div>
                  <div>
                    <p>Newark(EWR)</p>
                    <p className="font-semibold">12:00pm</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[30%] pl-6 justify-start">
                <div className="flex">
                  <div className="flex items-center gap-2 pr-24">
                  <div className="py-[5.5px] px-[5px] rounded-md bg-[#EBF6F2]">
                    <img src="./images/calendar.png" alt="" />
                  </div>
                  <div className="leading-4">
                    <p className="text-[#707a70]">Date</p>
                    <p className="font-semibold">12-11-22</p>
                  </div>
                  </div>
                  <div>
                  <div className="flex gap-2">
                    <div className="py-[5.5px] px-[5px] rounded-md bg-[#EBF6F2]">
                      <img src="./images/bi_door-closed-fill.png" alt="" />
                    </div>
                    <div className="leading-4">
                      <p className="text-[#707a70]">Gate</p>
                      <p className="font-semibold">A12</p>
                    </div>
                  </div>
                  </div>
                </div>

                <div className="flex gap-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="py-[5.5px] px-[5px] rounded-md bg-[#EBF6F2]">
                      <img src="./images/timmer.png" alt="" />
                    </div>
                    <div className="leading-4">
                      <p className="text-[#707a70]">Flight Time</p>
                      <p className="font-semibold">Newark(EWR)</p>
                    </div>
                    </div>
        
                    <div className="flex gap-2 pl-10">
                    <div className="py-[5.5px] px-[5px] rounded-md bg-[#EBF6F2]">
                      <img src="./images/Green-seat.png" alt="" />
                    </div>
                    <div className="leading-4">
                      <p className="text-[#707a70]">Seat No.</p>
                      <p className="font-semibold">128</p>
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-end items-center w-[45%]">
                  <button className="bg-[#8DD3BB] rounded py-2 px-4 h-[48px]">Download Ticket</button>
                  <button className="border-[1px] border-[#8DD3BB] rounded py-2 px-4 h-[48px]">
                    <img src="./images/arrow_forward.png" alt="" />
                  </button>
                </div>
              </div>
            </div>   
          <div className="flex flex-col gap-10 w-full p-3 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] rounded-2xl">
            <div className="px-6 py-8 flex w-full">
              <div className="flex gap-8 w-[25%]">
                <div className="">
                  <img
                    src="./images/Emirates-logo.png"
                    className="h-[80px] w-[80px]"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-4 border-r-[1px] pr-6">
                  <div>
                    <p>Newark(EWR)</p>
                    <p className="font-semibold">12:00pm</p>
                  </div>
                  <div>
                    <p className="font-semibold">—</p>
                  </div>
                  <div>
                    <p>Newark(EWR)</p>
                    <p className="font-semibold">12:00pm</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[30%] pl-6 justify-start">
                <div className="flex">
                  <div className="flex items-center gap-2 pr-24">
                  <div className="py-[5.5px] px-[5px] rounded-md bg-[#EBF6F2]">
                    <img src="./images/calendar.png" alt="" />
                  </div>
                  <div className="leading-4">
                    <p className="text-[#707a70]">Date</p>
                    <p className="font-semibold">12-11-22</p>
                  </div>
                  </div>
                  <div>
                  <div className="flex gap-2">
                    <div className="py-[5.5px] px-[5px] rounded-md bg-[#EBF6F2]">
                      <img src="./images/bi_door-closed-fill.png" alt="" />
                    </div>
                    <div className="leading-4">
                      <p className="text-[#707a70]">Gate</p>
                      <p className="font-semibold">A12</p>
                    </div>
                  </div>
                  </div>
                </div>

                <div className="flex gap-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="py-[5.5px] px-[5px] rounded-md bg-[#EBF6F2]">
                      <img src="./images/timmer.png" alt="" />
                    </div>
                    <div className="leading-4">
                      <p className="text-[#707a70]">Flight Time</p>
                      <p className="font-semibold">Newark(EWR)</p>
                    </div>
                    </div>
        
                    <div className="flex gap-2 pl-10">
                    <div className="py-[5.5px] px-[5px] rounded-md bg-[#EBF6F2]">
                      <img src="./images/Green-seat.png" alt="" />
                    </div>
                    <div className="leading-4">
                      <p className="text-[#707a70]">Seat No.</p>
                      <p className="font-semibold">128</p>
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-end items-center w-[45%]">
                  <button className="bg-[#8DD3BB] rounded py-2 px-4 h-[48px]">Download Ticket</button>
                  <button className="border-[1px] border-[#8DD3BB] rounded py-2 px-4 h-[48px]">
                    <img src="./images/arrow_forward.png" alt="" />
                  </button>
                </div>
              </div>
            </div>   
            </div>
      </section>
    </div>
  );
}

export default AccountHistory;
