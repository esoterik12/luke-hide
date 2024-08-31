import ContactForm from '@/components/forms/ContactForm'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

const ContactPage = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { contact } = await getDictionary(lang)

  return (
    <main className='flex flex-col items-center px-4 py-4'>
      <ContactForm langProps={contact} />
    </main>
  )
}

export default ContactPage
