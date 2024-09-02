'use client'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Interface } from './Interface'
import { useState } from 'react'
import { ScrollManager } from './ScrollManager'
import { MergedProject } from '@/lib/types/types'

// UNFINISHED - temporary any type
export default function TestTwoCanvas({ projects }: { projects: MergedProject[] }) {
  const [section, setSection] = useState(0)

  return (
    <main className='absolute -z-10 h-full w-full'>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 90 }}>
        {/* <color attach='background' args={['#ececec']} /> */}
        <ScrollControls pages={6} damping={0.1}>
          <ScrollManager section={section} setSection={setSection} />
          <Scroll html>
            <Interface projects={projects} setSection={setSection} section={section} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  )
}
