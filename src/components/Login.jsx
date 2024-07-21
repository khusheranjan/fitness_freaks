import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

    const {user, loginWithPopup, isAuthenticated, logout} = useAuth0();
  return (
    <div className='mr-4 mt-1'>
        {isAuthenticated && (
          <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-r from-[#FE6100] to-[#FBB002] rounded-full ">
              <img className='w-10 rounded-full' src={user.picture} />
         </div>)}
        {!isAuthenticated && (<button onClick={()=>{loginWithPopup()}} >Login</button>) }
    </div>
  )
}

export default Login