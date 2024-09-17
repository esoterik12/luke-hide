import React from 'react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import { MergedProject } from '@/lib/types/types'
import { projectsArrayTech } from '@/lib/constants/projects'
import PageContainer from '@/components/shared/PageContainer'
import ProjectsDisplay from '@/components/projects/ProjectsDisplay'

const ScrollPage = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { projects, projectsLanding } = await getDictionary(lang)

  // Combines with tech in separate file to not have to edit 4 times in 4 json dicts
  const mergedProjectsArray: MergedProject[] = projectsArrayTech.map(
    (item, index) => {
      return { ...item, ...projects[index] }
    }
  )

  return (
    <PageContainer>
      <ProjectsDisplay projects={mergedProjectsArray} projectsLanding={projectsLanding} />
    </PageContainer>
  )
}

export default ScrollPage
