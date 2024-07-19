import { Locale } from '@/i18n.config'
import Image from 'next/image'
import { getDictionary } from '@/lib/utils/dictionary'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { homepage } = await getDictionary(lang) // get the right language page content with a function using lang as input - in lib/dictionary.ts


  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p>{homepage.title}</p>
    </main>
  )
}
