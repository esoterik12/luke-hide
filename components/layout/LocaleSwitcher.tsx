'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { i18n } from '@/i18n.config' // i18n config object
import { useEffect, useState } from 'react'

export default function LocaleSwitcher() {
  const pathName = usePathname() // Get current path name (allows changing lang on any page)
  const [currentPathState, setCurrentPathState] = useState<string>('')

  useEffect(() => {
    setCurrentPathState(pathName.split('/')[1])
  }, [])

  console.log('currentPathState', currentPathState)

  // // Function to change the path name based on the selected locale in the LocaleSwitcher below
  // useEffect(() => {
  //   const redirectedPathName = (locale: string) => {
  //     if (!pathName) return '/'
  //     const segments = pathName.split('/')
  //     segments[1] = locale
  //     return segments.join('/')
  //   }
  //   setCurrentPathState(currentPathState)
  // }, [])

  const classes =
    'w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-red-200 text-sm text-gray-800 transition-colors transition duration-350 ease-in-out'

  return (
    <ul className='flex gap-x-3'>
      {/* Maps the locales to render a link that adjusts the paths */}
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link href={locale} className='text-white'>
              <div
                className={clsx(
                  classes,
                  currentPathState === locale ? 'bg-red-200' : 'bg-gray-100 dark:bg-gray-400'
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
