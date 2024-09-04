import NavLink from '../ui/NavLink'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from './Logo'
import ThemeButton from '../ui/ThemeButton'
// import MobileNavHeader from './MobileNavHeader'

export default async function NavHeader({ lang }: { lang: Locale }) {
  // gets navigation page destructured from getDictionary return object
  const { navigation } = await getDictionary(lang)

  return (
    <header className='fixed z-20 w-full bg-slate-100 py-2 dark:bg-gray-800'>
      {/* <MobileNavHeader lang={lang} /> */}
      <nav className='flex items-center justify-between'>
        {/* Logo - Left Side */}
        <div className='flex w-1/4 flex-row'>
          <Logo
            text='LH'
            image='/e-nite/android-chrome-512x512.png'
            lang={lang}
          />
          <ThemeButton />
        </div>

        {/* NavLinks */}
        <div className='hidden w-1/2 flex-row justify-center sm:flex'>
          <ul className='flex gap-x-5 sm:text-lg'>
            {/* KEY: These links include the lang / locale in their href */}
            <li>
              <NavLink
                classes='custom-transition-class font-semibold text-xl'
                href={`/${lang}/contact`}
              >
                {navigation.contact}
              </NavLink>
            </li>
            <li>
              <NavLink
                classes='custom-transition-class font-semibold text-xl'
                href={`/${lang}/projects`}
              >
                {navigation.projects}
              </NavLink>
            </li>{' '}
            <li>
              <NavLink
                classes='custom-transition-class font-semibold text-xl'
                href={`/${lang}/resume`}
              >
                {navigation.resume}
              </NavLink>
            </li>{' '}
          </ul>
        </div>

        {/* Buttons */}
        <div className='flex w-1/4 flex-row justify-end gap-6 p-2'>
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  )
}
