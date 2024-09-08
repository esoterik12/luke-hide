'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MergedProject, ProjectsLanding } from '@/lib/types/types'

const ProjectPageLanding = ({
  projectsLanding,
  projects
}: {
  projectsLanding: ProjectsLanding
  projects: MergedProject[]
}) => {
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
          duration: 0.5,
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
      className='flex min-h-screen flex-col items-center justify-center'
    >
      <h1 className='custom-header font-bold dark:text-gray-200'>
        {projectsLanding.title}
      </h1>
      <span className='custom-subheader mt-4 dark:text-gray-500'>
        {projectsLanding.subtitle}
      </span>

      <motion.div
        className='mt-4 gap-4 space-y-4'
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className='flex flex-col items-center hover:cursor-pointer'
          >
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

              <h3 className='custom-subheader font-semibold transition-colors duration-300 hover:text-red-300 dark:text-gray-200 dark:hover:text-red-300 md:text-2xl'>
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
    </motion.section>
  )
}

export default ProjectPageLanding
