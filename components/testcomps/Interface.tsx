import { motion } from 'framer-motion'
import ProjectCardTest from '../display/ProjectCardTest'
import { SetStateAction } from 'react'
import SelectIcon from '../icons/SelectIcon'
import { MergedProject, Tech } from '@/lib/types/types'
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
  setSection,
  section
}: {
  projects: MergedProject[]
  setSection: React.Dispatch<SetStateAction<number>>
  section: number
}) => {
  return (
    <div className='flex w-screen flex-col items-center'>
      <Section>
        <h1 className='text-6xl font-bold text-gray-200'>Projects</h1>
        <br />
        <span className='mt-4 text-2xl text-gray-500'>My Work</span>

        <motion.div
          className='mt-4 gap-4 space-y-4'
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {projects.map((project, index) => (
            <div
              className='flex flex-col items-center hover:cursor-pointer'
              onClick={() => setSection(project.id)}
            >
              {/* Image and Title */}
              <div className='flex flex-row items-center text-center gap-3'>
                {index < 4 ? (
                  <Image
                    src={project.logo}
                    alt={`${project.title} - logo`}
                    width={35}
                    height={35}
                  />
                ) : (
                  <p className='ml-2 text-xl font-bold tracking-wide bg-gray-700 p-1 rounded-full text-white'>LH</p>
                )}

                <h3 className='text-2xl font-semibold text-gray-200 hover:text-red-300'>
                  {project.title}
                </h3>
              </div>
              {/* Description */} 
              <p className='text-xl text-gray-400  text-center '>{project.description}</p>
            </div>
          ))}
        </motion.div>
      </Section>

      {projects.map((project) => (
        <Section key={project.id}>
          <div className='flex flex-row'>
            {/* Left side selectors */}
            <div className='my-12 hidden md:flex flex-col justify-between p-6'>
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
            <div className='hidden md:flex flex-col justify-center'>
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
                  <p className='mt-1 text-xs font-semibold'>{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </div>
  )
}
