import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import Socials from '@/components/shared/Socials'
import Image from 'next/image'
import IconOctahedron from '@/components/icons/shapes/IconOctahedron'
import Link from 'next/link'
import Dots from '@/components/homepage/Dots'
import CubeCanvas from '@/components/shared/ThreeCube'
import ThreeCanvasComp from '@/components/shared/ThreeCanvas'
import ThreeBackground from '@/components/shared/ThreeBackground'
export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { homepage } = await getDictionary(lang) // get the right language page content with a function using lang as input - in lib/dictionary.ts

  return (
    <main className='flex w-full flex-row'>
      {/* Left Side Circles */}
      <div className='flex min-h-screen w-1/5 flex-row items-end pt-24'>
        <Dots />
      </div>

      {/* Center-Left Text Content */}
      <div className='flex min-h-screen w-2/5 flex-col justify-start pt-40 text-left'>
        <h1 className='text-[72px] font-black text-gray-800 dark:text-white'>
          Hi, I'm Luke.
        </h1>
        <h2 className='mb-4 text-4xl font-semibold text-blue-500 dark:text-blue-400'>
          Aspiring full-stack developer
        </h2>
        <h2 className='mb-4 font-mono text-2xl font-semibold'>
          With a love of languages, spoken and{' '}
          <span className='text-red-500 dark:text-red-400'>coded</span>.
        </h2>
        <Socials />
        <div className='flex flex-row gap-x-6'>
          <Link href='./contact' className='pt-4'>
            <div className='w-44 rounded-xl bg-blue-400 py-6'>
              <p className='text-center text-2xl font-bold'>My Resume</p>
            </div>
          </Link>
          <Link href='./contact' className='pt-4'>
            <div className='w-44 rounded-xl bg-blue-400 py-6'>
              <p className='text-center text-2xl font-bold'>My Projects</p>
            </div>
          </Link>
          <Link href='./contact' className='pt-4'>
            <div className='w-44 rounded-xl bg-blue-400 py-6'>
              <p className='text-center text-2xl font-bold'>Contact Me</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Center-Right Buttons */}
      {/* <div className='flex min-h-screen w-1/5 flex-col justify-end items-start pb-24 text-left'>
        <div className='flex flex-col gap-x-6'>
          <Link href='./contact' className='pt-4'>
            <div className='w-48 rounded-2xl bg-blue-400 p-6'>
              <p className='text-center text-2xl font-bold'>My Resume</p>
            </div>
          </Link>
          <Link href='./contact' className='pt-4'>
            <div className='w-48 rounded-2xl bg-blue-400 p-6'>
              <p className='text-center text-2xl font-bold'>My Projects</p>
            </div>
          </Link>
          <Link href='./contact' className='pt-4'>
            <div className='w-48 rounded-2xl bg-blue-400 p-6'>
              <p className='text-center text-2xl font-bold'>Contact Me</p>
            </div>
          </Link>
        </div>
      </div> */}

      {/* Right Side Animation */}
      <div className='mr-12 mt-12 flex min-h-screen w-2/5 flex-row items-center gap-10'>
        <CubeCanvas />
        <ThreeCanvasComp>
          <ThreeBackground />
        </ThreeCanvasComp>
        {/* <IconTriangle classes='text-red-400' /> */}
        {/* <IconOctahedron classes='max-w-96' /> */}
      </div>
    </main>
  )
}
