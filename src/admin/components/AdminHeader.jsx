import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link, Navigate, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminHeader() {

    const [menuOpen, setMenuOpen] = useState(false);
    
      const [token, settoken] = useState("")
    
      const navigate = useNavigate();
    
      console.log(token);
    
      const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("");
        toast.success("Logged out successfully");
        navigate("/");
      };

     useEffect(() => {
    
        if (sessionStorage.getItem("token")) {
    
          const token = sessionStorage.getItem("token")
          settoken(token)
    
        }
    
    
      }, [])


    return (
        <>
            <div className="navbar flex justify-center my-8 px-4">
                <div className="nav flex bg-red-800 w-full text-white rounded-full h-20 items-center justify-between px-4 mx-auto max-w-6xl">

                    <div className="div"><h1 className="hidden">hi</h1></div>

                    {/* Desktop Nav */}
                    <div className="icons hidden md:flex items-center gap-x-8 text-sm md:text-base">
                        <Link to='/admin-home'><h1 className="cursor-pointer">Home</h1></Link>
                        <Link to='/admin-complaints'><h1 className="cursor-pointer">Complaints</h1></Link>
                        <div className="img"><img src="/images/Logo.png" alt="logo" className="w-12 h-12" /></div>
                        <Link to='/admin-careers'><h1 className="cursor-pointer">Careers</h1></Link>
                        {
                            !token ?
                                <Link to='/login'><h1 className="cursor-pointer">Login</h1></Link>
                                :
                                <>
                                    <Link to='/'><h1 className="cursor-pointer" onClick={handleLogout}>Logout</h1></Link>
                                </>
                        }

                        <Link to='/admin-settings'><h1 className="cursor-pointer">Settings</h1></Link>
                    </div>


                    {/* Mobile Logo */}
                    <img src="/images/Logo.png" alt="logo" className="w-16 h-16 md:hidden" />

                    {/* Hamburger */}
                    <FontAwesomeIcon
                        icon={faBars}
                        className="block md:hidden text-2xl text-black cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-red-800 text-white rounded-lg mx-4 p-4 space-y-2 text-center">
                    <Link to='/'><h1 className="cursor-pointer">Home</h1></Link>
                    <Link to='/admin-complaints'><h1 className="cursor-pointer">Complaints</h1></Link>
                    <Link to='/admin-careers'><h1 className="cursor-pointer">Careers</h1></Link>
                    {
                        !token ?
                            <Link to='/login'><h1 className="cursor-pointer">Login</h1></Link>
                            :
                            <>

                                <Link to='/'><h1 className="cursor-pointer " onClick={handleLogout}>Logout</h1></Link>

                            </>
                    }
                    <Link to='/admin-settings'><h1 className="cursor-pointer">Settings</h1></Link>


                </div>
            )}

            <marquee behavior="" direction="left" className="p-3 bg-gray-900 text-white">
                <p>Welcome, [Admin]! You're all set to manage and monitor the system. Let's get to work!</p>
            </marquee>


<ToastContainer theme="colored" position="top-center" autoClose={2000} />
        </>
    )
}

export default AdminHeader