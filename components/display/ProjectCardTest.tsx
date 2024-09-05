'use client'
import React from 'react'
import SelectIcon from '../icons/SelectIcon'
import Image from 'next/image'
import Link from 'next/link'

type ProjectTechStackProps = {
  name: string
  icon: string
}

type ProjectCardProps = {
  title: string
  image: string
  url: string
  techStack: ProjectTechStackProps[]
  description: string
  features: string[]
  repo: string
}

const ProjectCardTest = ({
  title,
  image,
  url,
  techStack,
  description,
  features,
  repo
}: ProjectCardProps) => {
  return (
    <main className='relative flex w-full flex-col md:w-[740px] md:px-0'>
      {/* Background  */}
      <div className='absolute -z-10 h-full w-full rounded-xl bg-gray-100 opacity-70 shadow-lg dark:bg-gray-800'></div>

      {/* Top Title + Tech Section */}
      <section className='flex flex-col items-center mt-2 text-center'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='text-md dark:text-gray-400 md:text-lg'>{description}</p>

        {/* Tech stack visible for mobile only */}
        <div className='mt-2 flex flex-row items-center gap-2 md:hidden'>
          {techStack.map(item => (
            <SelectIcon
              key={item.name}
              iconClasses='w-8 h-8'
              iconSelection={item.name}
            />
          ))}
        </div>
      </section>

      <section className='flex flex-col md:flex-row md:gap-x-4'>
        {/* Left Side Image / Link Container */}
        <div className='mt-4 flex transform flex-row items-center justify-center md:w-2/3'>
          <Link href={url}>
            <Image
              src={image}
              alt={`${title} image`}
              width={550}
              height={400}
              className='rounded-2xl p-2 shadow md:ml-6'
            />
          </Link>
        </div>

        {/* Right Side Features Container */}
        <div className='md:p-x-12 flex w-full flex-col justify-center px-6 pt-4 text-left md:w-1/3'>
          <ul className='text-md list-inside list-disc'>
            {features.map((item, index) => (
              <li className='custom-small-text' key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom Github link */}
      <section className='mt-2 mb-4 flex flex-row justify-center'>
        <Link href={repo} className='flex transform flex-row gap-2'>
          <SelectIcon
            iconClasses='h-6 w-6 text-gray-500 dark:text-gray-300'
            iconSelection='github'
          />
          <p className='custom-transition-class text-gray-500 dark:text-gray-300'>
            Repository
          </p>
        </Link>
      </section>
    </main>
  )
}

export default ProjectCardTest
