import React from 'react'
import Link from 'next/link'

type Props = {
  link: string
  containerClasses: string // set width, padding, marging
  textClasses: string
  linkText: string
}

const LinkButton = ({
  link,
  containerClasses,
  textClasses,
  linkText
}: Props) => {
  return (
    <Link href={link}>
      <div
        className={`custom-hover-effect rounded-xl bg-blue-400 ${containerClasses}`}
      >
        <p className={`text-center font-bold text-white ${textClasses}`}>
          {linkText}
        </p>
      </div>
    </Link>
  )
}

export default LinkButton
