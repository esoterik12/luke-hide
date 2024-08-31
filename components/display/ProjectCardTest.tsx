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
    <main className='relative flex w-full flex-col md:w-[760px] md:px-0'>
      {/* Top Title + Tech Section */}
      <div className='absolute -z-10 h-full w-full rounded-xl bg-gray-800 opacity-70'></div>
      <section className='flex flex-col justify-between gap-x-4 p-2 md:flex-row'>
        <div>
          <h2 className='text-left text-3xl font-bold'>{title}</h2>
          <p className='mr-8 text-left'>{description}</p>
        </div>
        <div className='flex flex-row gap-x-6'>
          {techStack.map((item: ProjectTechStackProps) => (
            <div
              key={item.name}
              className='mt-4 flex flex-col items-center md:mt-0'
            >
              <SelectIcon iconClasses='w-9 h-9' iconSelection={item.name} />
              <p className='mt-1 text-xs font-semibold'>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-8 flex flex-col md:flex-row md:gap-x-4'>
        {/* Left Side Image / Link Container */}
        <div className='mt-4 flex transform flex-row items-center justify-center transition-transform duration-500 hover:scale-105 md:w-2/3'>
          <Link href={url}>
            <Image
              src={image}
              alt={`${title} image`}
              width={550}
              height={400}
              className='ml-6 w-full rounded-md shadow-lg'
            />
          </Link>
        </div>

        {/* Right Side Features Container */}
        <div className='md:p-x-12 w-full px-6 pt-4 text-left md:w-1/3'>
          <ul className='list-inside list-disc text-[15px]'>
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom Github link */}
      <section className='m-6 flex w-full flex-row justify-center gap-2'>
        <Link
          href={repo}
          className='flex transform flex-row gap-2 transition-transform duration-500 hover:scale-105'
        >
          <SelectIcon
            iconClasses='h-6 w-6 text-gray-500 dark:text-gray-300'
            iconSelection='github'
          />
          <p className='text-gray-500 dark:text-gray-300'>Repository</p>
        </Link>
      </section>
    </main>
  )
}

export default ProjectCardTest
