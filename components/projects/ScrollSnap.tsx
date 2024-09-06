// depends on locomotive-scroll.css imported into globals.css
'use client'
import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { MergedProject, ProjectsLanding, Tech } from '@/lib/types/types'
import { motion } from 'framer-motion'
import SelectIcon from '../icons/SelectIcon'
import ProjectCardTest from '../display/ProjectCardTest'
import Image from 'next/image'

const ScrollSnap = ({
  projects,
  projectsLanding
}: {
  projects: MergedProject[]
  projectsLanding: ProjectsLanding
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    const scroll: any = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // may require smoothMobile
      getDirection: true,
      // inertia: 0.65,
      class: 'in-view'
    })

    const snapToSection = (direction: number) => {
      // creates array of all sections
      const sections = document.querySelectorAll('.section')
      console.log('sections', sections)

      // instance object contains scroll, limit, delta
      const currentScroll = scroll.scroll.instance.scroll.y

      let nextSection: HTMLElement | null = null
      let minDistance = Infinity

      // unfinished: any type
      sections.forEach(section => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop
          const distance = Math.abs(currentScroll - sectionTop)

          if (distance < minDistance) {
            minDistance = distance
            nextSection = section
          }
        }
      })

      if (nextSection) {
        const currentIndex = Array.from(sections).indexOf(nextSection)
        const targetIndex =
          direction === 1 ? currentIndex + 1 : currentIndex - 1

        // Make sure the target index is valid
        if (targetIndex >= 0 && targetIndex < sections.length) {
          scroll.scrollTo(sections[targetIndex], { offset: 0, duration: 600 })
        }
      }
    }

    // Event listener for wheel event to detect scroll direction
    const handleScroll = (event: WheelEvent) => {
      const direction = event.deltaY > 0 ? 1 : -1 // Scroll down (1) or scroll up (-1)
      snapToSection(direction)
    }

    window.addEventListener('wheel', handleScroll)

    // Cleanup on unmount
    return () => {
      scroll.destroy()
      window.removeEventListener('wheel', handleScroll)
    }
  }, [document])

  return (
    <div className='scroll-container' ref={scrollRef}>
      <motion.section
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.3
          }
        }}
        exit={{
          opacity: 0,
          y: -50,
          transition: {
            duration: 0.5
          }
        }}
        viewport={{ once: false }}
        className='section flex h-screen flex-col items-center justify-center'
      >
        <h1 className='custom-header font-bold dark:text-gray-200'>
          {projectsLanding.title}
        </h1>
        <br />
        <span className='custom-subheader mt-4 dark:text-gray-500'>
          {projectsLanding.subtitle}
        </span>

        <motion.div
          className='mt-4 gap-4 space-y-4'
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className='flex flex-col items-center hover:cursor-pointer'
              // onClick={() => setSection(project.id)}
            >
              {/* Image and Title */}
              <div className='flex flex-row items-center gap-3 text-center'>
                {index < 4 ? (
                  <Image
                    src={project.logo}
                    alt={`${project.title} - logo`}
                    width={35}
                    height={35}
                  />
                ) : (
                  <p className='ml-2 rounded-full bg-gray-700 p-1 text-xl font-bold tracking-wide text-white'>
                    LH
                  </p>
                )}

                <h3 className='custom-subheader font-semibold transition-colors duration-300 hover:text-red-300 dark:text-gray-200 dark:hover:text-red-300 md:text-2xl'>
                  {project.title}
                </h3>
              </div>
              {/* Description */}
              <p className='custom-small-text text-center text-gray-600 dark:text-gray-400'>
                {project.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {projects.map(project => (
        <div
          key={project.id}
          className='section flex h-screen items-center justify-center'
        >
          {/* Left side selectors */}
          <div className='my-12 hidden flex-col justify-between px-6 md:flex'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                // onClick={() => setSection(project.id)}
                className={`h-6 w-6 rounded-full border shadow-lg hover:cursor-pointer hover:bg-red-100`}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.3,
                  backgroundColor: '#fccaca',
                  duration: 0.01
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  duration: 0.1,
                  delay: 0.1 + index * 0.1
                }}
                // animate={{
                //   backgroundColor:
                //     section === project.id ? '#FCA5A5' : 'rgba(0, 0, 0, 0)'
                // }}
              ></motion.div>
            ))}
          </div>

          {/* Main Project Card */}
          <ProjectCardTest
            title={project.title}
            image={project.image}
            url={project.url}
            techStack={project.tech}
            description={project.description}
            features={project.features}
            repo={project.repo}
          />

          {/* Tech right side tech MD+ screens only */}
          {/* Only visible on md+ // Alternative for sm is in the Project comp */}
          <div className='hidden flex-col justify-center md:flex'>
            {project.tech.map((item: Tech, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  duration: 0.3,
                  delay: 0.1 + index * 0.1
                }} // consider staggerChildren instead of delay
                key={item.name}
                className='flex flex-col items-center justify-center p-3'
              >
                <SelectIcon iconClasses='w-7 h-7' iconSelection={item.name} />
                <p className='mt-1 text-sm font-semibold'>{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ScrollSnap
