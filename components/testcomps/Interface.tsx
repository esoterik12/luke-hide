"use"
import { motion } from 'framer-motion'
import ProjectCardTest from '../display/ProjectCardTest'
import { SetStateAction } from 'react'
import SelectIcon from '../icons/SelectIcon'
import { MergedProject, ProjectsLanding, Tech } from '@/lib/types/types'
import Image from 'next/image'

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className='mx-auto flex h-screen w-screen max-w-screen-2xl flex-col items-center justify-center p-3 md:p-8'
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

// UNFINISHED - temporary any type
export const Interface = ({
  projects,
  projectsLanding,
  setSection,
  section,
}: {
  projects: MergedProject[]
  projectsLanding: ProjectsLanding
  setSection: React.Dispatch<SetStateAction<number>>
  section: number
}) => {
  return (
    <div className='flex w-screen flex-col items-center'>
      <Section>
        <h1 className='text-6xl font-bold dark:text-gray-200'>
          {projectsLanding.title}
        </h1>
        <br />
        <span className='mt-4 text-2xl dark:text-gray-500'>
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
              onClick={() => setSection(project.id)}
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

                <h3 className='text-xl font-semibold transition-colors duration-300 hover:text-red-300 dark:hover:text-red-300 dark:text-gray-200 md:text-2xl'>
                  {project.title}
                </h3>
              </div>
              {/* Description */}
              <p className='text-center text-lg text-gray-600 dark:text-gray-400 md:text-xl'>
                {project.description}
              </p>
            </div>
          ))}
        </motion.div>
      </Section>

      {projects.map(project => (
        <Section key={project.id}>
          <div className='flex flex-row'>
            {/* Left side selectors */}
            <div className='my-12 hidden flex-col justify-between p-6 md:flex'>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSection(project.id)}
                  className={`h-6 w-6 rounded-full border shadow-lg hover:cursor-pointer hover:bg-red-100`}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.3,
                    backgroundColor: '#fccaca',
                    duration: 0.01
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    mass: 1,
                    duration: 0.1,
                    delay: 0.1 + index * 0.1
                  }}
                  animate={{
                    backgroundColor:
                      section === project.id ? '#FCA5A5' : 'rgba(0, 0, 0, 0)'
                  }}
                ></motion.div>
              ))}
            </div>

            {/* Main Project Card */}
            <ProjectCardTest
              title={project.title}
              image={project.image}
              url={project.url}
              techStack={project.tech}
              description={project.description}
              features={project.features}
              repo={project.repo}
            />

            {/* Tech right side animation */}
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
                  className='flex flex-col items-center justify-center p-4'
                >
                  <SelectIcon iconClasses='w-9 h-9' iconSelection={item.name} />
                  <p className='mt-1 text-sm font-semibold'>{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </div>
  )
}
