import {useState, useEffect} from 'react'
import { Input } from "@material-tailwind/react";
import SliderLogin from "./SliderLogin";
import '../component-styles/styles.css'
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function ForgotPassword() {
const [email, setEmail] = useState("")
const navigate = useNavigate();
    const handleChange = (evt) =>{
        setEmail(evt.target.value);
        console.log(email)
      }
    
      const [storedUsers, setStoredUsers] = useState([]);
    
      const getUsers = async() =>{
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8080/api/golobe',
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
          setStoredUsers(response.data);
          console.log(storedUsers)
        })
        .catch((error) => {
          console.log(error);
        });
      }
    
        useEffect(()=>{
        getUsers();
      },[])
    
    

      const isExist = (e) =>{
        e.preventDefault();
        storedUsers.map((userObj) =>
          { 
          if(email !== userObj.email){
            toast.error("Sorry this email doesn't exist in our database")
          }
          else{
            navigate('/verify')
          }
        })
      }
  return (
    <div>
        <ToastContainer/>
      <div className="w-full p-32 flex gap-28 ml-72">
        <div className="w-[30%] flex flex-col typo">
            
          <div className='mb-16'>
            <img src="./images/logo-black.png" alt="" />
          </div>

          <div className="typo">
          <div className='flex items-center mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.75 18.75L9 12L15.75 5.25" stroke="#112211" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  
                <a className='text-md' href="/login">Back to login</a>
            </div>
            <form action="">
              <div className="flex flex-col gap-4">
                <h1 className="text-[40px] font-['Trade_Gothic_LT_Std']">
                  Forgot your password ?
                </h1>
                <p className="text-md font-normal">
                Don’t worry, happens to all of us. Enter your email below to recover your password
                </p>
              </div>
              <div className="mt-12 flex flex-col gap-6 ">
                <div className="">
                  <Input name="email" onChange={handleChange} value={email} className="h-[50px]" variant="outlined" label="Email" type="email" />
                </div>
                <div className="w-full text-center ">
                  <button onClick={isExist} className="bg-[#8DD3BB] w-full py-5 rounded-md">Submit</button>
                </div>
                <div className="flex items-center gap-4 justify-center my-8">
                 <div className="w-[30%] border-b-[2px]"></div>
                  <p className="font-normal">Or Login with</p>
                  <div className="w-[30%] border-b-[2px]"></div>
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
              </div>
            </form>
          </div>
        </div>

        <div className="w-[30%]">
        <SliderLogin/>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
