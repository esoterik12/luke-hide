'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { i18n } from '@/i18n.config'
import { useEffect, useState } from 'react'
import Image from 'next/image'

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
    'w-8 h-8 relative items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-800 transition-colors transition duration-300 ease-in-out hover:bg-red-200 hover:dark:bg-red-200'

  const overlayClasses = 'absolute z-10 h-full w-full rounded-full bg-gray-100 transition-colors transition duration-300 ease-in-out hover:bg-red-400 hover:dark:bg-red-400'

  return (
    <ul className='flex gap-x-3'>
      {/* Maps the locales to render a link that adjusts the paths */}
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)} className='text-white'>
              <div className={classes}>
                {/* This is an overlay - conditionally rendered to disappear for currently selected language */}
                <div
                  className={clsx(
                    overlayClasses,
                    currentPathState === locale ? 'opacity-0' : 'opacity-60'
                  )}
                />
                <Image
                  // SVG file names match locale strings
                  src={`/images/flags/${locale}.svg`}
                  alt='china'
                  height={200}
                  width={200}
                  className='absolute rounded-full'
                />
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
