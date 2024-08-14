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
}

const ProjectCard = ({
  title,
  image,
  url,
  techStack,
  description,
  features
}: ProjectCardProps) => {
  return (
    <div className='flex w-full flex-col border-t-2 md:flex-row'>
      {/* Left Side Text / Tech Container */}
      <div className='w-full p-4 md:w-1/2'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <div className='flex flex-col items-center py-4'>
          <div className='flex flex-row gap-x-6'>
            {techStack.map((item: ProjectTechStackProps) => (
              <div
                key={item.name}
                className='flex flex-col items-center gap-x-1'
              >
                <SelectIcon iconClasses='w-9 h-9' iconSelection={item.icon} />
                <p className='mt-1 text-sm font-semibold'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <p>{description}</p>
        <div className='md:p-x-12 p-4 text-left'>
          <ul className='list-inside list-disc'>
            {features.map((item, index) => (
              <li className='text-sm' key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side Image / Link Container */}
      <div className='flex h-80 flex-row items-center justify-center p-4 md:w-1/2'>
        <Link href={url}>
          <Image
            src={image}
            alt={`${title} image`}
            width={450}
            height={300}
            className='w-full rounded-md shadow-lg'
          />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
