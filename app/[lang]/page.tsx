import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import Dots from '@/components/homepage/Dots'
import HomepageText from '@/components/homepage/HomepageText'

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
        <HomepageText homepage={homepage} />
      </div>

      {/* Right Side Animation */}
      <div className='mr-12 mt-12 flex w-2/5 flex-row items-center gap-10'>

      </div>
    </main>
  )
}
