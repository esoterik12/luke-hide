import SelectIcon from '@/components/icons/SelectIcon'

type Props = {}

const Socials = (props: Props) => {
  return (
    <div className='flex flex-row justify-center gap-2'>
      <SelectIcon
        iconClasses='h-8 w-8 shadow-sm rounded-lg'
        iconSelection='github'
      />
      <SelectIcon
        iconClasses='h-8 w-8 shadow-sm rounded-lg'
        iconSelection='instagram'
      />
      <SelectIcon
        iconClasses='h-8 w-8 shadow-sm rounded-lg'
        iconSelection='facebook'
      />
    </div>
  )
}

export default Socials
