'use client'
import { motion } from 'framer-motion'
import { MergedProject } from '@/lib/types/types'
import ProjectCard from './ProjectCard'
import SelectIcon from '../icons/SelectIcon'
import { Tech } from '@/lib/types/types'

const ProjectsScroll = ({ projects }: { projects: MergedProject[] }) => {
  return (
    <>
      {projects.map((project, projectIndex) => (
        <div
          key={project.id}
          className='section flex h-screen items-center justify-center'
        >
          {/* Left side selectors */}
          <div className='my-12 hidden flex-col gap-y-6 justify-between px-6 md:flex'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${project.id === projectIndex + 1 ? 'bg-red-300' : ''} custom-hover-effect h-6 w-6 rounded-full border shadow-lg hover:cursor-pointer`}
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

export default ProjectsScroll
