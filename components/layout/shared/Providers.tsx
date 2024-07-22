'use client'

import { AppProvider } from '@/lib/context/AppContext'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        {children}
      </ThemeProvider>
    </AppProvider>
  )
}

export default Providers
