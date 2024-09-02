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
    <main className='relative flex w-full flex-col md:w-[840px] md:px-0'>
      {/* Background  */}
      <div className='absolute -z-10 h-full w-full rounded-xl bg-gray-300 opacity-70 dark:bg-gray-800'></div>

      {/* Top Title + Tech Section */}
      <section className='flex flex-col items-center gap-x-4 p-2 text-center'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className=''>{description}</p>

        <div className='mt-2 flex flex-row items-center gap-2 md:hidden'>
          {techStack.map(item => (
            <SelectIcon key={item.name} iconClasses='w-8 h-8' iconSelection={item.name} />
          ))}
        </div>
      </section>

      <section className='flex flex-col md:flex-row md:gap-x-4'>
        {/* Left Side Image / Link Container */}
        <div className='mt-4 flex transform flex-row items-center justify-center rounded-md md:w-2/3'>
          <Link href={url}>
            <Image
              src={image}
              alt={`${title} image`}
              width={550}
              height={400}
              className='p-2 shadow-lg md:ml-6'
            />
          </Link>
        </div>

        {/* Right Side Features Container */}
        <div className='md:p-x-12 w-full px-6 pt-4 text-left md:w-1/3'>
          <ul className='text-md list-inside list-disc'>
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom Github link */}
      <section className='m-6 flex flex-row justify-center'>
        <Link href={repo} className='flex transform flex-row gap-2'>
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
