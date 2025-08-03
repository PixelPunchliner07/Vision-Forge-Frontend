import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"
function Testimonials() {
  return (
    <motion.div  initial={{opacity:0.2 , y:100}} transition={{duration:2}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='flex flex-col items-center justify-center my-24 p-6'>
      <h1 className='text-4xl font-semibold mb-2'>Customer testimonials</h1>
      <p className='text-gray-500 mb-8 text-sm'>What Our Users Are Saying</p>

      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((testimonial,index)=>(
            <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all' >
                <div className='flex flex-col items-center justify-center'>
                  <img src={testimonial.image} alt=""  className='rounded-full w-14'/>
                <h2 className='text-2xl'>{testimonial.name}</h2>
                <p className='text-sm text-gray-500'>{testimonial.role}</p>
                <div className='flex mb-4'>
                    {Array(testimonial.stars).fill().map((item,index)=>(
                        <img key={index} src={assets.rating_star} alt="" />
                    ))}
                </div>
                <p>{testimonial.text}</p>
                </div>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
