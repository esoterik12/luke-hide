import TestTwoCanvas from '@/components/testcomps/TestTwoCanvas'
import React from 'react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import { projectsArrayTech } from '@/lib/constants/projects'
import { MergedProject } from '@/lib/types/types'

const TestPageTwo = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { projects, projectsLanding } = await getDictionary(lang)

  // Combines with tech in separate file to not have to edit 4 times in 4 json dicts
  const mergedArray: MergedProject[] = projectsArrayTech.map((item, index) => {
    return { ...item, ...projects[index] }
  })

  return (
    <div className='flex h-full w-full flex-col'>
      <TestTwoCanvas projects={mergedArray} projectsLanding={projectsLanding} />
    </div>
  )
}

export default TestPageTwo
