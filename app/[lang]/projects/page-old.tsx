import ProjectCard from '@/components/display/ProjectCard'
import PageContainer from '@/components/shared/PageContainer'
import { Locale } from '@/i18n.config'
import { projectsArrayTech } from '@/lib/constants/projects'
import { getDictionary } from '@/lib/utils/dictionary'

const ProjectPage = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { projects } = await getDictionary(lang)

  const mergedArray = projectsArrayTech.map((item, index) => {
    return { ...item, ...projects[index] }
  })

  return (
    <PageContainer>
      <div className='flex flex-col items-center text-center'>
        {mergedArray.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            url={project.url}
            techStack={project.tech}
            description={project.description}
            features={project.features}
            repo={project.repo}
          />
        ))}
      </div>
    </PageContainer>
  )
}

export default ProjectPage
