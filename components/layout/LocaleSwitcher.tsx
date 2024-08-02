'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { i18n } from '@/i18n.config' // i18n config object
import { useEffect, useState } from 'react'

export default function LocaleSwitcher() {
  const pathName = usePathname() // Get current path name (allows changing lang on any page)
  const [currentPathState, setCurrentPathState] = useState<string>('')

  // Function to change the path name based on the selected locale in the LocaleSwitcher below
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  useEffect(() => {
    setCurrentPathState(pathName.split('/')[1])
  }, [pathName, currentPathState])

  const classes =
    'w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-sm text-gray-800 transition-colors transition duration-350 ease-in-out hover:bg-red-200 hover:dark:bg-red-200'

  return (
    <ul className='flex gap-x-3'>
      {/* Maps the locales to render a link that adjusts the paths */}
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)} className='text-white'>
              <div
                className={clsx(
                  classes,
                  currentPathState === locale
                    ? ''
                    : 'bg-gray-200 dark:bg-gray-400'
                )}
              >
                {locale === 'zh' && '中'}
                {locale !== 'zh' && locale}
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
