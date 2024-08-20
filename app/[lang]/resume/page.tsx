import SelectIcon from '@/components/icons/SelectIcon'
import PageContainer from '@/components/shared/PageContainer'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import Image from 'next/image'

const ResumePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const languagesArray = [
    {
      id: 1,
      language: 'English',
      level: 'C2',
      flagImage: '/images/flags/en.svg',
      color: 'border-green-500',
      textColor: 'text-green-500 dark:text-green-400'
    },
    {
      id: 2,
      language: 'French',
      level: 'C1',
      flagImage: '/images/flags/fr.svg',
      color: 'border-blue-600',
      textColor: 'text-blue-600 dark:text-blue-500'
    },
    {
      id: 3,
      language: 'Chinese',
      level: 'B2',
      flagImage: '/images/flags/zh.svg',
      color: 'border-blue-600',
      textColor: 'text-blue-600 dark:text-blue-500'
    },
    {
      id: 4,
      language: 'Spanish',
      level: 'B2',
      flagImage: '/images/flags/es.svg',
      color: 'border-yellow-500',
      textColor: 'text-yellow-500 dark:text-yellow-500'
    }
  ]

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
                  Full-stack Developer
                </h2>
                <h2 className='text-md font-semibold text-gray-600 dark:text-gray-400'>
                  Educational Technology Administrator
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
            <p className='mt-4'>
              Self-taught full-stack developer with a focus on React and NextJS
              and broad experience with MongoDB. Four years of experience as a
              Learning Management System Administrator, recruiter, and team
              leader in an educational institution.
            </p>
            <div className='mt-4 flex flex-row flex-wrap gap-6 text-sm'>
              <div className='flex flex-col'>
                <p className='font-bold text-gray-600 dark:text-gray-400'>
                  Address
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
                  Phone
                </p>
                <p>+34 647 30 52 24</p>
              </div>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section className='mt-8 flex flex-col border-t-2 border-gray-500'>
          <div>
            <h2 className='text-md mt-6 text-xl font-semibold text-gray-600 dark:text-gray-400'>
              Work Experience
            </h2>
          </div>

          <div className='m-2 flex flex-row'>
            {/* Left side image / line */}
            <div className='flex flex-col items-center'>
              <SelectIcon iconClasses='h-10 w-10' iconSelection='web' />
              <div className='m-1 h-full w-1 rounded-full border-2 border-red-200' />
            </div>
            {/* Right side text */}
            <div className='ml-2 flex w-4/5 flex-col justify-start'>
              <h2 className='text-md text-lg font-semibold'>
                Canvas Learning Management System Administrator
              </h2>
              <h3 className='text-md text-md font-semibold'>
                BigByte Education - Taipei, Taiwan
              </h3>
              <p className='mb-3 text-sm text-gray-600 dark:text-gray-400'>
                August 2019 - October 2023
              </p>
              <ul className='list ml-4 list-disc'>
                <li>
                  Maintained online platform and kept a high standard of data
                  integrity.
                </li>
                <li>
                  Managed user accounts, enrollments, ensured systematic content
                  uploads, and updates.
                </li>
                <li>
                  Provided daily technical support and training to all
                  employees, students, and parents.
                </li>
                <li>
                  Project Manager for a team of four members implementing a
                  curriculum update to CCSS Wonders 2020 curriculum over three
                  years. - Created core curriculum assessments. This involved:
                  managing online material, designing material for print,
                  proofreading, and version control through regular updates. -
                  Created supplementary digital material for distribution at six
                  company branches, used regularly by over 65% of employees.
                </li>
              </ul>
            </div>
          </div>

          <div className='m-2 flex flex-row'>
            {/* Left side image / line */}
            <div className='flex flex-col items-center'>
              <SelectIcon iconClasses='h-10 w-10' iconSelection='web' />
              <div className='m-1 h-full w-1 rounded-full border-2 border-red-200' />
            </div>
            {/* Right side text */}
            <div className='ml-2 flex w-4/5 flex-col justify-start'>
              <h2 className='text-md text-lg font-semibold'>Head Teacher</h2>
              <h3 className='text-md text-md font-semibold'>
                BigByte Education - Taipei, Taiwan
              </h3>
              <p className='mb-3 text-sm text-gray-600 dark:text-gray-400'>
                August 2020 - October 2023
              </p>
              <ul className='list ml-4 list-disc'>
                <li>
                  Managed and trained four full-time employees at a private
                  education branch each year, specialized in teaching
                  supplementary English lessons.
                </li>
                <li>
                  I was responsible for creating a safe, welcoming, and engaging
                  learning environment across the branch and ensuring all
                  students met their learning objectives.
                </li>
                <li>
                  I worked at three different branches. Each year I was assigned
                  to the branch that represented the biggest challenge for the
                  company.
                </li>
                <li>
                  Branches consistently maintained 85%+ student retention
                  year-on-year.
                </li>
                <li>
                  Taught at least 10 hours per week of 2 hour lessons each year
                  with students aged 7 to 18 in English-immersion environments.
                </li>
                <li>
                  Interviewed and recruited employees over three years resulting
                  in seven successful hires and four employees staying over two
                  years.
                </li>
              </ul>
            </div>
          </div>

          <div className='m-2 flex flex-row'>
            {/* Left side image / line */}
            <div className='flex flex-col items-center'>
              <SelectIcon iconClasses='h-10 w-10' iconSelection='web' />
              <div className='m-1 h-full w-1 rounded-full border-2 border-red-200' />
            </div>
            {/* Right side text */}
            <div className='ml-2 flex w-4/5 flex-col justify-start'>
              <h2 className='text-md font-semibold'>Full-time Educator</h2>
              <h3 className='text-md font-semibold'>
                AGI Language Institue - Seoul, South Korea
              </h3>
              <p className='mb-3 text-sm text-gray-600 dark:text-gray-400'>
                2014 - 2018
              </p>
            </div>
          </div>
          <div className='m-2 flex flex-row'>
            {/* Left side image / line */}
            <div className='flex flex-col items-center'>
              <SelectIcon iconClasses='h-10 w-10' iconSelection='web' />
              <div className='m-1 h-full w-1 rounded-full border-2 border-red-200' />
            </div>
            {/* Right side text */}
            <div className='ml-2 flex w-4/5 flex-col justify-start'>
              <h2 className='text-md font-semibold'>Full-time Educator</h2>
              <h3 className='text-md font-semibold'>
                ENI Language - Angyang, South Korea
              </h3>
              <p className='mb-3 text-sm text-gray-600 dark:text-gray-400'>
                2012 - 2014
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className='mt-6 flex flex-col border-t-2 border-gray-500'>
          <div>
            <h2 className='text-md mt-6 text-xl font-semibold text-gray-600 dark:text-gray-400'>
              Education
            </h2>
          </div>

          <div className='m-2 flex flex-row'>
            {/* Left side image / line */}
            <div className='flex flex-col items-center'>
              <SelectIcon iconClasses='h-16 w-16' iconSelection='academic' />
              <div className='m-1 h-full w-1 rounded-full border-2 border-red-200' />
            </div>
            {/* Right side text */}
            <div className='flex w-4/5 flex-col justify-start'>
              <h2 className='text-md text-lg font-semibold'>BSc. Economics</h2>
              <p className='mb-3 text-sm text-gray-600 dark:text-gray-400'>
                September 2006 - June 2009
              </p>
              <p>University of East Anglia, UK</p>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className='mt-6 flex flex-col border-t-2 border-gray-500'>
          <div>
            <h2 className='text-md mt-6 text-xl font-semibold text-gray-600 dark:text-gray-400'>
              Languages
            </h2>
          </div>

          <div className='m-2 flex flex-row flex-wrap gap-4 p-2'>
            {languagesArray.map(item => (
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

          <div className='m-2 flex flex-row flex-wrap gap-4 p-2'>
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
