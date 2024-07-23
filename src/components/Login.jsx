import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { user, loginWithPopup, isAuthenticated, logout } = useAuth0();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className='mr-4 mt-1 relative'>
      {isAuthenticated ? (
        <div>
          <div
            className="flex items-center justify-center w-11 h-11 bg-gradient-to-r from-[#FE6100] to-[#FBB002] rounded-full cursor-pointer"
            onClick={togglePopup}
          >
            <img className='w-10 rounded-full' src={user.picture} alt="user" />
          </div>
          {isPopupVisible && (
            <div className="absolute right-0 w-36 bg-black">
              <div className="p-4">
                <button
                  className="w-full px-4 py-2  bg-zinc-800 text-white border border-black rounded hover:bg-zinc-700"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button
          className='w-28 h-10 rounded-full bg-gradient-to-r from-[#FE6100] to-[#FBB002]'
          onClick={() => loginWithPopup()}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Login;
