import React, { useState } from 'react'
import SliderLogin from './SliderLogin'
import { Input } from "@material-tailwind/react";
import '../component-styles/styles.css'
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    profilePicture: "", // New field
    address: "", // New field
    dateOfBirth: "", // New field
  });

  const [isSame, setIsSame] = useState(false);

  const handleChange = (evt) => {
    setNewUser({ ...newUser, [evt.target.name]: evt.target.value });
  };

  const handleProfilePictureChange = (event) => {
    // Access the selected file from the event object
    const selectedFile = event.target.files[0];

    // Update the profilePicture state with the selected file
    setNewUser({ ...newUser, profilePicture: selectedFile });
  };

  const saveUser = async () => {
    try {
      const formData = new FormData(); // Create a FormData object for file upload

      // Add other user data to the FormData (adjust based on your API requirements)
      formData.append('firstName', newUser.firstName);
      formData.append('lastName', newUser.lastName);
      formData.append('email', newUser.email);
      formData.append('phoneNumber', newUser.phoneNumber);
      formData.append('password', newUser.password);
      formData.append('confirmPassword', newUser.confirmPassword);
      formData.append('address', newUser.address);
      formData.append('dateOfBirth', newUser.dateOfBirth);
      // Append the profile picture file to the FormData
      formData.append('profilePicture', newUser.profilePicture);

      const response = await fetch('/api/golobe', {
        method: 'POST',
        body: formData, // Use FormData for file upload
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    validatePassword();
  };

  const validatePassword = () => {
    if (newUser.password !== newUser.confirmPassword) {
      document.getElementById("err").innerText = "Please enter the same password";
      document.getElementById('err').style.color = "red";
      setIsSame(false);
    } else {
      setIsSame(true);
      saveUser();
      navigate('/login');
      toast.success("User registered successfully");
    }
  };

  return (
    <div className='overflow-x-hidden typo'>
      <ToastContainer/>
      <div className="w-full p-28 flex gap-28 ml-72">
        <div className="w-[30%]">
            <SliderLogin/>
        </div>
        <div className="w-[30%]">
        <div className='mb-10'>
           <a href="/"><img src="./images/logo-black.png" alt="" /></a>
          </div>

          <div className='typo'>
            <form action="" onSubmit={ onSubmit}>
              <div className="flex flex-col gap-4">
                <h1 className="text-[40px] font-['Trade_Gothic_LT_Std'] font-semibold">Sign Up</h1>
                <p className="font-normal">
                Let’s get you all set up so you can access your personal account.
                </p>
              </div>
              <div className="mt-12 flex flex-col gap-6 ">
              <div className="w-full flex gap-6">
                    <div className='w-full'>
                    <Input onChange={handleProfilePictureChange} name='profilePicture' className="h-[50px]" variant="outlined" label="Profile Picture" type="file" />
                    </div>
                </div>
                <div className="w-full flex gap-6">
                    <div className='w-1/2'>
                    <Input onChange={handleChange} value={newUser.firstName} name='firstName' className="h-[50px]" variant="outlined" label="First Name" type="text" />
                    </div>
                  <div className='w-1/2'>
                  <Input className="h-[50px]" onChange={handleChange} value={newUser.lastName} name='lastName' variant="outlined" label="Last Name" type="text" />
                  </div>
                </div>
                <div className="w-full flex gap-6">
                    <div className='w-1/2'>
                    <Input className="h-[50px]" onChange={handleChange} value={newUser.email} name='email' variant="outlined" label="E-mail" type="email" />
                    </div>
                  <div className='w-1/2'>
                  <Input className="h-[50px]" onChange={handleChange} value={newUser.phoneNumber} name='phoneNumber' variant="outlined" label="Phone Number" type="text" maxLength={10}/>
                  </div>
                  </div>
                  <div className="w-full flex gap-6">
                    <div className='w-1/2'>
                    <Input className="h-[50px]" onChange={handleChange} value={newUser.address} name='address' variant="outlined" label="Address" type="text" />
                    </div>
                  <div className='w-1/2'>
                  <Input className="h-[50px]" onChange={handleChange} value={newUser.dateOfBirth} name='dateOfBirth' variant="outlined" label="Date of Birth" type="date" />
                  </div>
                  </div>
                  <div className="w-full">
                  <Input className="h-[50px]" onChange={handleChange} value={newUser.password} name='password' variant="outlined" label="Password" type="password" minLength={8}/>   
                    </div>
                    <div className="w-full flex gap-6 flex-col"> 
                  <Input className="h-[50px]" onChange={handleChange} name='confirmPassword' value={newUser.confirmPassword} variant="outlined" label="Confirm Password" type="password" minLength={8}/>
                  <p id="err"></p>
                    </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" required/>
                    <label className="font-normal" htmlFor="">
                    I agree to all the <span className='text-[#FF8682]'>Terms</span> and <span className='text-[#FF8682]'>Privacy Policies</span> 
                    </label>
                  </div>
                </div>
                <div className="w-full text-center">
                  <button type="submit" className="bg-[#8DD3BB] w-full py-5 rounded-md">Create account</button>
                </div>
                <div className="w-full text-center">
                  <p>
                    Already have an account?{" "}
                    <a href="/login" className="text-[#FF8682]">
                      Login
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-4 justify-center my-8">
                 <div className="w-[30%] border-b-[2px]"></div>
                  <p className="font-normal">Or Sign up with</p>
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
      </div>
    </div>
  )
}

export default SignUp
