'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MergedProject } from '@/lib/types/types'
import IconDownArrow from '../icons/IconDownArrow'

const ProjectPageLanding = ({
  projects
}: {
  projects: MergedProject[]
}) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleDetectScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleDetectScroll)
    return () => {
      window.removeEventListener('scroll', handleDetectScroll)
    }
  }, [])

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
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
      className='mt-12 flex min-h-screen flex-col items-center md:mt-0 md:justify-center'
    >

      <motion.div
        className='mt-4 gap-4 space-y-4'
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {projects.map((project, index) => (
          <div key={project.id} className='flex flex-col items-center'>
            {/* Image and Title */}
            <div className='flex flex-row items-center gap-3 text-center'>
              {index < 4 ? (
                <Image
                  src={project.logo}
                  alt={`${project.title} - logo`}
                  width={35}
                  height={35}
                />
              ) : (
                <p className='ml-2 rounded-full bg-gray-700 p-1 text-xl font-bold tracking-wide text-white'>
                  LH
                </p>
              )}

              <h3 className='custom-subheader font-semibold md:text-2xl'>
                {project.title}
              </h3>
            </div>
            {/* Description */}
            <p className='custom-small-text text-center text-gray-600 dark:text-gray-400'>
              {project.description}
            </p>
          </div>
        ))}
      </motion.div>
      <AnimatePresence>
        {!hasScrolled && (
          <motion.div
            className='mt-2 h-20 w-20 text-red-300 md:mt-12'
            initial={{ opacity: 1 }}
            animate={{
              y: [0, -20, 0], // Move up and down
              transition: { y: { repeat: Infinity, duration: 1.5 } } // Loop the animation
            }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }} // Fade out on scroll
          >
            <IconDownArrow classes='w-20 h-20 mt-2 md:mt-12 text-red-300' />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default ProjectPageLanding
