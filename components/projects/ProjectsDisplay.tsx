'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MergedProject } from '@/lib/types/types'
import IconDownArrow from '../icons/IconDownArrow'
import ProjectCard from './ProjectCard'
import SelectIcon from '../icons/SelectIcon'
import { Tech } from '@/lib/types/types'

const ProjectsDisplay = ({
  projects
}: {
  projects: MergedProject[]
}) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const scrollToSection = (id: number) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleDetectScroll = () => {
      if (window.scrollY > 150) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleDetectScroll)
    return () => {
      window.removeEventListener('scroll', handleDetectScroll)
    }
  }, [])

  return (
    <>
      {/* Landing Summary Section */}
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
        className='flex min-h-screen flex-col items-center md:mt-0 md:justify-center'
      >
        <motion.div
          className='gap-4 space-y-4'
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
                  <button onClick={() => scrollToSection(project.id)}>
                    {project.title}
                  </button>
                </h3>
              </div>
              {/* Description */}
              <p className='custom-small-text text-center text-gray-600 dark:text-gray-400'>
                {project.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll arrow */}
        <div className='h-20'>
          <AnimatePresence>
            {!hasScrolled && (
              <motion.div
                className='mt-2 h-20 w-20 text-red-300 md:mt-2'
                initial={{ opacity: 1 }}
                animate={{
                  y: [0, -20, 0], // Move up and down
                  transition: { y: { repeat: Infinity, duration: 1.5 } } // Loop the animation
                }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }} // Fade out on scroll
              >
                <IconDownArrow classes='w-20 h-20 mt-2 md:mt-12' />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Individual Project Cards */}
      {projects.map((project, projectIndex) => (
        <div
          ref={el => {
            sectionRefs.current[project.id] = el // Assign the element to the ref object
          }}
          key={project.id}
          className='section flex h-screen items-center justify-center'
        >
          {/* Left side selectors */}
          <div className='my-12 hidden flex-col justify-between gap-y-6 px-6 md:flex'>
            {projects.map((project, index) => (
              <motion.div
                onClick={() => scrollToSection(project.id)}
                key={project.id}
                className={`${project.id === projectIndex + 1 ? 'bg-rose-500' : ''} custom-hover-effect h-6 w-6 rounded-full border shadow-lg hover:cursor-pointer`}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  duration: 0.1,
                  delay: 0.1 + index * 0.1
                }}
              ></motion.div>
            ))}
          </div>

          {/* Main Project Card */}
          <ProjectCard
            title={project.title}
            image={project.image}
            url={project.url}
            techStack={project.tech}
            description={project.description}
            features={project.features}
            repo={project.repo}
          />

          {/* Tech right side tech MD+ screens only */}
          {/* Only visible on md+ // Alternative for sm is in the Project comp */}
          <div className='hidden flex-col justify-center md:flex'>
            {project.tech.map((item: Tech, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  duration: 0.3,
                  delay: 0.1 + index * 0.1
                }} // consider staggerChildren instead of delay
                key={item.name}
                className='flex flex-col items-center justify-center p-3'
              >
                <SelectIcon iconClasses='w-7 h-7' iconSelection={item.name} />
                <p className='mt-1 text-sm font-semibold'>{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectsDisplay
