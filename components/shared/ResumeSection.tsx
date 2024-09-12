import React, { ReactElement } from 'react'

interface ResumeSectionProps {
  title: string
  children: ReactElement
}

const ResumeSection = ({ title, children }: ResumeSectionProps) => {
  return (
    <section className='mt-4 flex flex-col border-t-2 border-gray-500 py-2'>
      <h2 className='text-md mb-2 mt-2 text-xl font-semibold text-gray-600 dark:text-gray-400'>
        {title}
      </h2>
      {children}
    </section>
  )
}

export default ResumeSection
