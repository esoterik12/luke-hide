import { motion } from 'framer-motion'
import ProjectCardTest from '../display/ProjectCardTest'
import { SetStateAction } from 'react'

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className='mx-auto flex h-screen w-screen max-w-screen-2xl flex-col items-center justify-center p-8'
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
    >
      {children}
    </motion.section>
  )
}

// UNFINISHED - temporary any type
export const Interface = ({
  projects,
  setSection
}: {
  projects: any
  setSection: React.Dispatch<SetStateAction<number>>
}) => {
  return (
    <div className='flex w-screen flex-col items-center'>
      <Section>
        <h1 className='text-4xl font-bold text-gray-500'>Projects</h1>
        <br />
        <span className='text-lg text-gray-600'>My Work</span>
        <motion.ul
          className='mt-4 space-y-4'
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Create a summary here - with links if possible that use setSection? */}
          {/* Working - UNFINISHED */}
          <li onClick={() => setSection(1)}>
            <h3 className='text-xl font-semibold text-gray-500'>
              Project 1: Portfolio Website
            </h3>
            <p className='text-gray-500'>A personal portfolio website</p>
          </li>
          <li onClick={() => setSection(2)}>
            <h3 className='text-xl font-semibold text-gray-500'>
              Project 2: E-commerce Store
            </h3>
            <p className='text-gray-500'>An online store</p>
          </li>
        </motion.ul>
      </Section>

      {/* UNFINISHED: any type */}
      {projects.map((project: any) => (
        <Section key={project.id}>
          <ProjectCardTest
            title={project.title}
            image={project.image}
            url={project.url}
            techStack={project.tech}
            description={project.description}
            features={project.features}
            repo={project.repo}
          />
        </Section>
      ))}
    </div>
  )
}
