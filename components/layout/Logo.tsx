import Link from 'next/link'
import Image from 'next/image'
import { LogoProps } from '@/lib/types/types'

const Logo = async ({ image, text, lang }: LogoProps) => {
  return (
    <div className='my-2 ml-2'>
      <Link
        href={`/${lang}`}
        className='flex flex-row items-center gap-1 text-xl font-bold tracking-wide'
      >
        {/* <Image src={image} alt={text} width={50} height={50} className='p-1'/> */}
        <p className='ml-2'>LH</p>
      </Link>
    </div>
  )
}

export default Logo
