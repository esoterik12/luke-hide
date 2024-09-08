'use client'
import { useTheme } from 'next-themes'

export default function IconThreeJS({
  classes,
  hslColor,
}: {
  classes: string
  hslColor: string | undefined
}) {
  const { theme } = useTheme()

  return (
    <svg
      fill='none'
      height='2500'
      width='2500'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='27 26 173.23 174.94'
      className={classes}
      style={{ color: `hsl(${hslColor}, 100%, 50%)` }}
    >
      <g stroke={theme === 'light' ? '#000000' : '#ffffff'}>
        <path d='M70.213 200.94L27 26l173.23 49.874z' />
        <path d='M113.583 50.942l21.591 87.496-86.567-24.945z' />
        <path d='M92.103 125.36L81.379 81.895l43.008 12.346zM70.651 38.483l10.724 43.465-43.008-12.346zM156.663 63.26l10.724 43.465-43.008-12.346zM92.108 125.39l10.724 43.465-43.008-12.346z' />
      </g>
    </svg>
  )
}
