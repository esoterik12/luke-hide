'use client'
import { projectsArray } from '@/lib/constants/projects'
import { useThree } from '@react-three/fiber'
import { motion } from 'framer-motion'
import ProjectDisplay from './Projects'

const ProjectsCarousel = () => {
  const { viewport } = useThree()

  return (
    <group position-y={-viewport.height + 6}>
      {projectsArray.map((project, index) => (
        <motion.group key={project.id} position={[index * 7, 0, -0.6]}>
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
