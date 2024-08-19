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
    <main className='px-4 py-4 sm:px-24 sm:py-12'>
      <ContactForm
        title={contact.title}
        nameLabel={contact.nameLabel}
        emailLabel={contact.emailLabel}
        messageLabel={contact.messageLabel}
        buttonText={contact.buttonText}
        loadingText={contact.loadingText}
        sendingText={contact.sendingText}
      />
    </main>
  )
}

export default ContactPage
