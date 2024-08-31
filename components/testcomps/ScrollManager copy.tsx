'use client'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { ScrollControlsState } from '@react-three/drei'
type ExtendedScrollControlsState = ScrollControlsState & {
  scroll: {
    current: number
  }
}

// UNFINISHED: Find a better solution for the scrolling

export const ScrollManager = (props: any) => {
  const { section, setSection } = props
  const data = useScroll() as ExtendedScrollControlsState // provides data on scroll and access to container element
  const lastScroll = useRef(0) // ref to prevent re render
  const isAnimating = useRef(false) // used to prevent changes while animating

  // Fix for potential css issue from useScroll
  data.fill.classList.add('top-0')
  data.fill.classList.add('absolute')

  console.log('data', data)

  useEffect(() => {
    // gsap for smooth animation
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true
      },
      onComplete: () => {
        isAnimating.current = false
      }
    })
  }, [section])

  useFrame(() => {
    // Prevent anything hapepening if animating but continue to update lastScroll
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current
      return
    }

    const currentSection = parseFloat(data.scroll.current.toFixed(2))

    // This is a very janky solution
    // float values are data.scroll.current for just after (down) / before (up) where each section is
    if (lastScroll.current < data.scroll.current) {
      // if going down
      if (currentSection === 0.01) {
        setSection(1)
      } else if (currentSection === 0.35) {
        setSection(2)
      } else if (currentSection === 0.68) {
        setSection(3)
      }
    }

    if (lastScroll.current > data.scroll.current) {
      // if going up
      if (currentSection === 0.32) {
        setSection(0)
      } else if (currentSection === 0.65) {
        setSection(1)
      } else if (currentSection === 0.97) {
        setSection(2)
      }
    }

    lastScroll.current = data.scroll.current
  })

  return null
}
