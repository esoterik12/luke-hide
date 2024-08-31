'use client'
import { Canvas } from '@react-three/fiber'
import { ACESFilmicToneMapping } from 'three'
import { Lightformer, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function ThreeCanvasComp({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='absolute h-full -z-10 w-full'>
      <Canvas
        resize={{ scroll: false }} // Stops rerender
        flat
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping
        }}
        camera={{
          fov: 45,
          zoom: 0.7,
          near: 0.1,
          far: 200,
          position: [0.8, 1.5, 6.6]
        }}
      >
        <>
          {/* <Perf position='bottom-left' /> */}

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
          {children}
        </>
      </Canvas>
    </main>
  )
}
