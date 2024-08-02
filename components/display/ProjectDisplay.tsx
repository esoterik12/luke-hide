'use client'
import { Image, Text } from '@react-three/drei'
import { useTheme } from 'next-themes'

type ProjectProps = {
  id: number
  title: string
  url: string
  image: string
  description: string
}

const ProjectDisplay = ({
  id,
  title,
  url,
  image,
  description
}: ProjectProps) => {
  const { theme } = useTheme()

  return (
    <group>
      {/* Acts as a frame around the image (behind) */}
      <mesh position={[-0.6, 0.4, -0.04]}>
        <planeGeometry args={[6.4, 3.4]} />
        <meshBasicMaterial
          color={theme === 'light' ? 'black' : 'white'}
          transparent
          opacity={0.05}
        />
      </mesh>

      {/* Display of project image */}
      <Image
        scale={[6, 3.1]}
        url={image}
        toneMapped={false}
        position={[-0.6, 0.4, 0]}
      />

      {/* Display of project title - below image */}
      <Text
        position={[-0.6, -1.55, 0.1]}
        maxWidth={4}
        fontSize={0.3}
        color={theme === 'light' ? 'black' : 'white'}
        anchorX='center'
        anchorY='middle'
        textAlign='center'
        
      >
        {title}
      </Text>

      {/* Display of project description - below image + title */}
      <Text
        position={[-0.46, -1.75, 0.8]}
        fontSize={0.2}
        color={theme === 'light' ? 'black' : 'white'}
        anchorX='center'
        anchorY='middle'
        maxWidth={8}
        textAlign='center'
      >
        {description}
      </Text>
    </group>
  )
}

export default ProjectDisplay
