import {useState, useEffect} from "react";
import AddCard from "./AddCard";
import AddCardModal from './Modals/AddCardModal';
import Profile from './Profile';
import Header from './Header';
import axios from 'axios';


function AccountPayment() {
  let token = localStorage.getItem('token')
  token=token.replace(/"/g, '')

const [details, setDetails] = useState({})

const handleLogout = ()=>{
  localStorage.removeItem('token');
  navigate('/login')
}

useEffect(()=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/golobe/get-user',
    headers: { 
      'Authorization': `Bearer ${token}`,
    },
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    setDetails(response.data.user);
    console.log(response.data.user+"jjjjjjjjjjjjjjjjjj")
  })
  .catch((error) => {
    console.log(error);
  });
  
},[])
 
  


console.log(details)
  const showModal = ()=>{
    setisClicked(true);
}
const [isClicked, setisClicked] = useState(false);
    const closeModal = () => setisClicked(false);

  return (
    <div className='bg-[#FAFBFC]'>
      {isClicked && <AddCardModal closeModal={closeModal} />}
      <Header/>
      <section className='font-["Montserrat"] mx-32 mt-12'>
        
      <Profile name={details.firstName+" "+details.lastName }
         email={details.email} image={details.profilePicture}/> 
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
