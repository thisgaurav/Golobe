import React from "react";

function TicketDetails() {
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
      <section className='font-["Montserrat"] mx-32'>
        <div className="flex gap-2 my-10 font-normal">
          <span className="font-semibold">Turkey</span>
          <img className="h-5 w-5" src="./images/arrow_forward.png" alt="" />
          <span className="font-semibold">Istanbul</span>
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
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-black text-4xl font-semibold text-right">
              $240
            </span>
            <div className="flex gap-4">
              <button className="py-2 px-4 border-[#8DD3BB] border-[2px] rounded-md">
                <img className="h-5 w-9" src="./images/Share.png" alt="" />
              </button>
              <button className="w-full bg-[#8DD3BB] rounded-md py-2 px-4 font-semibold">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='font-["Montserrat"] mx-32'>
        <div className="flex flex-col">
          <div className=" rounded-lg bg-[#fafbfc] mt-10 flex justify-center">
            <div className="font-semibold text-[24px] bg-[#EBF6F2] w-[326px] p-6 border-[#EAEAEA] border-[1px] border-r-0 rounded-s-2xl">
              <div className='font-["Montserrat"] mb-2'>
                <h1 className="text-[32px]">12:00 pm</h1>
                <p className="text-[12px] font-medium">Newark(EWR)</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  className="w-[30px] h-[36px]"
                  src="./images/vectordown.png"
                  alt=""
                />
                <img
                  className="w-[30px] h-[24px]"
                  src="./images/vectorplane.png"
                  alt=""
                />
                <img
                  className="w-[30px] h-[36px]"
                  src="./images/vectorup.png"
                  alt=""
                />
              </div>
              <div className='font-["Montserrat"] mt-3'>
                <h1 className="text-[32px]">12:00 pm</h1>
                <p className="text-[12px] font-medium">Newark(EWR)</p>
              </div>
            </div>
            <div className="border-[#EAEAEA] border-[1px] border-l-0 rounded-e-2xl">
              <div className="w-[910px] h-[102px] bg-[#8DD3BB] rounded-se-2xl flex items-center justify-between p-6">
                <div className="flex gap-4">
                  <img src="./images/Ellipse1.png" alt="" />
                  <div>
                    <h1 className='font-semibold font-["Trade_Gothic_LT_Std"] text-[20px]'>
                      James Doe
                    </h1>
                    <p>Boarding Pass N’123</p>
                  </div>
                </div>
                <div>
                  <h1 className='font-semibold font-["Trade_Gothic_LT_Std"] text-[14px]'>
                    Busniess Class
                  </h1>
                </div>
              </div>
              <div className="w-[910px] h-[210px] bg-[#fff] rounded-ee-2xl">
                <div className="flex gap-8 items-center p-6 justify-around -mx-10">
                  <div className="flex items-center gap-3">
                    <div className="p-1 bg-[#EBF6F2] rounded-md">
                      <img
                        className="w-6 h-6"
                        src="./images/calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="leading-none">
                      <p className="text-[#707a70] text-[14px] font-semibold">
                        Date
                      </p>
                      <p className="text-[12px] font-medium">Newark(EWR)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 bg-[#EBF6F2] rounded-md">
                      <img
                        className="w-6 h-6"
                        src="./images/timmer.png"
                        alt=""
                      />
                    </div>
                    <div className="leading-none">
                      <p className="text-[#707a70] text-[14px] font-semibold">
                        Flight time
                      </p>
                      <p className="text-[12px] font-medium">12:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 bg-[#EBF6F2] rounded-md">
                      <img
                        className="w-6 h-6"
                        src="./images/bi_door-closed-fill.png"
                        alt=""
                      />
                    </div>
                    <div className="leading-none">
                      <p className="text-[#707a70] text-[14px] font-semibold">
                        Gate
                      </p>
                      <p className="text-[12px] font-medium">A12</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 bg-[#EBF6F2] rounded-md">
                      <img
                        className="w-6 h-6"
                        src="./images/Green-seat.png"
                        alt=""
                      />
                    </div>
                    <div className="leading-none">
                      <p className="text-[#707a70] text-[14px] font-semibold">
                        Seat
                      </p>
                      <p className="text-[12px] font-medium">128</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative">
                  <div className="p-6 ">
                    <h1 className="text-[32px] font-semibold">EK</h1>
                    <p className="text-[12px] font-medium text-[#707a70]">
                      ABC12345
                    </p>
                  </div>
                  <div className="p-4 absolute -right-1 mt-14">
                    <img src="./images/barcode.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[405px] h-[314px] bg-[#fff] border-[#EAEAEA] border-[1px] rounded-2xl flex items-center">
              <img src="./images/from-to.png" alt="" />
            </div>
          </div>

          <div>
            <div className="mt-16">
              <h1 className="text-2xl font-bold">Terms and Conditions</h1>
            </div>
            <div className="mt-9">
              <h2 className="text-xl font-semibold mb-4">Payments</h2>
              <ul className="list-disc flex flex-col gap-4 pl-6">
                <li>
                  If you are4purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes.
                </li>
                <li>
                  If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.
                </li>
                <li>
                  Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.
                </li>
              </ul>
            </div>
            <div className="mt-9">
             
                <h1 className="text-xl font-semibold mb-4">Contact Us</h1>
                <p>If you have any questions about our Website or our Terms of Use, please contact:
                  <br/>Golobe Group Q.C.S.C
                  <br/>Golobe
                  <br/> P.O. Box: 22550
                  <br/>Doha, State of Qatar
                  <br/> Further contact details can be found at golobe.com/help
                </p>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TicketDetails;
