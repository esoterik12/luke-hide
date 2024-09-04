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
  subtitleOne: string
  subtitleTwo: string
  nameLabel: string
  emailLabel: string
  messageLabel: string
  buttonText: string
  sendingText: string
  loadingText: string
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

export interface ProjectsLanding {
  title: string
  subtitle: string
}