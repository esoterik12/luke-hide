'use client'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Interface } from './Interface'
import { useState } from 'react'
import { ScrollManager } from './ScrollManager'
import { MergedProject, ProjectsLanding } from '@/lib/types/types'

export default function TestTwoCanvas({
  projects,
  projectsLanding
}: {
  projects: MergedProject[]
  projectsLanding: ProjectsLanding
}) {
  const [section, setSection] = useState(0)

  return (
    <main className='absolute -z-10 h-full w-full'>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 90 }}>
        <ScrollControls pages={6} damping={0.1}>
          <ScrollManager section={section} setSection={setSection} />
          <Scroll html>
            <Interface
              projects={projects}
              projectsLanding={projectsLanding}
              setSection={setSection}
              section={section}
            />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  )
}
