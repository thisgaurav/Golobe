import React from 'react'

function Profile(props) {
  return (
    <div>
      <div className='mb-44 relative flex justify-center items-end'>
      <div className="bg-[url('./images/cover1.jpg')] h-[350px] flex justify-end w-full items-end p-8 rounded-xl">
        {/* <img className='h-[450px] w-[1632px] rounded-xl relative' src="./images/cover1.jpg" alt="" /> */}
        <button className='flex items-center gap-2 bg-[#8DD3BB] rounded-md py-2 px-4 h-[50px]'>
            <img src="./images/Upload.png" alt="" />
            <p className='text-[14px] font-medium'>Upload new cover</p>
          </button>
          
      </div>
      <div className='flex flex-col justify-center items-center absolute top-[280px] z-[999] gap-5'>
        <div>
          <img className='w-[150px] h-[150px] border-[3px] border-[#FF8682] rounded-full' src={props.image} alt="" />
        </div>
        <div className='text-center'>
          <h1 className='text-[24px] font-semibold '>{props.name}</h1>
          <p className='text-[16px] font-normal'>{props.email}</p>
        </div>
        </div>
      </div>
      <div className="flex gap-10 w-full p-3 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] typo mb-10 rounded-2xl">
          <div className="w-[33%] border-r-[2px] p-2">
            <a href="/account"><h1 className="mb-2">Account</h1></a>
          </div>
          <div className="w-[33%] border-r-[2px] p-2">
            <a href="account-history"><h1 className="mb-2">History</h1></a>
          </div>
          <div className="w-[33%] p-2">
            <a href="/account-payment"><h1 className="mb-2">Payment methods</h1></a>
          </div>
        </div>
    </div>
  )
}

export default Profile
