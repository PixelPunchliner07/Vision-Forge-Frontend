import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
function Description() {
  return (
    <motion.div initial={{opacity:0.2 , y:100}} transition={{duration:2}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='flex flex-col items-center justify-center my-24 p-6'>
      <h1 className='text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>
      <div className='flex items-center justify-center gap-8 '>
        <img src={assets.sample_img_1} alt=""  className='w-80 rounded-lg'/>
        <div className='max-w-[490px]' >
            <h2 className='text-3xl mb-5'>Introducing the AI-Powered Text to Image Generator</h2>
            <p className='text-sm text-zinc-500 mb-4'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
            <p className='text-sm text-zinc-500 mb-4'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
