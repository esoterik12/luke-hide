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

// General Icons:
import IconRightArrowCircle from './IconRightArrowCircle'
import IconLeftArrowCircle from './IconLeftArrowCircle'
import IconThreeJS from './stack-logos/IconThreeJS'

interface SelectIconProps {
  iconSelection: string
  iconClasses: string
  hslColor?: string
  fillHex?: string | undefined
}

export default function SelectIcon({
  iconSelection,
  iconClasses,
  hslColor,
  fillHex
}: SelectIconProps) {
  let icon

  switch (iconSelection) {
    case 'facebook':
      icon = <IconFacebook classes={iconClasses} hslColor={hslColor} />
      break
    case 'instagram':
      icon = <IconInstagram classes={iconClasses} hslColor={hslColor} />
      break
    case 'github':
      icon = <IconGithub classes={iconClasses} hslColor={hslColor} />
      break
    case 'soundcloud':
      icon = <IconSoundcloud classes={iconClasses} hslColor={hslColor} />
      break
    case 'reactjs':
      icon = <IconReactJS classes={iconClasses} hslColor={hslColor} />
      break
    case 'nextjs':
      icon = (
        <IconNextJS
          classes={iconClasses}
          hslColor={hslColor}
          fillHex={fillHex}
        />
      )
      break
    case 'mongodb':
      icon = <IconMongoDB classes={iconClasses} hslColor={hslColor} />
      break
    case 'tailwind':
      icon = <IconTailwind classes={iconClasses} hslColor={hslColor} />
      break
    case 'typescript':
      icon = <IconTypeScript classes={iconClasses} hslColor={hslColor} />
      break
    case 'threejs':
      icon = (
        <IconThreeJS
          classes={iconClasses}
          hslColor={hslColor}
          fillHex={fillHex}
        />
      )
      break
    case 'rightArrowCircle':
      icon = <IconRightArrowCircle classes={iconClasses} />
      break
    case 'leftArrowCircle':
      icon = <IconLeftArrowCircle classes={iconClasses} />
      break
    default:
      icon = <p className='text-red-500'>Error: No Icon Found</p>
  }

  return <>{icon}</>
}
