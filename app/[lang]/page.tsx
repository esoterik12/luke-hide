import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import CubeCanvas from '@/components/shared/ThreeCube'
import Socials from '@/components/shared/Socials'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { homepage } = await getDictionary(lang) // get the right language page content with a function using lang as input - in lib/dictionary.ts

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full max-w-4xl items-center text-center'>
        <h1 className='mb-6 text-4xl font-bold text-gray-800 dark:text-white'>
          {homepage.title}
        </h1>
        <h2 className='mb-4 text-2xl font-semibold text-gray-500'>
          {homepage.subtitle}
        </h2>
        <div className='h-32'>
          <CubeCanvas />
        </div>
        <div className='mb-6 mt-6'>
          <p className='mb-2 text-lg text-gray-500'>
            {homepage.area}, {homepage.city}
          </p>
          <p className='text-lg text-gray-500'>{homepage.country}</p>
        </div>
        <Socials />
      </div>
    </main>
  )
}
