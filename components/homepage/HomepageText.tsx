'use client'
import { motion } from 'framer-motion'
import Socials from '../shared/Socials'
import Link from 'next/link'
import { HomepageTextProps } from '@/lib/types/types'
import { Locale } from '@/i18n.config'

// Unfinished any type
const HomepageText = ({
  homepage,
  lang
}: {
  homepage: HomepageTextProps
  lang: Locale
}) => {
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
        {homepage.title}<span className='text-blue-400'>.</span>
      </h1>
      <h2 className='custom-subheader mb-4 font-black'>{homepage.subtitle}</h2>
      <h2 className='text-lg mb-4 font-mono font-semibold'>
        {homepage.lineOne}
        <span className='text-rose-500'>&nbsp;{homepage.lineOneHighlight}</span>
        .
      </h2>
      <h2 className='text-lgmb-4 font-mono font-semibold'>
        {homepage.lineTwo}
      </h2>
      <Socials />
      <div className='flex flex-col gap-x-4 md:flex-row'>
        <Link href={`/${lang}/resume`} className='mt-4'>
          <div className='custom-hover-effect w-44 rounded-xl bg-blue-400 py-4'>
            <p className='custom-text text-center font-bold text-white'>
              {homepage.resumeButton}
            </p>
          </div>
        </Link>
        <Link href={`/${lang}/projects`} className='mt-4'>
          <div className='custom-hover-effect w-44 rounded-xl bg-blue-400 py-4'>
            <p className='custom-text text-center font-bold text-white'>
              {homepage.projectsButton}
            </p>
          </div>
        </Link>
        <Link href={`/${lang}/contact`} className='mt-4'>
          <div className='custom-hover-effect w-44 rounded-xl bg-blue-400 py-4'>
            <p className='custom-text text-center font-bold text-white'>
              {homepage.contactButton}
            </p>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export default HomepageText
