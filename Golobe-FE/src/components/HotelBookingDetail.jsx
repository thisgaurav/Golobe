import {useState} from "react";
import AddCard from "./AddCard";
import AddCardModal from './Modals/AddCardModal';
import Header from "./Header";
function HotelBookingDetail() {
  const [isClicked, setisClicked] = useState(false);
    const closeModal = () => setisClicked(false);
    const token = localStorage.getItem('token');
  return (
    
    <div>
      {isClicked && <AddCardModal closeModal={closeModal} />}
      <Header/>
      <section>
        <div className="m-24 gap-10 typo flex">
          <div className="w-[60%]">
            <div className="py-[24px] px-[32px] mb-10 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] rounded-xl">
              <div className="my-6">    
                <div className="flex justify-between">
                  <div className="flex flex-col gap-6 w-[60%]">
                    <h1 className="text-3xl">Superior room - 1 double bed or 2 twin beds</h1>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-3xl text-[#FF8682]">$240/night</h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div className="w-full rounded-xl flex gap-3 px-[32px] py-[16px] border-[#8DD3BB] border-[2px]">
                  <img
                    src="./images/hotellogo.png"
                    className="h-11 w-16"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">CVK Park Bosphorus Hotel Istanbul</h1>
                    <div className="flex items-center">
                        <img src="./images/Location.png" alt="" />
                        <p className="font-normal">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl">Thursday, Dec 8</h1>
                  <p className="font-normal">Check-In</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src="./images/line5.png" alt="" />
                  <img className="h-[48px] w-[48px]"  src="./images/building.png" alt="" />
                  <img src="./images/line6.png" alt="" />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl">Friday, Dec 9</h1>
                  <p className="font-normal">Check-Out</p>
                </div>
              </div>
            </div>
            <div className="py-[24px] px-[32px] shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] mb-10">
              <div className="flex justify-between bg-[#8DD3BB] p-4 items-center rounded-xl mb-4">
                <div>
                  <h1 className="trade text-md">Pay in full</h1>
                  <p className="font-normal">
                    Pay the total and you are all set
                  </p>
                </div>

                <div>
                  <img src="./images/icon-radio-active.png" alt="" />
                </div>
              </div>
              <div className="flex justify-between p-4 items-center rounded-xl mb-4">
                <div>
                  <h1 className="trade text-md">Pay part now, part later</h1>
                  <p className="font-normal">
                    Pay $207.43 now, and the rest ($207.43) will be
                    automatically charged to the same payment method on Nov 14,
                    2022. No extra fees.
                  </p>
                  <div className="mt-[12px]">
                    <a href="" className="font-normal underline ">
                      More Info
                    </a>
                  </div>
                </div>

                <div className="">
                  <img src="./images/icon-radio.png" alt="" />
                </div>
              </div>
            </div>
            {token ?(<AddCard setisClicked={setisClicked}/>):(<div className="flex flex-col gap-4">
              <div>
                <h1>Login or Sign up to book</h1>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full h-10 rounded-[4px_4px_0px_0px] border-[2px] px-4"
                />
              </div>
              <div>
                <p className="font-normal">
                  We’ll call or text you to confirm your number. Standard
                  message and data rates apply. Privacy Policy
                </p>
              </div>
              <div>
                <button className="w-full py-2 px-4 bg-[#8DD3BB]">
                  Continue
                </button>
              </div>
              <div className="flex items-center gap-4 justify-center my-4">
                <img src="./images/line2.png" alt="" />
                <p className="font-normal">Or</p>
                <img src="./images/line2.png" alt="" />
              </div>
              <div className="flex gap-5 w-full justify-between mb-4">
                <button className="px-6 py-4 w-[31%] flex justify-center border-[#8DD3BB] border-[2px] rounded-md">
                  <img src="./images/fb.png" alt="" />
                </button>
                <button className="px-6 py-4 w-[31%] flex justify-center border-[#8DD3BB] border-[2px] rounded-md">
                  <img src="./images/google.png" alt="" />
                </button>
                <button className="px-6 py-4 w-[31%] flex justify-center border-[#8DD3BB] border-[2px] rounded-md">
                  <img src="./images/apple.png" alt="" />
                </button>
              </div>
              <div className="w-full">
                <button className="w-full flex gap-4 items-center justify-center px-6 py-4 border-[#8DD3BB] border-[2px] rounded-md">
                  <img src="./images/mail.png" alt="" />
                  <p className="text-lg">Continue with email</p>
                </button>
              </div>
            </div>)}
            
          
          </div>
          <div className="w-[40%] h-[490px] p-6 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)]">
            <div className="flex gap-5 border-b-[2px] pb-4">
              <div>
                <img src="./images/hotel1-full.png" className="h-[120px] w-[121px]" alt="" />
              </div>
              <div>
                <div className="mb-5">
                <h2 className="font-normal">CVK Park Bosphorus...</h2>
                <h1 className="text-xl">Superior room - 1 double bed or 2 twin beds</h1>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="border-[#8DD3BB] border-[2px] p-3">4.2</p>
                  <p>Very Good</p>
                  <p className="font-normal">54 Reviews</p>
                </div>

              </div>
            </div>
            <div className="py-6 border-b-[2px]">
              <p className="font-normal">Your booking is protected by <span className="font-bold">golobe</span></p>
            </div>
            <div className="py-5 flex flex-col gap-4 border-b-[2px]">
                <h2 className="trade">Price Details</h2>
                <div className="flex justify-between">
                  <p className="font-normal">Base Fare </p>
                  <p>$240</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal">Discount</p>
                  <p>$0</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal">Taxes</p>
                  <p>$20</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal">Service Fee</p>
                  <p>$5</p>
                </div>
            </div>
            <div className="py-4 flex justify-between">
              <p>Total</p>
              <p>$265</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
}

export default HotelBookingDetail;
