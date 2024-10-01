import SelectIcon from '@/components/icons/SelectIcon'
import PageContainer from '@/components/shared/PageContainer'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import Image from 'next/image'
import { languagesArray } from '@/lib/constants/langauges'
import Link from 'next/link'
import { skillsContent } from '@/lib/constants/skills'
import ResumeSection from '@/components/shared/ResumeSection'

const ResumePage = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { resume } = await getDictionary(lang)

  const mergedArray = languagesArray.map((item, index) => {
    return { ...item, ...resume.languages.list[index] }
  })

  return (
    <PageContainer>
      <>
        {/* Top Personal Section */}
        <section className='mt-12 flex flex-row items-center md:mt-20'>
          <Image
            height={200}
            width={200}
            alt='headshot'
            src='/images/headshot-no-bg-square.png'
            className='ml-2 mr-6 hidden rounded-full border-2 border-blue-400 bg-gray-800 shadow-xl md:block md:h-52 md:w-52'
          />

          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <div>
                <h1 className='text-3xl font-bold'>Luke Hide</h1>
                <h2 className='text-xl font-semibold text-gray-600 dark:text-gray-400'>
                  {resume.headerSection.titleOne}
                </h2>
              </div>
              <Image
                height={200}
                width={200}
                alt='headshot'
                src='/images/headshot-no-bg-square.png'
                className='ml-2 mr-6 h-28 w-28 rounded-full border-2 border-rose-300 bg-gray-800 shadow-xl md:hidden'
              />
            </div>
            <p className='para-text mt-4'>{resume.headerSection.bio}</p>
          </div>
        </section>

        <div className='para-text mt-4 flex flex-row flex-wrap gap-6'>
          <div className='flex flex-col'>
            <p className='font-bold text-gray-600 dark:text-gray-400'>
              {resume.headerSection.nationalityTitle}
            </p>
            <p>{resume.headerSection.nationalityText}</p>
          </div>
          <div className='flex flex-col'>
            <p className='font-bold text-gray-600 dark:text-gray-400'>
              {resume.headerSection.ageText}
            </p>
            <p>36</p>
          </div>
          {/* <div className='flex flex-col'>
            <p className='font-bold text-gray-600 dark:text-gray-400'>
              {resume.headerSection.addressTitle}
            </p>
            <p>{resume.headerSection.address}</p>
          </div> */}
          <div className='flex flex-col'>
            <p className='font-bold text-gray-600 dark:text-gray-400'>
              {resume.headerSection.emailTitle}
            </p>
            <p>luke.hide@gmail.com</p>
          </div>
          <div className='flex flex-col'>
            <p className='font-bold text-gray-600 dark:text-gray-400'>
              {resume.headerSection.phone}
            </p>
            <p>+34 647 30 52 24</p>
          </div>
          {/* Projcets and PDF download links div */}
          <div className='para-text flex flex-row flex-wrap gap-x-8'>
            <Link
              className='text-blue-400 hover:underline'
              href={`/${lang}/projects`}
            >
              {resume.headerSection.projectsLink}
            </Link>
            <a
              className='text-blue-400 hover:underline'
              href='/images/luke-hide-cv-developer.pdf'
              target='_blank'
            >
              {resume.headerSection.downloadPdf}
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <ResumeSection title={resume.experience.title}>
          <>
            {resume.experience.positions.map((item, index) => (
              <div key={index} className='my-2 flex flex-row'>
                <div className='flex flex-col items-center'>
                  <SelectIcon iconClasses='h-8 w-8' iconSelection='web' />
                  <div className='m-1 h-full w-1 rounded-full border-2 border-blue-400' />
                </div>
                <div className='flex w-4/5 flex-col justify-start sm:ml-2'>
                  <p className='para-text text-gray-600 dark:text-gray-400'>
                    {item.dates}
                  </p>
                  <h2 className='para-text font-semibold'>
                    {item.role} - {item.location}{' '}
                    {/* this conditional because freelance work has no company and is ' ' in the json */}
                    {item.company !== ' ' && ` - ${item.company}`}
                  </h2>
                  <h3 className='para-text font-semibold'></h3>

                  <ul className='list ml-4 list-disc'>
                    {item.responsibilities?.map((item, index) => (
                      <li className='para-text' key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        </ResumeSection>

        {/* Education Section */}
        <ResumeSection title={resume.education.title}>
          <>
            {resume.education.qualifications.map((item, index) => (
              <div key={index} className='my-2 flex flex-row'>
                <div className='flex flex-col items-center'>
                  <SelectIcon iconClasses='h-8 w-8' iconSelection='web' />
                  <div className='m-1 h-full w-1 rounded-full border-2 border-blue-400' />
                </div>
                <div className='flex w-4/5 flex-col justify-start sm:ml-2'>
                  <p className='para-text text-gray-600 dark:text-gray-400'>
                    {item.dates}
                  </p>
                  <h2 className='para-text font-semibold'>
                    {item.qualification} - {item.location}
                  </h2>
                  <h3 className='para-text font-semibold'></h3>
                </div>
              </div>
            ))}
          </>
        </ResumeSection>

        {/* Technical Proficiencies */}
        <ResumeSection title={resume.technicalProficiency.title}>
          <div className='flex flex-row flex-wrap gap-y-6'>
            {resume.technicalProficiency.content.map((item, index) => (
              <div
                className='ml-2 flex w-40 flex-col gap-2 sm:ml-8'
                key={item.id}
              >
                <p className='para-text text-gray-400'>{item.title}:</p>
                {item.content.map(item => (
                  <div className='flex flex-row gap-x-2' key={item}>
                    {index < 5 && (
                      <SelectIcon iconClasses='h-6 w-6' iconSelection={item} />
                    )}
                    <p className='para-text'>{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Languages Section */}
        <ResumeSection title={resume.languages.title}>
          <div className='ml-4 mt-2 flex flex-row flex-wrap gap-4 sm:ml-8'>
            {mergedArray.map(item => (
              <div
                key={item.id}
                className={`flex min-w-44 flex-row items-center rounded-full border-2`}
              >
                <Image
                  src={item.flagImage}
                  alt={item.language}
                  height={35}
                  width={35}
                  className='m-1'
                />
                <p className={`para-text ml-1 mr-4 font-semibold`}>
                  {item.language}&nbsp;
                  {item.level}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Skills Section */}
        <ResumeSection title={resume.skillsSection.title}>
          <div className='ml-4 mt-2 flex flex-row flex-wrap gap-4 sm:ml-8'>
            {skillsContent.map(item => (
              <div
                key={item.id}
                className={`flex h-12 w-44 flex-row items-center gap-x-2 rounded-full border-2`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  height={30}
                  width={30}
                  className='ml-2 rounded-xl'
                />
                <p className='para-text ml-1 mr-4 font-semibold'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Footer */}
        <section className='para-text mt-12 flex flex-col items-center gap-10 border-t-2 border-gray-500'>
          <p className='para-text mt-6'>{resume.footerSection.references}</p>
          <div className='para-text flex flex-row justify-center gap-10 border-gray-500'>
            <Link
              className='py-2 text-blue-400 hover:underline'
              href={`/${lang}/projects`}
            >
              {resume.footerSection.projectsLink}
            </Link>
            <a
              className='py-2 text-blue-400 hover:underline'
              href='/images/luke-hide-cv-developer.pdf'
              target='_blank'
            >
              {resume.footerSection.downloadPdf}
            </a>
          </div>
        </section>
      </>
    </PageContainer>
  )
}

export default ResumePage
