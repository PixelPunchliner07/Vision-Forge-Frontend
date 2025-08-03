import React from 'react'
import { assets } from '../assets/assets'
import logo from '../assets/favicon.svg'

function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <div className='flex gap-3 items-center '>
                  <img src={logo} alt="" className='w-10' />
                  <h1 className='text-2xl'> Vison Forge </h1>
        </div>
      <p className=' border-1 border-gray-400 px-4 text-sm text-gray-500 '> All right reserved. Copyright @visionforge </p>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} width={35} alt="" />
        <img src={assets.instagram_icon} width={35} alt="" />
        <img src={assets.twitter_icon} width={35} alt="" />
      </div>
    </div>
  )
}

export default Footer
