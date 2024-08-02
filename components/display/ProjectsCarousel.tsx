'use client'
import { projectsArray } from '@/lib/constants/projects'
import { useThree } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import ProjectDisplay from './ProjectDisplay'
import { useAppContext } from '@/lib/context/AppContext'

const ProjectsCarousel = ({
  projects
}: {
  projects: { title: string; description: string }[]
}) => {
  const { currentProject } = useAppContext()

  const mergedArray = projectsArray.map((item, index) => {
    return { ...item, ...projects[index] }
  })

  return (
    <group position={[currentProject * 0.3, 0, 0]}>
      {mergedArray.map((project, index) => (
        <motion.group
          key={project.id}
          initial={{
            x: index * 8.1,
            y: -0.3,
            z: -0.6
          }}
          animate={{
            x: (index - currentProject) * 8.1,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -0.6 : -3
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
        >
          <ProjectDisplay
            id={project.id}
            title={project.title}
            url={project.url}
            image={project.image}
            description={project.description}
          />
        </motion.group>
      ))}
    </group>
  )
}

export default ProjectsCarousel
