import {useState} from 'react'
import AddCard from "./AddCard";
import AddCardModal from './Modals/AddCardModal';
import Profile from './Profile';

function AccountPayment() {
  const showModal = ()=>{
    setisClicked(true);
}
const [isClicked, setisClicked] = useState(false);
    const closeModal = () => setisClicked(false);

  return (
    <div className='bg-[#FAFBFC]'>
      {isClicked && <AddCardModal closeModal={closeModal} />}
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
      <section className='font-["Montserrat"] mx-32 mt-12'>
        
       <Profile/>
          <h1 className='font-bold text-[32px] font-["Trade_Gothic_LT_Std"] mb-4'>Account</h1>
          <div className="flex w-full p-6 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] font-['Montserrat'] gap-6 rounded-2xl">
            <div className='p-4 bg-[#8DD3BB] rounded-2xl w-[378px] flex flex-col gap-14'>
              <div className='flex justify-between'>
              <div>
                <h1 className='font-semibold text-2xl'>**** **** ****</h1>
                <h1 className='font-semibold text-[32px]'>4321</h1>
              </div>
              <div>
                <img className='w-[24px] h-[24px]' src="./images/Bin.png" alt="" />
              </div>
              </div>
              <div className='flex justify-between'>
                <div>
              <h1 className='text-[12px] font-medium'>Valid Thru</h1>
              <h1 className='text-[20px] font-semibold'>02/27</h1>
              </div>
              <div>
                <img className='w-[52px] h-[45px]' src="./images/Visa.png" alt="" />
              </div>
            </div>
            </div>
            <div onClick={showModal} className="flex justify-between p-4 items-center rounded-xl border-dotted border-[#8DD3BB] border-[2px] w-[378px]">
               <button  className='w-full flex justify-center flex-col items-center text-center'>
                <img src="./images/Add_circle.png" alt="" />
                <p>Add Card</p>
                </button> 
              </div>
          </div>
          </section>
          </div>
  )
}

export default AccountPayment
