import { ThreeBackgroundScroll } from '@/components/shared/ThreeBackgroundScroll'
import ThreeCanvasComp from '@/components/shared/ThreeCanvas'
import TestTwoCanvas from '@/components/testcomps/TestTwoCanvas'
import React from 'react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import { projectsArrayTech } from '@/lib/constants/projects'

const TestPageTwo = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { projects } = await getDictionary(lang)

  // Combines with tech in separate file to not have to edit 4 times in 4 json dicts
  const mergedArray = projectsArrayTech.map((item, index) => {
    return { ...item, ...projects[index] }
  })

  return (
    <div className='flex h-full w-full flex-col'>
      <TestTwoCanvas projects={mergedArray} />
    </div>
  )
}

export default TestPageTwo
