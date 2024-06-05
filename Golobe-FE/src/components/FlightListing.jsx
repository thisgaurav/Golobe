import React from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import { LuPlus } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import "../component-styles/styles.css";
import Footer from "./Footer";
import Header from "./Header";

function FlightListing() {
  return (
    <div>
      <Header/>
      <section>
        <div>
          <div className="flex gap-5 items-center justify-center my-10 mx-32 rounded-xl p-10 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)]">
            <div class="h-10 w-[20vw]">
              <Input
                variant="outlined"
                value="Lahore-Karachi"
                label="From-To"
                className="h-14 rounded-md"
              />
            </div>
            <div className="h-10 w-[10vw]">
              <Select
                variant="outlined"
                label="Trip"
                className="rounded-md"
              >
                <Option>Depart</Option>
                <Option>Return</Option>
              </Select>
            </div>
            <div className="h-10 w-[20vw]">
              <Input
                variant="outlined"
                label="Depart-Return"
                className="h-14 rounded-md"
                value="07 Nov 22 - 13 Nov 22"
              />
            </div>
            <div className="h-10 w-[20vw]">
              <Input
                variant="outlined"
                label="Passenger-class"
                className="rounded-md"
                value="1 Passenger, Economy"
              />
            </div>
            <div>
              <button className="rounded-md p-2 bg-[#8DD3BB]">
                <img src="./images/Search.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="typo">
        <div className="flex w-full justify-center gap-5">
          <div className="flex pr-6 flex-col w-[25%] border-r-[2px]">
            <h1 className="text-xl">Filters</h1>
            <div className="py-5 border-b-[2px]">
              <h1 className="text-md mb-4">Price</h1>
              <div class="relative mb-6">
                <label for="labels-range-input" class="sr-only">
                  Labels range
                </label>
                <input
                  id="labels-range-input"
                  type="range"
                  min="50"
                  max="1200"
                  className="h-2 w-full bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                  Min ($50)
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                  Max ($1200)
                </span>
              </div>
            </div>
            <div className="py-5 border-b-[2px]">
              <h1 className="mb-4">Departure Time</h1>
              <div class="relative mb-6">
                <label for="labels-range-input" class="sr-only">
                  Labels range
                </label>
                <input
                  id="labels-range-input"
                  type="range"
                  min="12:01AM"
                  max="11:56PM"
                  className="h-2 bg-gray-200 w-full rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                  Min (12:01AM)
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                  Max (11:56PM)
                </span>
              </div>
            </div>
            <div className="py-5 border-b-[2px]">
              <h1 className="mb-4">Ratings</h1>
              <div className="flex gap-4">
                <button className="border-[2px] border-[#8DD3BB] p-2">
                  0+
                </button>
                <button className="border-[2px] border-[#8DD3BB] p-2">
                  1+
                </button>
                <button className="border-[2px] border-[#8DD3BB] p-2">
                  2+
                </button>
                <button className="border-[2px] border-[#8DD3BB] p-2">
                  3+
                </button>
                <button className="border-[2px] border-[#8DD3BB] p-2">
                  4+
                </button>
              </div>
            </div>
            <div className="py-5 border-b-[2px]">
              <h1 className="mb-4">Airlines</h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 font-normal">
                  <input id="Emirates" type="checkbox" />
                  <label htmlFor="Emirates">Emirates</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="fly-dubai" type="checkbox" />
                  <label htmlFor="fly-dubai">Fly Dubai</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="qatar" type="checkbox" />
                  <label htmlFor="qatar">Qatar</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="etihad" type="checkbox" />
                  <label htmlFor="etihad">Etihad</label>
                </div>
              </div>
            </div>
            <div>
              <h1 className="mb-4">Trips</h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 font-normal">
                  <input id="round-trip" type="checkbox" />
                  <label htmlFor="round-trip">Round Trip</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="on-way" type="checkbox" />
                  <label htmlFor="on-way">On Way</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="multi-city" type="checkbox" />
                  <label htmlFor="multi-city">Multi-City</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="flexible" type="checkbox" />
                  <label htmlFor="flexible">My Dates are flexible</label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <div className="flex gap-10 w-full p-3 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)]">
              <div className="w-[25%] border-r-[2px] p-2">
                <h1 className="mb-2">Cheapest</h1>
                <p className="font-normal">$99 . 2h 18m</p>
              </div>
              <div className="w-[25%] border-r-[2px] p-2">
                <h1 className="mb-2">Best</h1>
                <p className="font-normal">$99 . 2h 18m</p>
              </div>
              <div className="w-[25%] border-r-[2px] p-2">
                <h1 className="mb-2">Quickest</h1>
                <p className="font-normal">$99 . 2h 18m</p>
              </div>
              <div className="w-[25%] flex gap-3 items-center p-2">
                <img src="./images/menu.png" alt=""/>
                <p className="font-normal">Other Sort</p>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <p>
                Showing 4 of <span className="text-[#FF8682]">257 places</span>
              </p>
              <div className="flex">
                <p className="font-normal">Sort By</p>
                <select>
                  <option value="Recommended">Recommended</option>
                </select>
              </div>
            </div>
            <div className="flight-card flex w-full gap-5 mt-10">
              <div>
                <img src="./images/Emirates-logo.png" alt="" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-4 w-[70%] items-center">
                    <p className="border-[#8DD3BB] border-[2px] p-2 rounded-md">4.2</p>
                    <div className="flex gap-2">
                      <p className="font-bold">Very Good</p>
                      <p className="font-normal">54 Reviews</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="font-normal">Starting From</p>
                    <p className="text-[#FF8682] text-3xl font-semibold text-right">$104</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 pb-3 border-b-[2px]">
                    <div className="flex gap-16">
                        <div className="flex gap-3 items-center">
                        <input type="checkbox" />
                        <div>
                        <label htmlFor="">12:00pm - 1:28pm</label>
                        <p className="font-normal">Emirates</p>
                        </div>
                        
                        
                        </div>
                        <p className="text-[#121]">non-stop</p>
                        <div>
                            <p className="text-[#121]">2h 28m</p>
                            <p className="font-normal">EWR-BNA</p>
                        </div>
                    </div>
                    <div className="flex gap-16">
                        <div className="flex gap-3 items-center">
                        <input type="checkbox" />
                        <div>
                        <label htmlFor="">12:00pm - 1:28pm</label>
                        <p className="font-normal">Emirates</p>
                        </div>
                        
                        
                        </div>
                        <p className="text-[#121]">non-stop</p>
                        <div>
                            <p className="text-[#121]">2h 28m</p>
                            <p className="font-normal">EWR-BNA</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex gap-5">
                    <button className="p-3 border-[#8DD3BB] border-[2px]"> 
                        <img src="./images/heart.png" alt="" />
                    </button>
                    <button className="w-full bg-[#8DD3BB] rounded-md">
                     <a href="/flight-details">View Deals</a>   
                    </button>
                </div>
              </div>
            </div>

            <div className="flight-card flex w-full gap-5 mt-10">
              <div>
                <img src="./images/fly-dubai.png" alt="" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-4 w-[70%] items-center">
                    <p className="border-[#8DD3BB] border-[2px] p-2 rounded-md">4.2</p>
                    <div className="flex gap-2">
                      <p className="font-bold">Very Good</p>
                      <p className="font-normal">54 Reviews</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="font-normal">Starting From</p>
                    <p className="text-[#FF8682] text-3xl font-semibold text-right">$104</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-col gap-5 pb-3 border-b-[2px]">
                    <div className="flex gap-16">
                        <div className="flex gap-3 items-center">
                        <input type="checkbox" />
                        <div>
                        <label htmlFor="">12:00pm - 1:28pm</label>
                        <p className="font-normal">Emirates</p>
                        </div>
                        
                        
                        </div>
                        <p className="text-[#121]">non-stop</p>
                        <div>
                            <p className="text-[#121]">2h 28m</p>
                            <p className="font-normal">EWR-BNA</p>
                        </div>
                    </div>
                    <div className="flex gap-16">
                        <div className="flex gap-3 items-center">
                        <input type="checkbox" />
                        <div>
                        <label htmlFor="">12:00pm - 1:28pm</label>
                        <p className="font-normal">Emirates</p>
                        </div>
                        
                        
                        </div>
                        <p className="text-[#121]">non-stop</p>
                        <div>
                            <p className="text-[#121]">2h 28m</p>
                            <p className="font-normal">EWR-BNA</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex gap-5">
                    <button className="p-3 border-[#8DD3BB] border-[2px]"> 
                        <img src="./images/heart.png" alt="" />
                    </button>
                    <button className="w-full bg-[#8DD3BB] rounded-md">
                        View Deals
                    </button>
                </div>
              </div>
            </div>

            <div className="flight-card flex w-full gap-5 mt-10">
              <div>
                <img src="./images/qatar.png" alt="" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-4 w-[70%] items-center">
                    <p className="border-[#8DD3BB] border-[2px] p-2 rounded-md">4.2</p>
                    <div className="flex gap-2">
                      <p className="font-bold">Very Good</p>
                      <p className="font-normal">54 Reviews</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="font-normal">Starting From</p>
                    <p className="text-[#FF8682] text-3xl font-semibold text-right">$104/night</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-col gap-5 pb-3 border-b-[2px]">
                    <div className="flex gap-16">
                        <div className="flex gap-3 items-center">
                        <input type="checkbox" />
                        <div>
                        <label htmlFor="">12:00pm - 1:28pm</label>
                        <p className="font-normal">Emirates</p>
                        </div>
                        
                        
                        </div>
                        <p className="text-[#121]">non-stop</p>
                        <div>
                            <p className="text-[#121]">2h 28m</p>
                            <p className="font-normal">EWR-BNA</p>
                        </div>
                    </div>
                    <div className="flex gap-16">
                        <div className="flex gap-3 items-center">
                        <input type="checkbox" />
                        <div>
                        <label htmlFor="">12:00pm - 1:28pm</label>
                        <p className="font-normal">Emirates</p>
                        </div>
                        
                        
                        </div>
                        <p className="text-[#121]">non-stop</p>
                        <div>
                            <p className="text-[#121]">2h 28m</p>
                            <p className="font-normal">EWR-BNA</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex gap-5">
                    <button className="p-3 border-[#8DD3BB] border-[2px]"> 
                        <img src="./images/heart.png" alt="" />
                    </button>
                    <button className="w-full bg-[#8DD3BB] rounded-md">
                        View Deals
                    </button>
                </div>
              </div>
            </div>

            <div className="flight-card flex w-full gap-5 mt-10">
              <div>
                <img src="./images/etihad.png" alt="" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-4 w-[70%] items-center">
                    <p className="border-[#8DD3BB] border-[2px] p-2 rounded-md">4.2</p>
                    <div className="flex gap-2">
                      <p className="font-bold">Very Good</p>
                      <p className="font-normal">54 Reviews</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="font-normal">Starting From</p>
                    <p className="text-[#FF8682] text-3xl font-semibold text-right">$104/night</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-col gap-5 pb-3 border-b-[2px]">
                    <div className="flex gap-16">
                        <div className="flex gap-3 items-center">
                        <input type="checkbox" />
                        <div>
                        <label htmlFor="">12:00pm - 1:28pm</label>
                        <p className="font-normal">Emirates</p>
                        </div>
                        
                        
                        </div>
                        <p className="text-[#121]">non-stop</p>
                        <div>
                            <p className="text-[#121]">2h 28m</p>
                            <p className="font-normal">EWR-BNA</p>
                        </div>
                    </div>
                    <div className="flex gap-16">
                        <div className="flex gap-3 items-center">
                        <input type="checkbox" />
                        <div>
                        <label htmlFor="">12:00pm - 1:28pm</label>
                        <p className="font-normal">Emirates</p>
                        </div>
                        
                        
                        </div>
                        <p className="text-[#121]">non-stop</p>
                        <div>
                            <p className="text-[#121]">2h 28m</p>
                            <p className="font-normal">EWR-BNA</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex gap-5">
                    <button className="p-3 border-[#8DD3BB] border-[2px]"> 
                        <img src="./images/heart.png" alt="" />
                    </button>
                    <button className="w-full bg-[#8DD3BB] rounded-md">
                        View Deals
                    </button>
                </div>
              </div>
            </div>
          <button className="bg-black text-white rounded-md p-4 w-full my-10">Show more results</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FlightListing;
