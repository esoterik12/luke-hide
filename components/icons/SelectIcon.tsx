// This is used for dynamically rendering icons in list pages depending on json data
// Socials:
import IconFacebook from './social-icons/IconFacebook'
import IconGithub from './social-icons/IconGithub'
import IconInstagram from './social-icons/IconInstagram'
import IconSoundcloud from './social-icons/IconSoundcloud'
// Tech Icons
import IconReactJS from './stack-logos/IconReactJS'
import IconNextJS from './stack-logos/IconNextJS'
import IconMongoDB from './stack-logos/IconMongoDB'
import IconTailwind from './stack-logos/IconTailwind'
import IconTypeScript from './stack-logos/IconTypeScript'

interface ISelectIconProps {
  iconSelection: string
  iconClasses: string
}

export default function SelectIcon({
  iconSelection,
  iconClasses
}: ISelectIconProps) {
  let icon

  switch (iconSelection) {
    case 'facebook':
      icon = <IconFacebook classes={iconClasses} />
      break
    case 'instagram':
      icon = <IconInstagram classes={iconClasses} />
      break
    case 'github':
      icon = <IconGithub classes={iconClasses} />
      break
    case 'soundcloud':
      icon = <IconSoundcloud classes={iconClasses} />
      break

    case 'reactjs':
      icon = <IconReactJS classes={iconClasses} />
      break
    case 'nextjs':
      icon = <IconNextJS classes={iconClasses} />
      break
    case 'mongodb':
      icon = <IconMongoDB classes={iconClasses} />
      break
    case 'tailwind':
      icon = <IconTailwind classes={iconClasses} />
      break
    case 'typescript':
      icon = <IconTypeScript classes={iconClasses} />
      break
    default:
      icon = <p className='text-red-500'>Error: No Icon Found</p>
  }

  return <>{icon}</>
}
