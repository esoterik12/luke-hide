'use client'
import { motion } from 'framer-motion'
import Socials from '../shared/Socials'
import Link from 'next/link'
import { HomepageTextProps } from '@/lib/types/types'

// Unfinished any type
const HomepageText = ({ homepage }: { homepage: HomepageTextProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 1,
        duration: 0.22
      }}
    >
      <h1 className='text-[72px] font-black text-gray-800 dark:text-white'>
        {homepage.title}
      </h1>
      <h2 className='mb-4 text-4xl font-semibold text-blue-500 dark:text-blue-400'>
        {homepage.subtitle}
      </h2>
      <h2 className='mb-4 font-mono text-2xl font-semibold'>
        {homepage.lineOne}
        <span className='text-red-500 dark:text-red-400'>
          &nbsp;{homepage.lineOneHighlight}
        </span>
        .
      </h2>
      <h2 className='mb-4 font-mono text-2xl font-semibold'>
        {homepage.lineTwo}
      </h2>
      <Socials />
      <div className='flex flex-row gap-x-6'>
        <Link href='./resume' className='mt-4'>
          <div className='custom-hover-effect w-44 rounded-xl bg-blue-400 py-6'>
            <p className='text-center text-xl font-bold text-white'>
              {homepage.resumeButton}
            </p>
          </div>
        </Link>
        <Link href='./projects' className='mt-4'>
          <div className='custom-hover-effect w-44 rounded-xl bg-blue-400 py-6'>
            <p className='text-center text-xl font-bold text-white'>
              {homepage.projectsButton}
            </p>
          </div>
        </Link>
        <Link href='./contact' className='mt-4'>
          <div className='custom-hover-effect w-44 rounded-xl bg-blue-400 py-6'>
            <p className='text-center text-xl font-bold text-white'>
              {homepage.contactButton}
            </p>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export default HomepageText
