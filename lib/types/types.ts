import { Locale } from '@/i18n.config'

export interface LogoProps {
  image: string
  text: string
  lang: Locale
}

export interface ContactFormData {
  name: string
  email: string
  text: string
}

export interface ContactFormText {
  title: string
  subtitleOne: string
  subtitleTwo: string
  nameLabel: string
  emailLabel: string
  messageLabel: string
  buttonText: string
  sendingText: string
  loadingText: string
  thankYou: string
  yourMessage: string
  hasBeenSentTo: string
  error: string
}

export interface SendgridResponse {
  code: number
  message: string
  data?: ContactFormData
}

export interface MergedProject {
  id: number
  title: string
  image: string
  logo: string
  url: string
  repo: string
  tech: Tech[]
  description: string
  features: string[]
}

export interface Tech {
  name: string
  icon: string
}

export interface HomepageTextProps {
  title: string
  subtitle: string
  lineOne: string
  lineOneHighlight: string
  lineTwo: string
  resumeButton: string
  projectsButton: string
  contactButton: string
}
