import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import Dots from '@/components/homepage/Dots'
import HomepageText from '@/components/homepage/HomepageText'
import Background from '@/components/shared/Background'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  // gets the right language page content with a function using lang as input - in lib/dictionary.ts
  const { homepage } = await getDictionary(lang)

  return (
    <main className='relative flex w-full flex-col md:flex-row'>
      {/* Left Side Circles - hidden on small screens */}
      <div className='hidden min-h-screen w-1/6 flex-row items-end pt-24 md:flex'>
        <Dots />
      </div>

      {/* Center-Left Text Content */}
      <div className='relative z-10 flex min-h-screen w-full flex-col justify-start p-4 pt-20 text-left md:w-1/2 md:p-0 md:pt-40'>
        <HomepageText lang={lang} homepage={homepage} />
      </div>

      {/* Right Side Animation (Background) */}
      <div className='inset-0 -z-10 md:flex w-full flex-row items-center gap-10 hidden md:relative md:inset-auto md:z-auto md:mt-12 md:w-2/6'>
        <Background />
        <div className='absolute inset-0 bg-gradient-to-t from-black/0 to-black/15 md:hidden'></div>
      </div>
    </main>
  )
}
