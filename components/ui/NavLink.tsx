'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface NavLink {
  href: string
  classes?: string
  children: React.ReactNode
}

const NavLink = ({ href, children, classes, ...props }: NavLink) => {
  const pathname = usePathname()
  const isActiveLink = href === pathname

  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        classes,
        isActiveLink && 'underline'
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
