import React from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
function Header() {
  const {user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler =()=>{
    if(user){
        navigate('/result')
    }
    else{
      setShowLogin(true);
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center my-20' initial={{opacity:0.2 , y:100}} transition={{duration:2}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      <motion.div className='text-stone-500 bg-white rounded-full inline-flex py-2 px-6 border-2' initial={{opacity:0 , y:-20}} transition={{delay:0.2,duration:0.8}} animate={{opacity:1,y:0}} viewport={{once:true}} >
        <p>Best text to image generator </p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1 initial={{opacity:0 }} animate={{opacity:1}} transition={{delay:0.4,duration:2}} className='max-w-[300px] text-[38px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600'>image</span>,in seconds. </motion.h1>

      <motion.p initial={{opacity:0.2 , y:20}}  animate={{opacity:1,y:0}} transition={{delay:0.6,duration:0.8}} className='text-center mx-auto mt-5 max-w-xl'>
        Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.
      </motion.p>

      <motion.button onClick={onClickHandler} whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0 }}  animate={{opacity:1}} transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1}}} className='flex bg-zinc-900 text-white items-center rounded-full px-8 py-3 mx-auto mt-5 gap-4 text-lg'>Generate Images <img src={assets.star_group} className='max-w-9' alt="" /></motion.button>

      <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{delay:1,duration:1}} className='flex flex-wrap mt-16 justify-center gap-3'>
        {
            Array(6).fill('').map((item , index)=>(
                <motion.img whileHover={{scale:1.05,duration:0.1}} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-w-30' src={index%2==0 ? assets.sample_img_1 : assets.sample_img_2} key={index} width={70} alt=""  />
            ))
        }
      </motion.div>
      <motion.p initial={{opacity:0 }} animate={{opacity:1}} transition={{delay:1.2,duration:0.8}} className='mt-[16px] text-center mx-auto text-[20px] text-zinc-600'>Generated images from Vision Forge</motion.p>
    </motion.div>
  )
}

export default Header
