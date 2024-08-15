import ProjectCard from '@/components/display/ProjectCard'
import { Locale } from '@/i18n.config'
import { projectsArrayTech } from '@/lib/constants/projects'
import { getDictionary } from '@/lib/utils/dictionary'

const SinglePagePortfolio = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { projects } = await getDictionary(lang)

  const mergedArray = projectsArrayTech.map((item, index) => {
    return { ...item, ...projects[index] }
  })

  return (
    <section>
      {/* <div className='flex w-full flex-col items-center py-48 text-center'>
        <h1 className='text-6xl font-bold'>Hi, I'm Luke</h1>
        <h1 className='text-5xl font-bold'>Full-stack developer</h1>
      </div> */}
      <div className='flex w-full flex-col items-center text-center'>
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
    </section>
  )
}

export default SinglePagePortfolio
