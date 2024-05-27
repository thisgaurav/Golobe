import { Input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import SliderLogin from "./SliderLogin";
import '../component-styles/styles.css'
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (evt) =>{
    setUser({ ...user, [evt.target.name]: evt.target.value });
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
      if(user.email !== userObj.email){
        toast.error("User doesn't exist")
      }
      else if(user.password !== userObj.password){
        toast.error("Incorrect Password")
      }
      else if(user.email === userObj.email && user.password === userObj.password){
        toast.success("Successfully Logged In")
      }
    })
  }
  return (
    <div className="typo overflow-x-hidden">
      <ToastContainer/>
      <div className="w-full p-32 flex gap-28 ml-72">
        <div className="w-[30%] flex flex-col gap-16 typo">
          <div>
            <img src="./images/logo-black.png" alt="" />
          </div>

          <div className="typo">
            <form action="">
              <div className="flex flex-col gap-4">
                <h1 className="text-[40px] font-['Trade_Gothic_LT_Std'] font-semibold">
                  Login
                </h1>
                <p className="font-normal">
                  Login to access your Golobe account
                </p>
              </div>
              <div className="mt-12 flex flex-col gap-6 ">
                <div className="">
                  <Input name="email" onChange={handleChange} value={user.email} className="h-[50px]" variant="outlined" label="Email" type="email" />
                </div>
                <div>
                  <Input name="password" onChange={handleChange} value={user.password} className="h-[50px]" variant="outlined" label="Password" type="password" />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" />
                    <label className="font-normal" htmlFor="">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a href="/forgot-password" className="text-[#FF8682]">
                      Forgot Password
                    </a>
                  </div>
                </div>
                <div className="w-full text-center ">
                  <button onClick={isExist} className="bg-[#8DD3BB] w-full py-5 rounded-md">Login</button>
                </div>
                <div className="w-full text-center">
                  <p>
                    Don’t have an account?{" "}
                    <a href="/sign-up" className="text-[#FF8682]">
                      Sign up
                    </a>
                  </p>
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
  );
}

export default LoginForm;
