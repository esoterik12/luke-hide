'use client'

import { Scroll, ScrollControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import { Particles } from '../elements/Particles'
import ProjectCardTest from '../display/ProjectCardTest'
import { Html } from '@react-three/drei'

function ThreeBackgroundScroll() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
    camera.position.y = MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
    camera.position.z = MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    )
    camera.rotation.y = MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    )
  })

  return (
    <ScrollControls pages={3}>
      <Scroll>
        <Particles />
      </Scroll>
      <Scroll html>
        <section className='flex w-[100vw]  gap-y-24 flex-col items-center'>
          <ProjectCardTest
            title='Next Chinese'
            image='/images/next-chinese-flashcard.png'
            url='https://next-chinese.vercel.app/'
            techStack={[
              { name: 'NextJS', icon: 'NextJS' },
              { name: 'React', icon: 'React' },
              { name: 'TypeScript', icon: 'TypeScript' },
              { name: 'Tailwind', icon: 'Tailwind' },
              { name: 'MongoDB', icon: 'MongoDB' }
            ]}
            description='Traditional Mandarin flashcard app with 8,000 words and sentence generation.'
            features={[
              'ChatGPT API generating context sentences & translations.',
              'Database updates depending on learning outcome.',
              'Database search.',
              'Clerk authentication.'
            ]}
            repo='https://github.com/esoterik12/social-app-skeleton'
          />
          <ProjectCardTest
            title='Next Chinese'
            image='/images/next-chinese-flashcard.png'
            url='https://next-chinese.vercel.app/'
            techStack={[
              { name: 'NextJS', icon: 'NextJS' },
              { name: 'React', icon: 'React' },
              { name: 'TypeScript', icon: 'TypeScript' },
              { name: 'Tailwind', icon: 'Tailwind' },
              { name: 'MongoDB', icon: 'MongoDB' }
            ]}
            description='Traditional Mandarin flashcard app with 8,000 words and sentence generation.'
            features={[
              'ChatGPT API generating context sentences & translations.',
              'Database updates depending on learning outcome.',
              'Database search.',
              'Clerk authentication.'
            ]}
            repo='https://github.com/esoterik12/social-app-skeleton'
          />
        </section>
      </Scroll>
    </ScrollControls>
  )
}

export { ThreeBackgroundScroll }
