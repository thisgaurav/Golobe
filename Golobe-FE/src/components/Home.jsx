import React from "react";
import "../component-styles/styles.css";
import { LuPlus } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { IoSwapHorizontal } from "react-icons/io5";
import { Input, Select, Option } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Rating,
} from "@material-tailwind/react";
import Footer from "./Footer";
 

function Home() {
  return (
    <>
      <section className="w-full p-6 h-screen">
        <div className="bg-[url('/images/BannerBG.jpeg')] bg-no-repeat relative rounded-3xl shrink-0 h-[600px] bg-center overflow-hidden">
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/40 via-black/50"></div>
          <div className="flex justify-center mt-4 relative">
            <nav className=" w-full flex px-20 py-6 justify-between items-center">
              <div className="flex gap-9 text-white">
                <div>
                  <a
                    className="flex gap-2 typo items-center text-center"
                    href="/flight-search"
                  >
                    <img src="./images/airplaneWhite.png" />
                    <p>Find Flight</p>
                  </a>
                </div>
                <div>
                  <a
                    href="/hotel-search"
                    className="flex gap-2 items-center text-center typo"
                  >
                    <img src="./images/ion_bedWhite.png" />
                    <p>Find Stays</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <a href="/"><img src="./images/WhiteLogo.png" alt="logo" /></a>
              </div>
              <div className="flex gap-10 text-white">
                <button><a href="/login" className="typo">Login</a></button>
                <a href="/sign-up" className="typo bg-white text-black rounded-xl p-4">
                  Sign-Up
                </a>
              </div>
            </nav>
          </div>
          <div className="flex flex-col text-white items-center p-20 font-['Trade_Gothic_LT_Std'] font-normal relative">
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
        <div className="flex absolute left-[185px] top-[55vh] z-[999] flex-col gap-3 bg-[#fff] w-[80%] rounded-xl shadow-[0_4px_16px_0px_rgba(141,211,187,0.15)] p-6">
          <div className="flex gap-2 py-4 px-9">
            <div className="border-r-[2px] pr-4 border-[#D7E2EE]">
              <a className="flex gap-2 typo items-center text-center" href="/flight-search">
                <img src="./images/airplane.png" />
                <p>Find Flight</p>
              </a>
            </div>
            <div>
              <a
                href="/hotel-search"
                className="flex gap-2 items-center pl-2 text-center typo"
              >
                <img src="./images/ion_bed.png" />
                <p>Find Stays</p>
              </a>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center pt-6 font-['Montserrat']">
            <div class="w-[20vw]">
              <Input
                variant="outlined"
                value="Lahore-Karachi"
                label="From-To"
                className="rounded-md h-14"
              />
              <button className="absolute -mt-8 ml-80">
                <IoSwapHorizontal className="h-10 w-10 " />
              </button>
            </div>
            <div className="w-[10vw]">
              <Select label="Select Version" className="h-14 rounded-md">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
            <div className="w-[20vw]">
              <Input
                variant="outlined"
                value="07 Nov 22 - 13 Nov 22"
                label="Depart- Return"
                className="h-14 rounded-md"
              />
            </div>
            <div className="w-[20vw]">
              <Input
                variant="outlined"
                value="1 Passenger, Economy"
                label="Passenger - Class"
                className="rounded-md h-14"
              />
            </div>
          </div>
          <div className="flex gap-5 typo items-center justify-end pr-9 pt-10 pb-2">
            <div className="flex items-center justify-center gap-1 p-4 rounded-md bg-white">
              <LuPlus />
              <button>Add Promo Code</button>
            </div>
            <div className="flex items-center justify-center gap-1 p-4 bg-[#8DD3BB]  rounded-md">
              <div className="-rotate-45">
                <IoSend />
              </div>
              <a href="/flight-list"><button>Show Filghts</button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mb-20">
        <div className="font-['Montserrat'] flex justify-evenly gap-[42rem]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[32px] font-semibold">
              Plan your perfect trip
            </h1>
            <p className="text-[16px] font-normal">
              Search Flights & Places Hire to our most popular destinations
            </p>
          </div>
          <div className="">
            <button className="border-[2px] border-[#8DD3BB] p-4 font-semibold rounded-md">
              See more places
            </button>
          </div>
        </div>
        <div className="gap-10 flex flex-wrap justify-center mx-36 my-10 font-['Montserrat']">
          <div className="flex items-center p-5 gap-4 rounded-xl shadow-xl w-[30%]">
            <div>
              <img src="./images/Istanbul.png" alt="" />
            </div>
            <div className="gap-2 font-medium flex flex-col">
              <p className="font-semibold text-[16px]">Istanbul,Turkey</p>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
          <div className="flex items-center p-5 gap-4 rounded-xl shadow-xl w-[30%]">
            <div>
              <img src="./images/Sydney.png" alt="" />
            </div>
            <div className="gap-2 font-medium flex flex-col">
              <p className="font-semibold text-[16px]">Sydney,Australia</p>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
          <div className="flex items-center p-5 gap-4 rounded-xl shadow-xl w-[30%]">
            <div>
              <img src="./images/Baku.png" alt="" />
            </div>
            <div className="gap-2 font-medium flex flex-col">
              <p className="font-semibold text-[16px]">Baku,Azerbaijan</p>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
          <div className="flex items-center p-5 gap-4 rounded-xl shadow-xl w-[30%]">
            <div>
              <img src="./images/Maldives.png" alt="" />
            </div>
            <div className="gap-2 font-medium flex flex-col">
              <p className="font-semibold text-[16px]">Malé,Maldives</p>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
          <div className="flex items-center p-5 gap-4 rounded-xl shadow-xl w-[30%]">
            <div>
              <img src="./images/Paris.png" alt="" />
            </div>
            <div className="gap-2 font-medium flex flex-col">
              <p className="font-semibold text-[16px]">Paris,France</p>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
          <div className="flex items-center p-5 gap-4 rounded-xl shadow-xl w-[30%]">
            <div>
              <img src="./images/New-York.png" alt="" />
            </div>
            <div className="gap-2 font-medium flex flex-col">
              <p className="font-semibold text-[16px]">New York,US</p>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
          <div className="flex items-center p-5 gap-4 rounded-xl shadow-xl w-[30%]">
            <div>
              <img src="./images/London.png" alt="" />
            </div>
            <div className="gap-2 font-medium flex flex-col">
              <p className="font-semibold text-[16px]">London,UK</p>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
          <div className="flex items-center p-5 gap-4 rounded-xl shadow-xl w-[30%]">
            <div>
              <img src="./images/Tokyo.png" alt="" />
            </div>
            <div className="gap-2 font-medium flex flex-col">
              <p className="font-semibold text-[16px]">Tokyo,Japan</p>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
          <div className="flex items-center p-5 gap-4 rounded-xl shadow-xl w-[30%]">
            <div>
              <img src="./images/Dubai.png" alt="" />
            </div>
            <div className="gap-2 font-medium flex flex-col">
              <p className="font-semibold text-[16px]">Dubai,UAE</p>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mb-20">
        <div className="w-full flex gap-5 justify-center">
      <div className="relative grid h-[559px] w-[40%] flex-col items-end overflow-hidden rounded-3xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/flight.png')] bg-cover bg-clip-border bg-center shadow-none"> 
              </div>
              <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/40 via-black/50"></div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5">
                <div className="flex justify-evenly items-end">
               <div className="flex items-center flex-col gap-2 ">
                <h2 className="typo text-4xl font-medium tracking-normal text-white ">Flights</h2>
                <p className="typo text-md text-white font-normal text-center">Search Flights & Places Hire to our most popular <br/>destinations</p>
                </div>
               </div>
                <div className="flex justify-center mb-5">
                  <a href="/flight-list"><button className="w-[144px] text-black typo bg-[#8DD3BB] p-3 rounded-md flex items-center justify-center gap-1"><IoSend className="-rotate-45 h-4 w-4"/>Show Flight</button></a>
                </div>
                </div> 
              </div>
            </div>
      <div className="relative grid h-[559px] w-[40%] flex-col items-end overflow-hidden rounded-3xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/hotel.png')] bg-cover bg-clip-border bg-center shadow-none">
              </div>
              <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/40 via-black/50"></div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5 ">
                <div className="flex justify-evenly items-end">
                <div className="flex items-center flex-col gap-2 ">
                <h2 className="typo text-4xl font-medium tracking-normal text-white ">Hotels</h2>
                <p className="typo text-md text-white font-normal text-center">Search Hotels & Places Hire to our most popular <br/>destinations</p>
                </div>
               </div>
                <div className="flex justify-center mb-5">
                  <a href="/hotel-listing">
                  <button className="w-[144px] text-black typo bg-[#8DD3BB] p-3 rounded-md flex items-center justify-center gap-1"><IoSend className="-rotate-45 h-4 w-4"/>Show Places</button>
                  </a>
                </div>
                </div> 
              </div>
            </div>
            </div>
      </section>
      <section className="w-full font-['Montserrat']">
        <div className="font-['Montserrat'] flex justify-around gap-[48rem]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[32px] font-semibold">
            Reviews
            </h1>
            <p className="text-[16px] font-normal">
            What people says about Golobe facilities
            </p>
          </div>
          <div className="">
            <button className="border-[2px] border-[#8DD3BB] p-4 font-semibold rounded-md">
            See All
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-20 mt-10">
        <Card className="w-full max-w-[26rem] shadow-[15px_15px_0px_0px_rgba(141,211,187,0.40)]">
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-bold font-['Trade_Gothic_LT_Std'] text-[24px]">
          “A real sense of community, nurtured”
          </Typography>
        </div>
        <div className="flex gap-2 flex-col">
        <Typography className="font-normal text-[14px] text-[#889088] line-clamp-2" >
        Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
        </Typography>
        <p className="flex justify-end typo mb-2">View more</p>
        </div>
        <div className="flex flex-col">
          <div className="mb-2"><Rating value={5} /></div>
          <div className="font-semibold text-[14px]">Olga</div>
          <div className="text-[12px] font-normal text-[#889088] mb-2">Weave Studios – Kai Tak</div>
          <div className="flex items-center gap-1">
            <img className="h-5 w-5" src="./images/icons_google.png" alt="" />
            <p className="text-[12px] font-normal text-[#889088]">Google</p>
          </div>
        </div>
      </CardBody>
      <div floated={false} className="flex items-center justify-center pb-5">
        <img
          src="./images/olga.png"
          alt=""
        />
      </div>
    </Card>
    <Card className="w-full max-w-[26rem] shadow-[15px_15px_0px_0px_rgba(141,211,187,0.40)]">
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-bold font-['Trade_Gothic_LT_Std'] text-[24px]">
          “The facilities are superb. Clean, slick, bright.”
          </Typography>
        </div>
        <div className="flex gap-2 flex-col">
        <Typography className="font-normal text-[14px] text-[#889088] line-clamp-2" >
        “A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle
        </Typography>
        <p className="flex justify-end typo mb-2">View more</p>
        </div>
        <div className="flex flex-col">
          <div className="mb-2"><Rating value={5} /></div>
          <div className="font-semibold text-[14px]">Thomas</div>
          <div className="text-[12px] font-normal text-[#889088] mb-2">Weave Studios – Olympic</div>
          <div className="flex items-center gap-1">
            <img className="h-5 w-5" src="./images/icons_google.png" alt="" />
            <p className="text-[12px] font-normal text-[#889088]">Google</p>
          </div>
        </div>
      </CardBody>
      <div floated={false} className="flex items-center justify-center pb-5">
        <img
          src="./images/Thomas.png"
          alt="ui/ux review check"
        />
      </div>
    </Card>
    <Card className="w-full max-w-[26rem] shadow-[15px_15px_0px_0px_rgba(141,211,187,0.40)]">
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-bold font-['Trade_Gothic_LT_Std'] text-[24px]">
          “A real sense of community, nurtured”
          </Typography>
        </div>
        <div className="flex gap-2 flex-col">
        <Typography className="font-normal text-[14px] text-[#889088] line-clamp-2" >
        Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
        </Typography>
        <p className="flex justify-end typo mb-2">View more</p>
        </div>
        <div className="flex flex-col">
          <div className="mb-2"><Rating value={5} /></div>
          <div className="font-semibold text-[14px]">Eliot</div>
          <div className="text-[12px] font-normal text-[#889088] mb-2">Weave Studios – Kai Tak</div>
          <div className="flex items-center gap-1">
            <img className="h-5 w-5" src="./images/icons_google.png" alt="" />
            <p className="text-[12px] font-normal text-[#889088]">Google</p>
          </div>
        </div>
      </CardBody>
      <div floated={false} className="flex items-center justify-center pb-5">
        <img className="rounded-lg"
          src="./images/Eliot.png"
          alt="ui/ux review check"
        />
      </div>
    </Card>
    </div>
        </section>


    </>
  );
}



export default Home;
