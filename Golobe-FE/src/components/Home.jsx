import React from "react";
import "../component-styles/styles.css";
import { LuPlus } from "react-icons/lu";
import { IoSend } from "react-icons/io5";

function Home() {
  return (
    <>
      <section className="w-full p-6 h-screen">
        <div className="bg-[url('/images/BannerBG.jpeg')] bg-no-repeat relative rounded-3xl shrink-0 h-[600px] bg-center">
          <div className="flex justify-center mt-4">
            <nav className=" w-full flex px-20 py-6 justify-between items-center">
              <div className="flex gap-9 text-white">
                <div>
                  <a
                    className="flex gap-2 typo items-center text-center"
                    href=""
                  >
                    <img src="./images/airplaneWhite.png" />
                    <p>Find Flight</p>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="flex gap-2 items-center text-center typo"
                  >
                    <img src="./images/ion_bedWhite.png" />
                    <p>Find Stays</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <img src="./images/WhiteLogo.png" alt="logo" />
              </div>
              <div className="flex gap-10 text-white">
                <button className="typo">Login</button>
                <button className="typo bg-white text-black rounded-xl p-4">
                  Sign-Up
                </button>
              </div>
            </nav>
          </div>
          <div className="flex flex-col text-white items-center p-20 font-['Trade_Gothic_LT_Std'] font-normal">
            <div className="text-[45px] font-semibold">
              <h2>Helping Others</h2>
            </div>
            <div className="text-[80px] uppercase font-semibold">
              <h1>Live & Travel</h1>
            </div>
            <div className="text-[20px] typo">
              <p>Special offers to suit your plan</p>
            </div>
          </div>
        </div>
        <div className="flex absolute left-[185px] top-[55vh] z-[999] flex-col gap-3 bg-[#fff] w-[80%] rounded-xl shadow p-6">
          <div className="flex gap-2 py-4 px-9">
            <div className="border-r-[2px] pr-4 border-[#D7E2EE]">
              <a className="flex gap-2 typo items-center text-center" href="">
                <img src="./images/airplane.png" />
                <p>Find Flight</p>
              </a>
            </div>
            <div>
              <a href="" className="flex gap-2 items-center pl-2 text-center typo">
                <img src="./images/ion_bed.png" />
                <p>Find Stays</p>
              </a>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center pt-6">
          <div class="relative h-10 w-[20vw]">
          <input
            placeholder="From-To"
            className="peer h-14 w-full rounded-lg border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-14 w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            From-To
          </label>
        </div>
          <div className="relative h-10 w-[10vw]">
          <input
            placeholder="Trip"
            class="peer h-14 w-full rounded-lg border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-14 w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Trip
          </label>
        </div>
          <div className="relative h-10 w-[20vw]">
          <input
            placeholder="Depart - Return"
            class="peer h-14 w-full rounded-lg border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-14 w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Depart - Return
          </label>
        </div>
          <div className="relative h-10 w-[20vw]">
          <input
            placeholder="Passenger - Class"
            class="peer h-14 w-full rounded-lg border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-14 w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Passenger - Class
          </label>
        </div>
        </div>
        <div className="flex gap-5 typo items-center justify-end pr-9 pt-10 pb-2">
          <div className="flex items-center justify-center gap-1 p-4 rounded-md bg-white">
          <LuPlus />
          <button>Add Promo Code</button>
          </div>
          <div className="flex items-center justify-center gap-1 p-4 bg-[#8DD3BB]  rounded-md">
          <div className="-rotate-45"><IoSend /></div>
          <button>Show Filghts</button>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Home;
  