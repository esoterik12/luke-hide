import ProjectsCarousel from '@/components/display/ProjectsCarousel'
import ThreeCanvasComp from '@/components/shared/ThreeCanvas'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import ProjectSelectors from '@/components/ui/ProjectSelectors'
import ProjectTech from '@/components/display/ProjectTech'

const ProjectsPage = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { projects } = await getDictionary(lang)

  return (
    <section className='flex flex-col items-center'>
      <ProjectSelectors />
      <ProjectTech />
      <ThreeCanvasComp>
        <ProjectsCarousel projects={projects} />
      </ThreeCanvasComp>
    </section>
  )
}

export default ProjectsPage
