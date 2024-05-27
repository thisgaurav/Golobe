import * as React from "react";

function FlightDetails() {
  
  const data = [
    {
      imgelink:
        "./images/flightPlane.png",
    },
    {
      imgelink:
        "./images/e1.jpg",
    },
    {
      imgelink:
        "./images/e2.jpg",
    },
    {
      imgelink:
        "./images/e3.jpg",
    },
    {
      imgelink:
        "./images/e4.avif",
    },
    {
      imgelink:
        "./images/e5.jpg",
    },
    {
      imgelink:
        "./images/flightPlane.png",
    },
    {
      imgelink:
        "./images/e1.jpg",
    },
    {
      imgelink:
        "./images/e2.jpg",
    },
    {
      imgelink:
        "./images/e3.jpg",
    },
    {
      imgelink:
        "./images/e4.avif",
    },
    {
      imgelink:
        "./images/e5.jpg",
    },
  ];

  const [active, setActive] = React.useState(
    "./images/flightPlane.png",
  );
 

  return (
    <div>
      <div className="flex justify-center sticky top-0 bg-white z-[9999]">
        <nav className=" w-full flex px-20 py-6 justify-between items-center">
          <div className="flex gap-9">
            <div>
              <a className="flex gap-2 typo items-center text-center" href="">
                <img src="./images/airplane.png" />
                <p>Find Flight</p>
              </a>
            </div>
            <div>
              <a href="" className="flex gap-2 items-center text-center typo">
                <img src="./images/ion_bed.png" />
                <p>Find Stays</p>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3">
            <img src="./images/logo-black.png" alt="logo" />
          </div>
          <div className="flex gap-10">
            <div className="flex gap-5 items-center">
              <a href="" className="border-r-[3px] border-[#000] pr-4">
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

      <section className="font-['Montserrat']">
        <div className=" rounded-lg bg-[#8DD3BB99] mx-32 mt-10 p-4">
        <div className="font-semibold text-[24px] font-['Trade_Gothic_LT_Std'] mb-4">
          <h1>Emirates Airlines Policies</h1>
          </div>
          <div className="flex items-center gap-96">
        <div className="flex gap-2 items-center justify-center">
          <img src="./images/ion_stopwatch.png" alt="" />
          <p className="typo">Pre-flight cleaning, installation of cabin HEPA filters.</p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <img src="./images/ion_stopwatch.png" alt="" />
          <p className="typo">Pre-flight health screening questions.</p>
        </div>
        </div>
        </div>
        <div className="mx-32 mt-10">
            <div className="py-[24px] px-[32px] mb-10 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] rounded-xl ">
              <div className="my-6">    
                <div className="flex justify-between">
                  <div className="flex flex-col gap-6">
                    <p className="font-semibold text-[20px] font-['Trade_Gothic_LT_Std']">Return Wed, Dec 8</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="typo text-[20px]">2h 28m</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div className="flex gap-5 px-8 py-4 border-[#8DD3BB] w-[262px] h-[86px] border-[1px] rounded-lg">
                  <img
                    src="./images/Emirates-logo.png"
                    className="h-11 w-16"
                    alt=""
                  />
                  <div>
                    <h1 className="text-2xl">Emirates</h1>
                    <p className="font-normal">Airbus A320</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="px-6 py-2 border-r-[2px]">
                    <img src="./images/airplane.png" alt="" />
                  </div>
                  <div className="px-6 py-2 border-r-[2px]">
                    <img src="./images/Wifi.png" alt="" />
                  </div>
                  <div className="px-6 py-2 border-r-[2px]">
                    <img src="./images/stopwatch.png" alt="" />
                  </div>
                  <div className="px-6 py-2 border-r-[2px]">
                    <img src="./images/fast-food.png" alt="" />
                  </div>
                  <div className="p-3">
                    <img src="./images/seat.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly items-center">
                <div className="flex gap-4 items-center">
                  <h1 className="text-2xl font-semibold">12:00 pm</h1>
                  <p className="font-normal">Newark(EWR)</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-14" src="./images/line5.png" alt="" />
                  <img className="w-10 " src="./images/airplane.png" alt="" />
                  <img className="w-14" src="./images/line6.png" alt="" />
                </div>
                <div className="flex gap-4 items-center">
                  <h1 className="text-2xl font-semibold">12:00 pm</h1>
                  <p className="font-normal">Newark(EWR)</p>
                </div>
              </div>
            </div>
            </div>
        <div className="mx-32 mt-10">
            <div className="py-[24px] px-[32px] mb-10 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] rounded-xl ">
              <div className="my-6">    
                <div className="flex justify-between">
                  <div className="flex flex-col gap-6">
                    <p className="font-semibold text-[20px] font-['Trade_Gothic_LT_Std']">Return Wed, Dec 8</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="typo text-[20px]">2h 28m</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div className="flex gap-5 px-8 py-4 border-[#8DD3BB] w-[262px] h-[86px] border-[1px] rounded-lg">
                  <img
                    src="./images/Emirates-logo.png"
                    className="h-11 w-16"
                    alt=""
                  />
                  <div>
                    <h1 className="text-2xl">Emirates</h1>
                    <p className="font-normal">Airbus A320</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="px-6 py-2 border-r-[2px]">
                    <img src="./images/airplane.png" alt="" />
                  </div>
                  <div className="px-6 py-2 border-r-[2px]">
                    <img src="./images/Wifi.png" alt="" />
                  </div>
                  <div className="px-6 py-2 border-r-[2px]">
                    <img src="./images/stopwatch.png" alt="" />
                  </div>
                  <div className="px-6 py-2 border-r-[2px]">
                    <img src="./images/fast-food.png" alt="" />
                  </div>
                  <div className="p-3">
                    <img src="./images/seat.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly items-center">
                <div className="flex gap-4 items-center">
                  <h1 className="text-2xl font-semibold">12:00 pm</h1>
                  <p className="font-normal">Newark(EWR)</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-14" src="./images/line5.png" alt="" />
                  <img className="w-10 " src="./images/airplane.png" alt="" />
                  <img className="w-14" src="./images/line6.png" alt="" />
                </div>
                <div className="flex gap-4 items-center">
                  <h1 className="text-2xl font-semibold">12:00 pm</h1>
                  <p className="font-normal">Newark(EWR)</p>
                </div>
              </div>
            </div>
            </div>
      </section>
    </div>
  );
}

export default FlightDetails;
