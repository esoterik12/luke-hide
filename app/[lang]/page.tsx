import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import Dots from '@/components/homepage/Dots'
import HomepageText from '@/components/homepage/HomepageText'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  // gets the right language page content with a function using lang as input - in lib/dictionary.ts
  const { homepage } = await getDictionary(lang)

  return (
    <main className='flex w-full flex-row'>
      {/* Left Side Circles */}
      <div className='flex min-h-screen w-1/5 flex-row items-end pt-24'>
        <Dots />
      </div>

      {/* Center-Left Text Content */}
      <div className='flex min-h-screen w-4/5 flex-col justify-start pt-20 text-left md:w-2/5 md:pt-40'>
        <HomepageText lang={lang} homepage={homepage} />
      </div>

      {/* Right Side Animation */}
      <div className='mr-12 mt-12 flex w-0 flex-row items-center gap-10 lg:w-2/5'>
      </div>
    </main>
  )
}
