import React from 'react'

function Footer() {
  return (
    <div className='mt-72 relative'>
        <div className='flex justify-center'>
        <div className='absolute z-999 bottom-[320px] flex flex-row gap-32 bg-[#CDEAE1] w-[80%] px-10 rounded-xl'>
            <div className='flex flex-col gap-5 py-[24px] relative'>
            <div className='text-5xl typo w-[20%]'>
                <h1>Subscribe Newsletter</h1>
            </div>
            <div className='typo'>
                <h2 className='text-3xl'>The Travel</h2>
                <p className='font-medium'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
            </div>
            <div className='typo flex gap-4'>
                <input className='p-5 w-[35rem] rounded-xl' type="email" placeholder='Your email address'/>
                <button className='bg-black rounded-lg p-5 text-white'>Subscribe</button>
            </div>
            </div>
            <div className='absolute right-[2rem] bottom-0 '>
                <img src="./images/mailbox.png" alt="mailbox" />
            </div>
        </div>
        </div>
        
      <footer className='bg-[#8DD3BB] flex justify-between px-32 pt-44 pb-32'>
        <div className='flex flex-col gap-5'>
            <div>
            <img src="./images/footer-logo.png" alt="logo" />
            </div>
            <div className='flex gap-4'>
                <a href=""><img src="./images/facebook-black.png" alt="fb" /></a>
                <a href=""><img src="./images/twitter-black.png" alt="twitter" /></a>
                <a href=""><img src="./images/yt-black.png" alt="yt" /></a>
                <a href=""><img src="./images/instagram-black.png" alt="insta" /></a>
            </div>
        </div>
        <div className='typo'>   
            <div className='mb-3'>
            <h1 className='text-xl'>Our Destinations</h1>
            </div> 
            <div className='font-normal flex flex-col gap-2'>
            <p>Canada</p>
            <p>Alaksa</p>
            <p>France</p>
            <p>Iceland</p>
            </div>
        </div>
        <div className='typo'>
            <div className='mb-3'>
                <h1 className='text-xl'>Our Activities</h1>
            </div>
            <div className='font-normal flex flex-col gap-2'>
            <p>Nothern Lights</p>
            <p>Cruising and Sailing</p>
            <p>Multi-activities</p>
            <p>Kayaing</p>
            </div>
        </div>
        <div className='typo'>
            <div className='mb-3'>
            <h1 className='text-xl'>Travel Blogs</h1>
            </div>    
            <div className='font-normal flex flex-col gap-2'>
            <p>Bali Travel Guides</p>
            <p>Sri Lanka Travel Guides</p>
            <p>Peru Travel Guides</p>
            </div>  
        </div>
        <div className='typo'>  
            <div className='mb-3'>
            <h1 className='text-xl'>About Us</h1>
            </div>
            <div className='font-normal flex flex-col gap-2'>
            <a href="#">Our Story</a>
            <a href="">Work with us</a>
            </div>
        </div>
        <div className='typo'>
            <div className='mb-3'>
            <h1 className='text-xl'>Contact Us</h1>
            </div>
            <div className='font-normal flex flex-col gap-2'>
            <a href="#">Our Story</a>
            <a href="">Work with us</a>
            </div> 
        </div>
      </footer>
    </div>
  )
}

export default Footer
