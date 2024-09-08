import Link from 'next/link'
import { LogoProps } from '@/lib/types/types'

const Logo = async ({ lang }: LogoProps) => {
  return (
    <div className='my-2 ml-2'>
      <Link
        href={`/${lang}`}
        className='flex flex-row items-center gap-1 text-xl font-bold tracking-wide'
      >
        <p className='ml-2 text-xl font-bold tracking-wide'>
          L<span className='text-blue-400'>.</span>H
        </p>
      </Link>
    </div>
  )
}

export default Logo
