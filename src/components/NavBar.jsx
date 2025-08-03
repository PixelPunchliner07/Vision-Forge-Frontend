import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import logo from '../assets/favicon.svg'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function NavBar() {
    
    const navigate = useNavigate();
    const {user,setShowLogin,logout,credit} = useContext(AppContext);
  return (
    <div className='flex items-center justify-between'>
      <Link to={"/"}>
        <div className='flex gap-3 items-center '>
            <img src={logo} alt="" className='w-10' />
            <h1 className='text-3xl'> Vison Forge </h1>
        </div>
      </Link>
      <div>
            {
                user ?
                 <div className='flex gap-6 items-center'>
                    <div className='flex gap-2 items-center rounded-full bg-blue-100 px-3 py-2 hover:scale-105 transition-all duration-700 ' onClick={()=>navigate("/buy")}> 
                        <img src={assets.credit_star} alt="" />
                        <p> Credits left : {credit}</p>
                    </div>
                    <p>
                        Hi {user.name}
                    </p>
                    <div className='relative group' >
                        <img className='w-10' src={assets.profile_icon} alt="" />
                        <div className='hidden absolute group-hover:block top-0 right-0 z-10 text-black rounded pt-12 '>
                            <ul>
                                <li onClick={logout} className='bg-zinc-100 px-2'>Logout</li>
                            </ul>
                        </div>
                    </div>
                 </div>
                 : 
                 <div className='flex gap-10 sm:gap-5 items-center'>
                    <p onClick={()=> navigate('/buy')} className='cursor-pointer'>Pricing</p>
                    <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 px-7 py-[12px] rounded-full text-white'>Login</button>
                </div>
            }
      </div>
    </div>
  )
}

export default NavBar
