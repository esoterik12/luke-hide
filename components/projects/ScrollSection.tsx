'use client'
import { motion } from 'framer-motion'

const ScrollSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className='mx-auto flex min-h-screen pt-12 flex-col items-center justify-center'
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.3
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
    >
      {children}
    </motion.section>
  )
}

export default ScrollSection
