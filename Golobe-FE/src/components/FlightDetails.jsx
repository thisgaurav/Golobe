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
      <section className='font-["Montserrat"] mx-32 mb-6'>
        <div className="flex gap-2 my-10 font-normal">
          <span className="font-semibold text-[#FF8682]">Turkey</span>
          <img className="h-5 w-5" src="./images/arrow_forward.png" alt="" />
          <span className="font-semibold text-[#FF8682]">Istanbul</span>
          <img className="h-5 w-5" src="./images/arrow_forward.png" alt="" />
          <span className="text-[#9da49d]">
            CVK Park Bosphorus Hotel Istanbul
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className='font-semibold font-["Trade_Gothic_LT_Std"] text-[24px] mb-4'>
              Emirates A380 Airbus
            </h1>
            <div className="flex gap-1 items-center mb-2">
              <img className="h-5 w-5" src="./images/Location.png" alt="" />
              <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="border-[1px] border-[#8DD3BB] rounded-md w-[40px] h-[32px] flex items-center justify-center">
              <button className="font-semibold">4.2</button>
              </div>
              <p className="flex items-center gap-2 font-normal"><span className="typo font-bold">Very Good</span>54 reviews</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-[#FF8682] text-4xl font-semibold text-right">
              $240
            </span>
            <div className="flex gap-4">
              <button className="py-2 px-4 border-[#8DD3BB] border-[2px] rounded-md">
                <img className="h-5 w-10" src="./images/heart.png" alt="" />
              </button>
              <button className="py-2 px-4 border-[#8DD3BB] border-[2px] rounded-md">
                <img className="h-5 w-9" src="./images/Share.png" alt="" />
              </button>
              <button className="w-full bg-[#8DD3BB] rounded-md py-2 px-4 font-semibold">
                Book now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-32">
      <div className="flex flex-col gap-6">
      <div className="mb-10">
        <img
          className="h-auto w-full max-w-full rounded-lg  object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div>
        <h1 className="font-semibold font-['Trade_Gothic_LT_Std'] text-[24px] ">Basic Economy Features</h1>
      </div>
      <div className="flex gap-5">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="w-[120px] h-[120px] cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
    </section>
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
