'use client'
import React from 'react'
import { motion } from 'framer-motion'

const rowArray = [30, 40, 50]
const circleArray = [1, 2, 3, 4, 5, 6, 7]

const Dots = () => {
  return (
    <motion.div className='flex flex-row items-end gap-8 p-6'>
      {rowArray.map(item => (
        <div key={item} className='flex flex-col gap-10'>
          {circleArray.map(item => (
            <div key={item} className='h-4 w-4 rounded-full bg-red-300'></div>
          ))}
        </div>
      ))}
    </motion.div>
  )
}

export default Dots
