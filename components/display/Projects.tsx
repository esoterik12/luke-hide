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
      {/* Acts as an overlay over the image */}
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
        position={[-1.6, -1.2, 0.1]}
        maxWidth={4}
        fontSize={0.3}
        color={theme === 'light' ? 'black' : 'white'}
        anchorX='left'
        anchorY='top'
      >
        {title}
      </Text>

      {/* Display of project title - below image + title */}
      <Text
        position={[0, -1.2, 1]}
        fontSize={0.16}
        color={theme === 'light' ? 'black' : 'white'}
        anchorX='center'
        anchorY='middle'
        maxWidth={10}
        textAlign='center'
      >
        {description}
      </Text>
    </group>
  )
}

export default ProjectDisplay
