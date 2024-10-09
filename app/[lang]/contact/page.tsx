import ContactForm from '@/components/forms/ContactForm'
import Dots from '@/components/homepage/Dots'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

const ContactPage = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { contact } = await getDictionary(lang)

  return (
    <main className='flex w-full flex-row pb-4 pl-4 md:p-0 md:pb-0'>
      {/* Left Side Circles */}
      <div className='hidden min-h-screen flex-row items-end pt-24 md:flex md:w-1/5'>
        <Dots />
      </div>
      {/* Center-Left Text Content */}
      <div className='flex min-h-screen w-full flex-col justify-start pt-20 text-left md:w-4/5 md:pt-40'>
        <ContactForm langProps={contact} />
      </div>

      {/* Right Side Animation */}
      <div className='mr-12 mt-12 flex w-0 flex-row items-center gap-10 lg:w-2/5'></div>
    </main>
  )
}

export default ContactPage
