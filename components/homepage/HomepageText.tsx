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
      <h1 className='custom-header-large font-black text-gray-800 dark:text-white'>
        {homepage.title}
      </h1>
      <h2 className='mb-4 custom-subheader font-semibold text-blue-500 dark:text-blue-400'>
        {homepage.subtitle}
      </h2>
      <h2 className='mb-4 font-mono custom-text font-semibold'>
        {homepage.lineOne}
        <span className='text-red-500 dark:text-red-400'>
          &nbsp;{homepage.lineOneHighlight}
        </span>
        .
      </h2>
      <h2 className='mb-4 font-mono custom-text font-semibold'>
        {homepage.lineTwo}
      </h2>
      <Socials />
      <div className='flex flex-col md:flex-row gap-x-4'>
        <Link href='./resume' className='mt-4'>
          <div className='custom-hover-effect w-44 rounded-xl bg-blue-400 py-4'>
            <p className='text-center custom-text font-bold text-white'>
              {homepage.resumeButton}
            </p>
          </div>
        </Link>
        <Link href='./projects' className='mt-4'>
          <div className='custom-hover-effect w-44 rounded-xl bg-blue-400 py-4'>
            <p className='text-center custom-text font-bold text-white'>
              {homepage.projectsButton}
            </p>
          </div>
        </Link>
        <Link href='./contact' className='mt-4'>
          <div className='custom-hover-effect w-44 rounded-xl bg-blue-400 py-4'>
            <p className='text-center custom-text font-bold text-white'>
              {homepage.contactButton}
            </p>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export default HomepageText
