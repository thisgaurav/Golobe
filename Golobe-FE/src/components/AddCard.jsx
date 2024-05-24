import {useState} from 'react'
import AddCardModal from './Modals/AddCardModal';


function AddCard({setisClicked}) {
    const showModal = ()=>{
        setisClicked(true);
    }
  return (
    <div>
        
      <div className="py-[24px] px-[32px] shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] my-10">
              <div className="flex justify-between bg-[#8DD3BB] p-4 items-center rounded-xl mb-4">
                <div className='flex gap-5 items-center'>
                  <img src="./images/Visa.png" alt="" />
                  <p>
                  **** 4321
                  <span className="font-normal ml-3">
                  02/27
                  </span>
                  </p>
                </div>

                <div>
                  <img src="./images/icon-radio-active.png" alt="" />
                </div>
              </div>
              <div onClick={showModal} className="flex justify-between p-4 items-center rounded-xl mb-4 border-dotted border-[#8DD3BB] border-[2px] h-[316px]">
               <button  className='w-full flex justify-center flex-col items-center text-center'>
                <img src="./images/Add_circle.png" alt="" />
                <p>Add Card</p>
                </button> 
              </div>
            </div>
           
    </div>
  )
}

export default AddCard
