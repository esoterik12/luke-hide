import 'server-only'
import type { Locale } from '@/i18n.config'

// this page import the two json files
// dictionairies folder with json files
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  es: () => import('@/dictionaries/es.json').then(module => module.default),
  fr: () => import('@/dictionaries/fr.json').then(module => module.default),
  zh: () => import('@/dictionaries/zh.json').then(module => module.default)
}

// exported function used in page.tsx to get the dictionaries content (json file) using locale
export const getDictionary = async (locale: Locale) => dictionaries[locale]()
