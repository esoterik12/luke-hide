import SelectIcon from '@/components/icons/SelectIcon'
import Link from 'next/link'

const Socials = () => {
  return (
    <div className='flex flex-row gap-2'>
      <Link href='https://github.com/esoterik12'>
        <SelectIcon
          iconClasses='h-8 w-8 shadow-sm rounded-lg'
          iconSelection='github'
        />
      </Link>
    </div>
  )
}

export default Socials
