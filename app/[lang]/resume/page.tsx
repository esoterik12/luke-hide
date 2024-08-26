import SelectIcon from '@/components/icons/SelectIcon'
import PageContainer from '@/components/shared/PageContainer'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import Image from 'next/image'
import { languagesArray } from '@/lib/constants/langauges'
import Link from 'next/link'

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
      {/* Top Personal Section */}
      <>
        <section className='flex flex-row'>
          <Image
            height={200}
            width={200}
            alt='headshot'
            src='/images/headshot.jpg'
            className='ml-2 mr-6 hidden rounded-full border-2 border-red-200 shadow-xl md:block md:h-52 md:w-52'
          />

          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <div>
                <h1 className='text-3xl font-bold'>Luke Hide</h1>
                <h2 className='text-md font-semibold text-gray-600 dark:text-gray-400'>
                  {resume.headerSection.titleOne}
                </h2>
                <h2 className='text-md font-semibold text-gray-600 dark:text-gray-400'>
                  {resume.headerSection.titleTwo}
                </h2>
              </div>
              <Image
                height={200}
                width={200}
                alt='headshot'
                src='/images/headshot.jpg'
                className='ml-2 mr-6 h-28 w-28 rounded-full border-2 border-red-200 shadow-xl md:hidden'
              />
            </div>
            <p className='mt-4'>{resume.headerSection.bio}</p>
            <Link
              className='py-2 text-sm text-red-400 hover:underline'
              href='/projects'
            >
              {resume.headerSection.projectsLink}
            </Link>
            <div className='mt-4 flex flex-row flex-wrap gap-6 text-sm'>
              <div className='flex flex-col'>
                <p className='font-bold text-gray-600 dark:text-gray-400'>
                  {resume.headerSection.ageText}
                </p>
                <p>36</p>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold text-gray-600 dark:text-gray-400'>
                  {resume.headerSection.address}
                </p>
                <p>Marbella, España</p>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold text-gray-600 dark:text-gray-400'>
                  Email
                </p>
                <p>luke.hide@gmail.com</p>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold text-gray-600 dark:text-gray-400'>
                  {resume.headerSection.phone}
                </p>
                <p>+34 647 30 52 24</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className='mt-8 flex flex-col border-t-2 border-gray-500'>
          {/* Left side image / line */}
          {resume.experience.positions.map((item, index) => (
            <div key={index} className='m-2 flex flex-row'>
              <div className='flex flex-col items-center'>
                <SelectIcon iconClasses='h-10 w-10' iconSelection='web' />
                <div className='m-1 h-full w-1 rounded-full border-2 border-red-200' />
              </div>
              <div className='ml-2 flex w-4/5 flex-col justify-start'>
                <h2 className='text-md text-lg font-semibold'>{item.role}</h2>
                <h3 className='text-md text-md font-semibold'>
                  {item.location} - {item.company}
                </h3>
                <p className='mb-3 text-sm text-gray-600 dark:text-gray-400'>
                  {item.dates}
                </p>
                <ul className='list ml-4 list-disc'>
                  {item.responsibilities?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Technical Proficiencies */}
        <section className='mt-6 flex flex-col border-t-2 border-gray-500'>
          <h2 className='text-md mb-3 mt-6 text-xl font-semibold text-gray-600 dark:text-gray-400'>
            {resume.technicalProficiency.title}
          </h2>
          <div className='flex flex-row flex-wrap gap-y-6'>
            {resume.technicalProficiency.content.map((item, index) => (
              <div className='ml-8 flex w-44 flex-col gap-2' key={item.id}>
                <p className='text-gray-400'>{item.title}:</p>
                {item.content.map(item => (
                  <div className='flex flex-row gap-x-2' key={item}>
                    {index < 5 && (
                      <SelectIcon iconClasses='h-6 w-6' iconSelection={item} />
                    )}
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className='mt-6 flex flex-col border-t-2 border-gray-500'>
          <div>
            <h2 className='text-md mt-6 text-xl font-semibold text-gray-600 dark:text-gray-400'>
              Languages
            </h2>
          </div>

          <div className='m-2 ml-6 flex flex-row flex-wrap gap-4 p-2'>
            {mergedArray.map(item => (
              <div
                key={item.id}
                className={`flex w-40 flex-row items-center rounded-full border-2 ${item.color}`}
              >
                <Image
                  src={item.flagImage}
                  alt={item.language}
                  height={35}
                  width={35}
                  className='m-1'
                />
                <p className={`ml-1 mr-4 font-semibold ${item.textColor}`}>
                  {item.language}&nbsp;
                  {item.level}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className='mt-6 flex flex-col border-t-2 border-gray-500'>
          <div>
            <h2 className='text-md mt-6 text-xl font-semibold text-gray-600 dark:text-gray-400'>
              Additional Skills & Proficiences
            </h2>
          </div>

          <div className='m-2 ml-6 flex flex-row flex-wrap gap-4 p-2'>
            <div
              className={`flex flex-row items-center rounded-full border-2 px-2 py-1`}
            >
              <Image
                src='/images/indesign.png'
                alt='ableton'
                height={35}
                width={35}
                className='m-1 rounded-xl'
              />
              <p className={`ml-1 mr-4 font-semibold`}>InDesign</p>
            </div>
            <div
              className={`flex flex-row items-center rounded-full border-2 px-2 py-1`}
            >
              <Image
                src='/images/premiere-pro.svg'
                alt='ableton'
                height={35}
                width={35}
                className='m-1 rounded-xl'
              />
              <p className={`ml-1 mr-4 font-semibold`}>Premiere Pro</p>
            </div>
            <div
              className={`flex flex-row items-center rounded-full border-2 px-2 py-1`}
            >
              <Image
                src='/images/after-effects.svg'
                alt='ableton'
                height={35}
                width={35}
                className='m-1 rounded-xl'
              />
              <p className={`ml-1 mr-4 font-semibold`}>After Effects</p>
            </div>
            <div
              className={`flex flex-row items-center rounded-full border-2 px-2 py-1`}
            >
              <Image
                src='/images/ableton.png'
                alt='ableton'
                height={35}
                width={35}
                className='m-1 rounded-xl'
              />
              <p className={`ml-1 mr-4 font-semibold`}>Ableton</p>
            </div>
          </div>
        </section>
      </>
    </PageContainer>
  )
}

export default ResumePage
