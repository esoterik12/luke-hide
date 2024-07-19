// this config object file defines internationalization settings
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'zh']
} as const

// custom type
export type Locale = (typeof i18n)['locales'][number]
