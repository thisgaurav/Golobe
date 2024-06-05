import {useState, useEffect} from 'react';
import '../component-styles/styles.css';
import axios from 'axios';
function Header() {
  const [details, setDetails] = useState({});
  const token = localStorage.getItem('token'); // Get token from localStorage

  useEffect(() => {
    if (token) { // Check if token exists before making API request
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/golobe/get-user',
        headers: {
          Authorization: `Bearer ${token.replace(/"/g, '')}`, // Remove quotes
        },
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setDetails(response.data.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]); // Re-run useEffect only when token changes

  return (
    <div className='flex justify-center sticky top-0 bg-white z-[9999]'>
      <nav className='w-full flex px-20 py-6 justify-between items-center'>
        <div className='flex gap-9'>
          {/* Navigation links */}
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
          {/* Logo */}
        </div>
        <div className='flex items-center justify-center mt-3'>
          <a href="/"><img src="./images/logo-black.png" alt="logo" /></a>
        </div>

        {/* Conditional rendering based on token existence */}
        {token ? (
          <div className="flex gap-10">
            <div className="flex gap-5 items-center">
              <a href="/favorites" className="border-r-[3px] border-[#000] pr-4">
                <img src="./images/Favorite.png" alt="" />
              </a>
              <div>
                <a href="/account" className="flex gap-2 items-center">
                  <img src={details.profilePicture} alt="" />
                  <p className="typo">{details.firstName} {details.lastName}</p>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex gap-10'>
            {/* Login/Signup buttons */}
            <a href="/login" className='flex'><button className='typo'>Login</button></a>
            <a href="/sign-up"><button className='typo bg-black text-white rounded-xl p-4'>Sign-Up</button></a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;