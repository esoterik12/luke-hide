import { Locale } from '@/i18n.config'

export interface LogoProps {
  image: string
  text: string
  lang: Locale
}

export interface ContactFormData {
  name: string
  organization: string
  email: string
  text: string
}

export interface ContactFormText {
  title: string
  nameLabel: string
  emailLabel: string
  messageLabel: string
  buttonText: string
  sendingText: string
  loadingText: string
}
