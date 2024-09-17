'use client'
import React from 'react'
import { motion } from 'framer-motion'

const rowArray = [30, 40, 50]
const circleArray = [1, 2, 3, 4, 5, 6, 7]

const Dots = () => {
  return (
    <div className='flex flex-row items-end gap-3 md:gap-6 p-2 md:p-6'>
      {rowArray.map((item, outerIdx) => (
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 20,
              mass: 1,
              duration: 0.9,
              delay: 0.2 * outerIdx
            }
          }}
          exit={{
            opacity: 0,
            y: -50,
            transition: {
              duration: 0.5
            }
          }}
          viewport={{ once: false }}
          key={item}
          className='flex flex-col gap-4 md:gap-6'
        >
          {circleArray.map(item => (
            <div key={item} className='h-2 w-2 md:h-3 md:w-3 rounded-full bg-rose-500'></div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default Dots
