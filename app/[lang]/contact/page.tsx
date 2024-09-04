import ContactForm from '@/components/forms/ContactForm'
import PageContainer from '@/components/shared/PageContainer'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

const ContactPage = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { contact } = await getDictionary(lang)

  return (
    <PageContainer>
      <main className='flex min-h-screen flex-col items-center justify-center '>
        <ContactForm langProps={contact} />
      </main>
    </PageContainer>
  )
}

export default ContactPage
