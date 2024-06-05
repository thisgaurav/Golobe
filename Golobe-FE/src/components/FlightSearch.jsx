import React, {useState} from "react";
import Header from "./Header";
import { IoSwapHorizontal } from "react-icons/io5";
import Footer from "./Footer";
import "../component-styles/styles.css";
import { Input, Select, Option } from "@material-tailwind/react";
import { LuPlus } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
function FlightSearch() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleSwap = () => {
    // Swap the values of input1 and input2
    const temp = input1;
    setInput1(input2);
    setInput2(temp);
  };

  return (
    <>
      <Header />
      <section className="w-full h-[750px]">
        <div className="bg-[url('/images/flight-bg.jpeg')] h-[550px] bg-no-repeat bg-cover">
          <div className="flex flex-col text-white w-[35%] p-20 pb-44">
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
      <div className="flight-box w-[80%] bg-white p-6 shadow-[0px_4px_16px_0px_rgba(141,211,187,0.15)] absolute top-[550px] left-[185px] rounded-xl ">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl typo ml-10">Where are you flying?</h1>
          <div className="flex items-center  font-['Montserrat'] mx-10 ">
              <div class="w-[20vw] flex gap-2 items-center">
              <Input
                variant="outlined"
                label="From"
                className="h-16" 
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
              <div className="flex">
              <button onClick={handleSwap} className="rounded-md bg-gray-100">
                <IoSwapHorizontal className="h-8 w-8 " />
              </button>
              </div>
              <Input
                variant="outlined"
                label="To"
                className="h-16"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
              </div>
            <div className="w-[14vw] ml-20">
              <Select label="Trip" className=" rounded-md">
                <Option>Return</Option>
                <Option>Depart</Option>
              </Select>
            </div>
            <div className="w-[15vw] ml-4">
              <Input
                variant="outlined"
                value="07 Nov 22 - 13 Nov 22"
                label="Depart- Return"
                className="h-16 rounded-md"
              />
            </div>
            <div className="w-[20vw] ml-4">
              <Input
                variant="outlined"
                value="1 Passenger, Economy"
                label="Passenger - Class"
                className="rounded-md h-16"
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
      </div>
      <div>
        <section className="w-full mb-20 mt-20">
        <div className="font-['Montserrat'] flex justify-evenly gap-[40rem]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[32px] font-semibold">
            Let's go places together
            </h1>
            <p className="text-[16px] font-normal">
            Discover the latest offers and news and start planning your next trip with us.
            </p>
          </div>
          <div className="">
            <button className="border-[2px] border-[#8DD3BB] p-4 font-semibold rounded-md">
              See All
            </button>
          </div>
        </div>
          <div>
            <div className="w-full mt-5">
              <img className="w-full" src="./images/Frame.png" alt="" />
            </div>
          </div>
        </section>

        <section className="w-full">
        <div className="font-['Montserrat'] flex justify-evenly ">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[32px] font-semibold">
            Fall into travel

            </h1>
            <p className="text-[16px] font-normal">
            Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
            </p>
          </div>
          <div className="">
            <button className="border-[2px] border-[#8DD3BB] p-4 font-semibold rounded-md">
              See All
            </button>
          </div>
        </div>
          <div className="mx-24 flex gap-8 justify-center mt-10">
            
            <div className="relative grid h-[420px] w-[350px] max-w-[28rem] flex-col items-end overflow-hidden rounded-xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/Melbourne.jpeg')] bg-cover bg-clip-border bg-center shadow-none">
              </div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5 ">
                <div className="flex justify-evenly items-end">
               <div className="">
                <h2 className="typo text-3xl font-medium tracking-normal text-white ">Melbourne</h2>
                <p className="typo text-md text-white font-normal">An amazing journey</p>
                </div>
               <div>
                <h3 className="typo text-white text-2xl">$700</h3>
               </div>
               </div>
                <div className="flex justify-center mb-5">
                  <button className="w-[248px] text-black typo bg-[#8DD3BB] p-3 rounded-md">Book Flight</button>
                </div>
                </div>
               
                
              </div>
            </div>

            <div className="relative grid h-[420px] w-[350px] max-w-[28rem] flex-col items-end overflow-hidden rounded-xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/Paris.jpeg')] bg-cover bg-clip-border bg-center shadow-none">
              </div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5 ">
                <div className="flex justify-evenly items-end">
               <div className="">
                <h2 className="typo text-3xl font-medium tracking-normal text-white ">Paris</h2>
                <p className="typo text-md text-white font-normal">A Paris Adventure</p>
                </div>
               <div>
                <h3 className="typo text-white text-2xl">$600</h3>
               </div>
               </div>
                <div className="flex justify-center mb-5">
                  <button className="w-[248px] text-black typo bg-[#8DD3BB] p-3 rounded-md">Book Flight</button>
                </div>
                </div>
               
                
              </div>
            </div>

            <div className="relative grid h-[420px] w-[350px] max-w-[28rem] flex-col items-end overflow-hidden rounded-xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/London.jpeg')] bg-cover bg-clip-border bg-center shadow-none">
              </div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5 ">
                <div className="flex justify-evenly items-end">
               <div className="">
                <h2 className="typo text-3xl font-medium tracking-normal text-white ">London</h2>
                <p className="typo text-md text-white font-normal">London eye adventure</p>
                </div>
               <div>
                <h3 className="typo text-white text-2xl">$350</h3>
               </div>
               </div>
                <div className="flex justify-center mb-5">
                  <button className="w-[248px] text-black typo bg-[#8DD3BB] p-3 rounded-md">Book Flight</button>
                </div>
                </div>
               
                
              </div>
            </div>

            <div className="relative grid h-[420px] w-[350px] max-w-[28rem] flex-col items-end overflow-hidden rounded-xl bg-white bg-clip-border">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./images/Columbia.jpeg')] bg-cover bg-clip-border bg-center shadow-none">
              </div>
              <div className="relative">
                <div className="flex flex-col justify-center gap-5 ">
                <div className="flex justify-evenly items-end">
               <div className="">
                <h2 className="typo text-3xl font-medium tracking-normal text-white ">Columbia</h2>
                <p className="typo text-md text-white font-normal">Amazing Streets</p>
                </div>
               <div>
                <h3 className="typo text-white text-2xl">$700</h3>
               </div>
               </div>
                <div className="flex justify-center mb-5">
                  <button className="w-[248px] text-black typo bg-[#8DD3BB] p-3 rounded-md">Book Flight</button>
                </div>
                </div>
              </div>
            </div>
            </div>
            
          
        </section>

        <section className="mt-20 overflow-x-hidden">
        <div className="font-['Montserrat'] flex justify-evenly ">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[32px] font-semibold">
            Fall into travel

            </h1>
            <p className="text-[16px] font-normal">
            Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
            </p>
          </div>
          <div className="">
            <button className="border-[2px] border-[#8DD3BB] p-4 font-semibold rounded-md">
              See All
            </button>
          </div>
        </div>
          <div className="flex gap-5 justify-center mt-6 w-[100%] ml-32 ">
            <div className="bg-[#8DD3BB] w-[43%] h-[424px] p-5 rounded-xl">
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
              <p className="typo font-normal">Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
            </div>
           </div>       
            <div>
            <button className="w-full bg-white text-black typo p-5">Book Flight</button>
          </div>
           </div>
           
            </div>
            <div className="flex flex-wrap gap-5 w-[48%] h-[200px]">
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
          <div>
            
          </div>
          
          </div>
          
        </section>
      </div>
    </>
  );
}

export default FlightSearch;
