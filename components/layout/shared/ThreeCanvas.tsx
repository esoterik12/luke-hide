'use client'
import { Canvas } from '@react-three/fiber'
import { ACESFilmicToneMapping } from 'three'
import { OrbitControls, Lightformer, Environment } from '@react-three/drei'
import ThreeBackground from './ThreeBackground'

export default function ThreeCanvasComp() {
  return (
    <main className='absolute -z-10 h-full w-full'>
      <Canvas
        flat
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping
        }}
        camera={{
          fov: 45,
          zoom: 1,
          near: 0.1,
          far: 200,
          position: [3, 2, 6]
        }}
      >
        <>
          <OrbitControls makeDefault />
          <directionalLight position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <Environment>
            <color args={['#00000f']} attach='background' />
            <Lightformer
              position-z={-5}
              scale={10}
              color='red'
              intensity={1}
              form='ring'
            />
          </Environment>
          <ThreeBackground />
        </>
      </Canvas>
    </main>
  )
}
