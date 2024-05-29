import React from 'react'
import '../component-styles/styles.css'
function Header() {
  return (
    <div className='flex justify-center sticky top-0 bg-white z-[9999]'>
      <nav className=' w-full flex px-20 py-6 justify-between items-center'>
        <div className='flex gap-9'>
          <div>
            <a className='flex gap-2 typo items-center text-center' href="/flight-search">
              <img src='./images/airplane.png' />
              <p>Find Flight</p>
            </a>
          </div>
          <div>
            <a href="/hotel-search" className='flex gap-2 items-center text-center typo'>
              <img src='./images/ion_bed.png' />
              <p>Find Stays</p>
            </a>
          </div>
        </div>
        <div className='flex items-center justify-center mt-3'>
          <a href="/"><img src="./images/logo-black.png" alt="logo" /></a>
        </div>
        <div className='flex gap-10'>
         <a href="/login" className='flex'><button className='typo'>Login</button></a> 
          <a href="/sign-up"><button className='typo bg-black text-white rounded-xl p-4'>Sign-Up</button></a>
        </div>
      </nav>
    </div>
  )
}

export default Header
