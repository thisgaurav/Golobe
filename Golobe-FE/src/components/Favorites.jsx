import React from "react";

function Favorites() {
  return (
    <div>
      <div>
        <div className="flex justify-center sticky top-0 bg-white z-[9999] mb-5">
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
        <section className="mx-28 typo">
          <h1 className="trade text-3xl mb-5">Favorites</h1>
          <div className="flex gap-10 w-full p-3 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)]">
            <div className="w-[50%] border-r-[2px] p-2">
              <h1 className="mb-2">Flights</h1>
              <p className="font-normal">2 marked</p>
            </div>
            <div className="w-[50%] p-2">
              <h1 className="mb-2">Places</h1>
              <p className="font-normal">3 marked</p>
            </div>
          </div>
          <div>
            <div className="flight-card flex w-full gap-5 mt-10">
              <div className="w-[30%]">
                <img
                  className="w-[full] rounded-r-[12px]"
                  src="./images/hotel1-full.png"
                  alt=""
                />
              </div>
              <div className="w-[70%]">
                <div className="flex justify-between  items-center mb-3">
                  <div className="flex flex-col gap-4 w-[70%]">
                    <h1 className="text-3xl trade">
                      CVK Park Bosphorus Hotel Istanbul
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
                    <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                  </div>
                  <div className="flex gap-10">
                    <div className="flex items-center gap-2">
                      <img src="./images/5-star.png" alt="" />
                      <p className="font-normal">5 Star Hotel</p>
                    </div>
                    <div className="flex">
                      <img src="./images/cafe.png" alt="" />
                      <p className="font-normal">
                        <span className="font-semibold">20+ </span>Aminities
                      </p>
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
              <div className="w-[30%]">
                <img
                  className="w-[full] rounded-r-[12px]"
                  src="./images/hotel2-full.png"
                  alt=""
                />
              </div>
              <div className="w-[70%]">
                <div className="flex justify-between  items-center mb-3">
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
                      <p className="font-normal">
                        <span className="font-semibold">20+ </span>Aminities
                      </p>
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
              <div className="w-[30%]">
                <img
                  className="w-[full] rounded-r-[12px]"
                  src="./images/hotel3-full.png"
                  alt=""
                />
              </div>
              <div className="w-[70%]">
                <div className="flex justify-between  items-center mb-3">
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
                      <p className="font-normal">
                        <span className="font-semibold">20+ </span>Aminities
                      </p>
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
          </div>
        </section>
      </div>
    </div>
  );
}

export default Favorites;
