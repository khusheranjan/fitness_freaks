import React from 'react'
import Login from './Login'
import logo from '/logos.svg'

const Navbar = () => {
  return (
    <div className=''>
        <div className="navbar text-white bg-black">
            <div className="navbar-start">

                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>About</a></li>
                    <li><a>Features</a></li>
                </ul>
                </div>
                <img className='w-12 ml-2 ' src={logo} alt="" />
                <a className="btn btn-ghost py-1 text-2xl hidden lg:block">Fitness Freaks</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>About</a></li>
                <li><a>Features</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Login />
            </div>
            </div>
    </div>
  )
}

export default Navbar