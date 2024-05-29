import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../component-styles/styles.css";
import { Input, Select, Option } from "@material-tailwind/react";
import { LuPlus } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
function HotelSearch() {
  return (
    <div>
      <Header />
      <section className="w-full mb-48">
        <div className="bg-[url('/images/hotel-search-bg.jpg')] bg-cover h-[537px] bg-no-repeat">
          <div className="flex flex-col text-white w-[35%] p-20 ">
            <div className="text-[45px]">
              <h2 className="typo text-5xl text-white">
                Make your travel whishlist, we’ll do the rest
              </h2>
            </div>
            <div className="text-[20px]">
              <p className="text-xl text-white typo">
                Special offers to suit your plan
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flight-box mb-80 w-[85%] bg-white p-6 shadow-[0px_4px_16px_0px_rgba(141,211,187,0.15)] absolute top-[500px] left-[125px] rounded-xl ">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl typo">Where are you flying?</h1>
          <div className="flex gap-5 items-center justify-center pt-6">
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
          </div>
          <div className="flex gap-5 typo items-center justify-end pr-9 pt-10 pb-2">
            <div className="flex items-center justify-center gap-1 p-4 rounded-md bg-white">
              <LuPlus />
              <button>Add Promo Code</button>
            </div>
           <a href="/hotel-listing">
           <div className="flex items-center justify-center gap-1 p-4 bg-[#8DD3BB]  rounded-md">
              <div className="-rotate-45">
                <img src="./images/building.png" alt="" />
              </div>
              <button>Show Places</button>
            </div></a> 
          </div>
        </div>
      </div>
      <div>
        <section>
          <div className="mb-20">
            <div className="flex gap-8 mx-48 p-10 flex-col ">
              <h1 className="trade text-3xl">Your recent searches</h1>
              <div className="flex justify-between">
                <div className="flex items-center gap-4 typo w-[20%]">
                  <div>
                    <img src="./images/Istanbul.png" alt="" />
                  </div>
                  <div className="gap-2 font-medium flex flex-col">
                    <p className="font-semibold text-[16px]">Istanbul,Turkey</p>
                    <p>325 Places</p>
                  </div>
                </div>
                <div className="flex items-center p-5 gap-4 typo w-[20%]">
                  <div>
                    <img src="./images/Sydney.png" alt="" />
                  </div>
                  <div className="gap-2 font-medium flex flex-col">
                    <p className="font-semibold text-[16px]">
                      Sydney,Australia
                    </p>
                    <p>325 Places</p>
                  </div>
                </div>
                <div className="flex items-center p-5 gap-4 typo w-[20%]">
                  <div>
                    <img src="./images/Baku.png" alt="" />
                  </div>
                  <div className="gap-2 font-medium flex flex-col">
                    <p className="font-semibold text-[16px]">Baku,Azerbaijan</p>
                    <p>325 Places</p>
                  </div>
                </div>
                <div className="flex items-center p-5 gap-4 typo w-[20%]">
                  <div>
                    <img src="./images/Maldives.png" alt="" />
                  </div>
                  <div className="gap-2 font-medium flex flex-col">
                    <p className="font-semibold text-[16px]">Malé,Maldives</p>
                    <p>325 Places</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="flex items-center justify-around my-10 mx-24">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl">Fall into travel</h1>
              <p className="typo font-normal">
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got the travel tools to get you
                to your destination.
              </p>
            </div>
            <div>
              <button className="border-[#8DD3BB] border-[2px] px-[16px] py-[8px] rounded-md">
                See All
              </button>
            </div>
          </div>
          <div className="mx-20 flex gap-5 justify-center">
            <div className="relative grid h-[420px] w-[296px] max-w-[28rem] flex-col items-end overflow-hidden rounded-xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/Melbourne.jpeg')] bg-cover bg-clip-border bg-center shadow-none"></div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5 ">
                  <div className="flex justify-evenly items-end">
                    <div className="">
                      <h2 className="typo text-3xl font-medium tracking-normal text-white ">
                        Melbourne
                      </h2>
                      <p className="typo text-md text-white font-normal">
                        An amazing journey
                      </p>
                    </div>
                    <div>
                      <h3 className="typo text-white text-2xl">$700</h3>
                    </div>
                  </div>
                  <div className="flex justify-center mb-5">
                    <button className="w-[248px] text-black typo bg-[#8DD3BB] p-3 rounded-md">
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative grid h-[420px] w-[296px] max-w-[28rem] flex-col items-end overflow-hidden rounded-xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/Paris.jpeg')] bg-cover bg-clip-border bg-center shadow-none"></div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5 ">
                  <div className="flex justify-evenly items-end">
                    <div className="">
                      <h2 className="typo text-3xl font-medium tracking-normal text-white ">
                        Paris
                      </h2>
                      <p className="typo text-md text-white font-normal">
                        A Paris Adventure
                      </p>
                    </div>
                    <div>
                      <h3 className="typo text-white text-2xl">$600</h3>
                    </div>
                  </div>
                  <div className="flex justify-center mb-5">
                    <button className="w-[248px] text-black typo bg-[#8DD3BB] p-3 rounded-md">
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative grid h-[420px] w-[296px] max-w-[28rem] flex-col items-end overflow-hidden rounded-xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/London.jpeg')] bg-cover bg-clip-border bg-center shadow-none"></div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5 ">
                  <div className="flex justify-evenly items-end">
                    <div className="">
                      <h2 className="typo text-3xl font-medium tracking-normal text-white ">
                        London
                      </h2>
                      <p className="typo text-md text-white font-normal">
                        London eye adventure
                      </p>
                    </div>
                    <div>
                      <h3 className="typo text-white text-2xl">$350</h3>
                    </div>
                  </div>
                  <div className="flex justify-center mb-5">
                    <button className="w-[248px] text-black typo bg-[#8DD3BB] p-3 rounded-md">
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative grid h-[420px] w-[296px] max-w-[28rem] flex-col items-end overflow-hidden rounded-xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/Columbia.jpeg')] bg-cover bg-clip-border bg-center shadow-none"></div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5 ">
                  <div className="flex justify-evenly items-end">
                    <div className="">
                      <h2 className="typo text-3xl font-medium tracking-normal text-white ">
                        Columbia
                      </h2>
                      <p className="typo text-md text-white font-normal">
                        Amazing Streets
                      </p>
                    </div>
                    <div>
                      <h3 className="typo text-white text-2xl">$700</h3>
                    </div>
                  </div>
                  <div className="flex justify-center mb-5">
                    <button className="w-[248px] text-black typo bg-[#8DD3BB] p-3 rounded-md">
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-around my-10 mx-24">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl">Fall into travel</h1>
              <p className="typo font-normal">
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got the travel tools to get you
                to your destination.
              </p>
            </div>
            <div>
              <button className="border-[#8DD3BB] border-[2px] px-[16px] py-[8px] rounded-md">
                See All
              </button>
            </div>
          </div>
          <div className="mx-28 flex gap-5 justify-center">
            <div className="bg-[#8DD3BB] w-[552px] h-[424px] p-5 rounded-xl">
              <div className="flex flex-col gap-32">
                <div className="flex flex-col gap-10">
                  <div className="flex justify-between">
                    <div className="w-[50%]">
                      <h1 className="text-4xl typo">Backpacking Sri Lanka</h1>
                    </div>
                    <div className="bg-white flex flex-col w-[68px] h-[62px] justify-center items-center rounded-xl shadow-md">
                      <h1 className="typo font-normal">From</h1>
                      <h1 className="typo text-lg">$700</h1>
                    </div>
                  </div>
                  <div className="">
                    <p className="typo font-normal">
                      Traveling is a unique experience as it's the best way to
                      unplug from the pushes and pulls of daily life. It helps
                      us to forget about our problems, frustrations, and fears
                      at home. During our journey, we experience life in
                      different ways. We explore new places, cultures, cuisines,
                      traditions, and ways of living.
                    </p>
                  </div>
                </div>
                <div>
                  <button className="w-full bg-white text-black typo p-5">
                    Book Flight
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 w-[656px] h-[200px]">
              <div>
                <img src="./images/1.png" alt="" />
              </div>
              <div>
                <img src="./images/2.png" alt="" />
              </div>
              <div>
                <img src="./images/3.png" alt="" />
              </div>
              <div>
                <img src="./images/4.png" alt="" />
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HotelSearch;
