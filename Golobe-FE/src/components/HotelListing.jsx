import React from "react";
import { Input, Select, Option } from "@material-tailwind/react";
function HotelListing() {
  return (
    <div>
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
              <a href="/favorites">
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
      <section>
        <div>
          <div className="flex gap-5 items-center justify-center my-10 mx-32 rounded-xl p-10 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)]">
            <div class="h-10 w-[20vw]">
              <Input
                variant="outlined"
                label="Enter Destination"
                className="h-14 rounded-md"
              />
            </div>
            <div className="h-10 w-[10vw]">
              <Input
                type="date"
                variant="outlined"
                label="Check In"
                className="h-14 rounded-md"
              />
            </div>
            <div className="h-10 w-[20vw]">
              <Input
                type="date"
                variant="outlined"
                label="Check out"
                className="h-14 rounded-md"
              />
            </div>
            <div className="h-10 w-[20vw]">
              <Input
                variant="outlined"
                label="Rooms and Guests"
                className="h-14 rounded-md"
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
              <h1 className="mb-4">Freebies</h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 font-normal">
                  <input id="Emirates" type="checkbox" />
                  <label htmlFor="Emirates">Free breakfast</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="fly-dubai" type="checkbox" />
                  <label htmlFor="fly-dubai">Free parking</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="qatar" type="checkbox" />
                  <label htmlFor="qatar">Free internet</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="etihad" type="checkbox" />
                  <label htmlFor="etihad">Free airport shuttle</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="etihad" type="checkbox" />
                  <label htmlFor="etihad">Free cancellation</label>
                </div>
              </div>
            </div>
            <div>
              <h1 className="mb-4">Amenities</h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 font-normal">
                  <input id="round-trip" type="checkbox" />
                  <label htmlFor="round-trip">24hr front desk</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="on-way" type="checkbox" />
                  <label htmlFor="on-way">Air conditioned</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="multi-city" type="checkbox" />
                  <label htmlFor="multi-city">Fitness</label>
                </div>
                <div className="flex gap-2 font-normal">
                  <input id="flexible" type="checkbox" />
                  <label htmlFor="flexible">Pool</label>
                </div>
                <a href="" className="text-[#FF8682]">
                  +24 more
                </a>
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <div className="flex gap-10 w-full p-3 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)]">
              <div className="w-[33%] border-r-[2px] p-2">
                <h1 className="mb-2">Hotels</h1>
                <p className="font-normal">257 Places</p>
              </div>
              <div className="w-[33%] border-r-[2px] p-2">
                <h1 className="mb-2">Motels</h1>
                <p className="font-normal">51 Places</p>
              </div>
              <div className="w-[33%] p-2">
                <h1 className="mb-2">Resorts</h1>
                <p className="font-normal">72 Places</p>
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
              <div className=" ">
                <img src="./images/Hotel1.png" className="" alt="" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex flex-col gap-4 w-[70%]">
                    <h1 className="text-3xl trade">
                      CVK Park Bosphorus Hotel Istanbul
                    </h1>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="font-normal">Starting From</p>
                    <p className="text-[#FF8682] text-3xl font-semibold text-right">
                      $240/night
                    </p>
                    <p className="font-normal text-right">excl. tax</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex ">
                    <img src="./images/Location.png" alt="" />
                    <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                  </div>
                  <div className="flex gap-10">
                    <div className="flex items-center gap-2">
                    <img src="./images/5-star.png" alt="" />
                    <p className="font-normal">5 Star Hotel</p>
                    </div>
                    <div className="flex">
                        <img src="./images/cafe.png" alt="" />
                        <p className="font-normal"><span className="font-semibold">20+ </span>Aminities</p>
                    </div>
                    
                  </div>
                  <div className="flex gap-4 w-[full] items-center border-b-[2px] pb-5">
                    <p className="border-[#8DD3BB] border-[2px] p-2 rounded-md">
                      4.2
                    </p>
                    <div className="flex gap-2">
                      <p className="font-bold">Very Good</p>
                      <p className="font-normal">54 Reviews</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                  <button className="p-3 border-[#8DD3BB] border-[2px]">
                    <img src="./images/heart.png" alt="" />
                  </button>
                  
                  <button className="w-full bg-[#8DD3BB] rounded-md">
                  <a href="/hotel-description">View Deals</a>
                  </button>
                  
                </div>
                </div>
              </div>
            </div>

            <div className="flight-card flex w-full gap-5 mt-10">
              <div>
                <img src="./images/Hotel2.png" alt="" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex flex-col gap-4 w-[70%]">
                    <h1 className="text-3xl trade">
                    Eresin Hotels Sultanahmet - Boutique Class
                    </h1>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="font-normal">Starting From</p>
                    <p className="text-[#FF8682] text-3xl font-semibold text-right">
                      $104/night
                    </p>
                    <p className="font-normal text-right">excl. tax</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex ">
                    <img src="./images/Location.png" alt="" />
                    <p>Kucukayasofya No. 40 Sultanahmet, Istanbul 34022</p>
                  </div>
                  <div className="flex gap-10">
                    <div className="flex items-center gap-2">
                    <img src="./images/5-star.png" alt="" />
                    <p className="font-normal">5 Star Hotel</p>
                    </div>
                    <div className="flex">
                        <img src="./images/cafe.png" alt="" />
                        <p className="font-normal"><span className="font-semibold">20+ </span>Aminities</p>
                    </div>
                    
                  </div>
                  <div className="flex gap-4 w-[full] items-center border-b-[2px] pb-5">
                    <p className="border-[#8DD3BB] border-[2px] p-2 rounded-md">
                      4.2
                    </p>
                    <div className="flex gap-2">
                      <p className="font-bold">Very Good</p>
                      <p className="font-normal">54 Reviews</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                  <button className="p-3 border-[#8DD3BB] border-[2px]">
                    <img src="./images/heart.png" alt="" />
                  </button>
                  <button className="w-full bg-[#8DD3BB] rounded-md">
                    View Deals
                  </button>
                </div>
                </div>
              </div>
            </div>

            <div className="flight-card flex w-full gap-5 mt-10">
              <div>
                <img src="./images/Hotel3.png" alt="" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex flex-col gap-4 w-[70%]">
                    <h1 className="text-3xl trade">
                    Eresin Hotels Sultanahmet - Boutique Class
                    </h1>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="font-normal">Starting From</p>
                    <p className="text-[#FF8682] text-3xl font-semibold text-right">
                      $104/night
                    </p>
                    <p className="font-normal text-right">excl. tax</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex ">
                    <img src="./images/Location.png" alt="" />
                    <p>Kucukayasofya No. 40 Sultanahmet, Istanbul 34022</p>
                  </div>
                  <div className="flex gap-10">
                    <div className="flex items-center gap-2">
                    <img src="./images/5-star.png" alt="" />
                    <p className="font-normal">5 Star Hotel</p>
                    </div>
                    <div className="flex">
                        <img src="./images/cafe.png" alt="" />
                        <p className="font-normal"><span className="font-semibold">20+ </span>Aminities</p>
                    </div>
                    
                  </div>
                  <div className="flex gap-4 w-[full] items-center border-b-[2px] pb-5">
                    <p className="border-[#8DD3BB] border-[2px] p-2 rounded-md">
                      4.2
                    </p>
                    <div className="flex gap-2">
                      <p className="font-bold">Very Good</p>
                      <p className="font-normal">54 Reviews</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                  <button className="p-3 border-[#8DD3BB] border-[2px]">
                    <img src="./images/heart.png" alt="" />
                  </button>
                  <button className="w-full bg-[#8DD3BB] rounded-md">
                    View Deals
                  </button>
                </div>
                </div>
              </div>
            </div>

            <div className="flight-card flex w-full gap-5 mt-10">
              <div>
                <img src="./images/Hotel4.png" alt="" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex flex-col gap-4 w-[70%]">
                    <h1 className="text-3xl trade">
                    Eresin Hotels Sultanahmet - Boutique Class
                    </h1>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="font-normal">Starting From</p>
                    <p className="text-[#FF8682] text-3xl font-semibold text-right">
                      $104/night
                    </p>
                    <p className="font-normal text-right">excl. tax</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex ">
                    <img src="./images/Location.png" alt="" />
                    <p>Kucukayasofya No. 40 Sultanahmet, Istanbul 34022</p>
                  </div>
                  <div className="flex gap-10">
                    <div className="flex items-center gap-2">
                    <img src="./images/5-star.png" alt="" />
                    <p className="font-normal">5 Star Hotel</p>
                    </div>
                    <div className="flex">
                        <img src="./images/cafe.png" alt="" />
                        <p className="font-normal"><span className="font-semibold">20+ </span>Aminities</p>
                    </div>
                    
                  </div>
                  <div className="flex gap-4 w-[full] items-center border-b-[2px] pb-5">
                    <p className="border-[#8DD3BB] border-[2px] p-2 rounded-md">
                      4.2
                    </p>
                    <div className="flex gap-2">
                      <p className="font-bold">Very Good</p>
                      <p className="font-normal">54 Reviews</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                  <button className="p-3 border-[#8DD3BB] border-[2px]">
                    <img src="./images/heart.png" alt="" />
                  </button>
                  <button className="w-full bg-[#8DD3BB] rounded-md">
                    View Deals
                  </button>
                </div>
                </div>
              </div>
            </div>
            <button className="bg-[#112211] text-white rounded-md p-4 w-full my-10">
              Show more results
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelListing;
