import React from 'react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import { MergedProject } from '@/lib/types/types'
import { projectsArrayTech } from '@/lib/constants/projects'
import PageContainer from '@/components/shared/PageContainer'

// Disables pre-rendering for the ScrollSnap client component - see NextJS docs
import dynamic from 'next/dynamic'
const ScrollSnap = dynamic(() => import('@/components/projects/ScrollSnap'), { ssr: false })

const ScrollPage = async ({
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
    <PageContainer>
      <ScrollSnap projects={mergedArray} projectsLanding={projectsLanding} />
    </PageContainer>
  )
}

export default ScrollPage
