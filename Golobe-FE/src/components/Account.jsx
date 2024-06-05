import {useEffect, useState} from 'react'
import Profile from './Profile'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Account() {
const navigate = useNavigate()
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

let date = details.dateOfBirth ? details.dateOfBirth.split("T")[0] : 'N/A';
console.log(date)
 
  


console.log(details)

  return (
    <div className='bg-[#FAFBFC]'>
      <div className="flex justify-center sticky top-0 bg-white z-[9999]">
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
              <a href="/favorites" className="border-r-[3px] border-[#000] pr-4">
                <img src="./images/Favorite.png" alt="" />
              </a>
              <div>
                <a href="" className="flex gap-2 items-center">
                  <img className='w-14 h-14 rounded-full' src={details.profilePicture} alt="" />
                  <p className="typo">{details.firstName+" "+details.lastName }</p>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <section className='font-["Montserrat"] mx-32 mt-12'>
        <Profile name={details.firstName+" "+details.lastName }
         email={details.email} image={details.profilePicture}/>
        <h1 className='font-bold text-[32px] font-["Trade_Gothic_LT_Std"] mb-4'>Account</h1>
        <div className="flex flex-col gap-8 w-full py-8 px-6 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] font-['Montserrat'] rounded-2xl">
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Name</p>
              <h1 className='text-[20px] font-semibold'>{details.firstName +" "+ details.lastName}</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full '>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Email</p>
              <h1 className='text-[20px] font-semibold'>{details.email}</h1>
            </div>
            <div className='flex gap-2'>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Add_circle_small.png" alt="" />
                <p>Add another email</p>
              </button>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Password</p>
              <h1 className='text-[20px] font-semibold'>************</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Phone number</p>
              <h1 className='text-[20px] font-semibold'>{details.phoneNumber}</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Address</p>
              <h1 className='text-[20px] font-semibold'>{details.address}</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Date of birth</p>
              <h1 className='text-[20px] font-semibold'>{details.dateOfBirth}</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center my-10'>
          <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex justify-center w-[50%] items-center gap-2 rounded' onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </div>
  )
}

export default Account
