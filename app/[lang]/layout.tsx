import type { Metadata, Viewport } from 'next'
import { Locale, i18n } from '@/i18n.config'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import NavHeader from '@/components/layout/NavHeader'
import BotBarMobileOnly from '@/components/layout/BotBarMobileOnly'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
  // themeColor: '#ffffff'
}

// Unfinished: i18n integration
export const metadata: Metadata = {
  // Unfinished: Update URL and description
  title: 'Luke Hide | Full-stack Developer',
  description: 'Full-stack developer portfolio page',
  metadataBase: new URL('https://nextjs-i18n-enite-test.vercel.app/en'),
  openGraph: {
    siteName: 'Luke Hide | Web Services',
    type: 'website',
    locale: 'en_US'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  },
  applicationName: 'Luke Hide | Web Services',
  appleWebApp: {
    title: 'Luke Hide | Web Services',
    statusBarStyle: 'default',
    capable: true
  }
}

// Used in combination with dynamic route segments to statically generate routes at build time
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={`${inter.className} w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <NavHeader lang={params.lang} />
          <BotBarMobileOnly lang={params.lang} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
