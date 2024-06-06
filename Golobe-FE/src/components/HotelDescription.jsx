import React from "react";
import Header from "./Header";

function HotelDescription() {
  return (
    <div>
      <Header/>
      <section className='font-["Montserrat"] mx-32 mb-6'>
        <div className="flex gap-2 my-10 font-normal ">
          <span className="font-semibold text-[#FF8682]">Turkey</span>
          <img className="h-5 w-5" src="./images/arrow_forward.png" alt="" />
          <span className="font-semibold text-[#FF8682]">Istanbul</span>
          <img className="h-5 w-5" src="./images/arrow_forward.png" alt="" />
          <span className="text-[#9da49d]">
            CVK Park Bosphorus Hotel Istanbul
          </span>
        </div>
        <div className="flex justify-between mb-8">
          <div className="flex flex-col">
            <div className="flex  items-center">
              <h1 className='font-semibold font-["Trade_Gothic_LT_Std"] text-[24px] mb-4 mr-2'>
                CVK Park Bosphorus Hotel Istanbul
              </h1>
              <img className="mb-4" src="./images/5-star.png" alt="" />
              <h1 className="mb-3 ml-2">5 Star Hotel</h1>
            </div>
            <div className="flex gap-1 items-center mb-2">
              <img className="h-5 w-5" src="./images/Location.png" alt="" />
              <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="border-[1px] border-[#8DD3BB] rounded-md w-[40px] h-[32px] flex items-center justify-center">
                <button className="font-semibold">4.2</button>
              </div>
              <p className="flex items-center gap-2 font-normal">
                <span className="typo font-bold">Very Good</span>371 reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-[#FF8682] text-4xl font-semibold text-right">
              $240<span className="text-[16px]">/night</span>
            </span>
            <div className="flex gap-4">
              <button className="py-2 px-4 border-[#8DD3BB] border-[2px] rounded-md">
                <img className="h-5 w-10" src="./images/heart.png" alt="" />
              </button>
              <button className="py-2 px-4 border-[#8DD3BB] border-[2px] rounded-md">
                <img className="h-5 w-9" src="./images/Share.png" alt="" />
              </button>
              <a href="/hotel-booking-details" className="w-full bg-[#8DD3BB] rounded-md py-2 px-4 font-semibold text-center">
                Book now
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2">
          <div className="w-[67%]">
            <img className="rounded-s-2xl" src="./images/Room1.jpg" alt="" />
          </div>
          <div className="flex flex-wrap gap-2 w-[40%]">
            <img src="./images/Room2.png" alt="" />
            <img src="./images/Room3.png" alt="" />
            <img src="./images/Room4.png" alt="" />
            <img src="./images/Room5.png" alt="" />
          </div>
        </div>
      </section>

      <section className='font-["Montserrat"] mx-32 mt-16'>
        <div className="border-t-[1px] border-[#c0c5c1] flex flex-col gap-8 border-b-[1px]">
          <div className="mt-16 flex flex-col gap-4">
            <h1 className='font-semibold font-["Trade_Gothic_LT_Std"] text-[20px]'>
              Overview
            </h1>
            <p className="text-[16px] font-medium">
              Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
              Bosphorus Hotel Istanbul has risen from the ashes of the historic
              Park Hotel, which also served as Foreign Affairs Palace 120 years
              ago and is hosting its guests by assuming this hospitality
              mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and
              fitness area, 18 meeting rooms including 4 dividable ones and 3
              terraces with Bosphorus view, Istanbuls largest terrace with
              Bosphorus view (4500 m2) and latest technology infrastructure, CVK
              Park Bosphorus Hotel Istanbul is destined to be the popular
              attraction point of the city. Room and suite categories at various
              sizes with city and Bosphorus view, as well as 68 separate luxury
              suites, are offered to its special guests as a wide variety of
              selection.
            </p>
          </div>
          <div className="flex gap-4 mb-16">
            <div className="bg-[#8DD3BB] w-[166px] h-[145px] py-4 pl-4 pr-16 rounded-xl">
              <h1 className='font-semibold text-[32px] font-["Trade_Gothic_LT_Std"] mb-6'>
                4.2
              </h1>
              <p className="text-[16px] font-semibold">Very good</p>
              <p className="font-medium text-[14px]">371 reviews</p>
            </div>
            <div className="border-[#8DD3BB] border-[1px] w-[166px] h-[145px] py-4 pl-4 pr-16 rounded-xl">
              <img src="./images/3-Stars.png" className="mb-16" alt="" />
              <p className="font-medium text-[14px]">Near park</p>
            </div>
            <div className="border-[#8DD3BB] border-[1px] w-[166px] h-[145px] py-4 pl-4 pr-12 rounded-xl">
              <img src="./images/3-Stars.png" className="mb-16" alt="" />
              <p className="font-medium text-[14px]">Near nightlife</p>
            </div>
            <div className="border-[#8DD3BB] border-[1px] w-[166px] h-[145px] py-4 pl-4 pr-12 rounded-xl">
              <img src="./images/3-Stars.png" className="mb-16" alt="" />
              <p className="font-medium text-[14px]">Near theater</p>
            </div>
            <div className="border-[#8DD3BB] border-[1px] w-[166px] h-[145px] py-4 pl-4 pr-16 rounded-xl">
              <img src="./images/3-Stars.png" className="mb-16" alt="" />
              <p className="font-medium text-[14px]">Clean Hotel</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-16 flex flex-col gap-4 mb-8">
            <h1 className='font-semibold font-["Trade_Gothic_LT_Std"] text-[20px]'>
              Available Rooms
            </h1>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                className="w-[48px] h-[48px] rounded-md"
                src="./images/Room2.png"
                alt=""
              />
              <p>Superior room - 1 double bed or 2 twin beds</p>
            </div>
            <div className="flex gap-16">
              <h1 className="font-semibold text-[24px] mt-2">
                $240<span className="font-medium text-[14px]">/night</span>
              </h1>
              <button className="bg-[#8DD3BB] rounded-md py-2 px-4 w-[150px] h-[48px]">
                Book now
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border-t-[1px] border-[#c0c5c1] pt-4 mb-4">
            <div className="flex items-center gap-4">
              <img
                className="w-[48px] h-[48px] rounded-md"
                src="./images/Room3.png"
                alt=""
              />
              <p>Superior room - City view - 1 double bed or 2 twin beds</p>
            </div>
            <div className="flex gap-16">
              <h1 className="font-semibold text-[24px] mt-2">
                $280<span className="font-medium text-[14px]">/night</span>
              </h1>
              <button className="bg-[#8DD3BB] rounded-md py-2 px-4 w-[150px] h-[48px]">
                Book now
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border-t-[1px] border-[#c0c5c1] pt-4 mb-4">
            <div className="flex items-center gap-4">
              <img
                className="w-[48px] h-[48px] rounded-md"
                src="./images/Room4.png"
                alt=""
              />
              <p>Superior room - City view - 1 double bed or 2 twin beds</p>
            </div>
            <div className="flex gap-16">
              <h1 className="font-semibold text-[24px] mt-2">
                $320<span className="font-medium text-[14px]">/night</span>
              </h1>
              <button className="bg-[#8DD3BB] rounded-md py-2 px-4 w-[150px] h-[48px]">
                Book now
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border-y-[1px] border-[#c0c5c1] pt-4 pb-16">
            <div className="flex items-center gap-4">
              <img
                className="w-[48px] h-[48px] rounded-md"
                src="./images/Room5.png"
                alt=""
              />
              <p>Superior room - City view - 1 double bed or 2 twin beds</p>
            </div>
            <div className="flex gap-16">
              <h1 className="font-semibold text-[24px] mt-2">
                $350<span className="font-medium text-[14px]">/night</span>
              </h1>
              <button className="bg-[#8DD3BB] rounded-md py-2 px-4 w-[150px] h-[48px]">
                Book now
              </button>
            </div>
          </div>
          <div className="mt-16 border-b-[1px] border-[#c0c5c1] pb-16">
            <div className="flex items-center justify-between">
              <h1 className='font-semibold font-["Trade_Gothic_LT_Std"] text-[20px]'>
                Location/Map
              </h1>
              <button className="py-2 px-4 bg-[#8DD3BB] rounded-md font-semibold">
                View on google maps
              </button>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.507397887965!2d28.9874591!3d41.0360319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab764cd5981a1%3A0xb1067fbfeb23d92d!2zR8O8bcO8xZ9zdXl1LCDEsG7Dtm7DvCBDZC4gTm86OCwgMzQ0MzcgQmV5b8SfbHUvxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sin!4v1716875646049!5m2!1sen!2sin"
                width={"100%"}
                height={"450px"}
                style={{ border: 0, borderRadius: "10px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <img src="./images/Location.png " alt="" />
              <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            </div>
          </div>
          <div className="border-b-[1px] border-[#c0c5c1] pb-16">
            <div className="mt-16 w-[55%]">
              <h1 className='font-semibold text-[20px] font-["Trade_Gothic_LT_Std"] mb-8 '>
                Amenities
              </h1>
              <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                  <div className="flex gap-2 ">
                    <img src="./images/outdoor.png" alt="" />
                    <h1 className="font-medium text-[16px]">Outdoor pool</h1>
                  </div>
                  <div className="flex gap-2 items-center justify-start">
                    <img src="./images/fitness.png" alt="" />
                    <h1 className="font-medium text-[16px] text-left pr-11">
                      Fitness center
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <img src="./images/outdoor.png" alt="" />
                    <h1 className="font-medium text-[16px]">Indoor pool</h1>
                  </div>
                  <div className="flex gap-2 items-center justify-start">
                    <img src="./images/wine.png" alt="" />
                    <h1 className="font-medium text-[16px] pr-16">
                      Bar/Lounge
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <img src="./images/spa.png" alt="" />
                    <h1 className="font-medium text-[16px]">
                      Spa and wellness center
                    </h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src="./images/Wifi.png" alt="" />
                    <h1 className="font-medium text-[16px] pr-[75px]">
                      Free Wi-Fi
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <img src="./images/restaurant.png" alt="" />
                    <h1 className="font-medium text-[16px]">Restaurant</h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src="./images/Breakfast.png" alt="" />
                    <h1 className="font-medium text-[16px]">
                      Tea/coffee machine
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <img src="./images/roomservice.png" alt="" />
                    <h1 className="font-medium text-[16px]">Room service</h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <h1 className="font-medium text-[16px] text-[#FF8682] pr-28">
                      +24 more
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-16 mb-6">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Reviews</h1>
              <button className="bg-[#8DD3BB] rounded-md py-2 px-4 font-semibold text-base">Give your review</button>
            </div>
            </div>
            <div className="border-b-[2px]">
              <div className="flex gap-4 items-center mb-6">
                <h1 className="text-4xl text-center font-semibold">4.2</h1>
                <div>
                  <p>Very good</p>
                  <p>371 reviews</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mt-6">
                <div>
                  <img src="./images/profile-1.png" alt="" />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h1 className="font-semibold border-r-[2px] border-[#11221180] pr-2">5.0 Amazing</h1>
                    <p>Omar Siphor</p>
                  </div>
                  <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelDescription;
