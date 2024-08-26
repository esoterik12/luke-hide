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
import IconCSS from './stack-logos/IconCSS'
import IconPostgres from './stack-logos/IconPostgres'
import IconBackArrow from './IconBackArrow'
import IconWeb from './IconWeb'
import IconAcademicCap from './IconAcademicCap'
import IconEmail from './IconEmail'
import IconHTML from './stack-logos/IconHTML'
import IconNode from './stack-logos/IconNode'
import IconClerk from './tech-icons/IconClerk'
import IconSendgrid from './tech-icons/IconTwilio'
import IconJavascript from './stack-logos/IconJavaScript'
import IconChatGPT from './tech-icons/IconChatGPT'
import IconNextAuth from './tech-icons/IconNextAuth'
import IconReactContext from './tech-icons/IconReactContext'
import IconRTK from './tech-icons/IconRTK'
import IconReactHookForm from './tech-icons/IconReactHookForm'

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
    case 'React':
      icon = <IconReactJS classes={iconClasses} hslColor={hslColor} />
      break
    case 'NextJS':
      icon = <IconNextJS classes={iconClasses} />
      break
    case 'MongoDB':
      icon = <IconMongoDB classes={iconClasses} hslColor={hslColor} />
      break
    case 'Tailwind':
      icon = <IconTailwind classes={iconClasses} hslColor={hslColor} />
      break
    case 'TypeScript':
      icon = <IconTypeScript classes={iconClasses} hslColor={hslColor} />
      break
    case 'Three.js':
      icon = (
        <IconThreeJS
          classes={iconClasses}
          hslColor={hslColor}
          fillHex={fillHex}
        />
      )
      break
    case 'CSS':
      icon = <IconCSS classes={iconClasses} />
      break
    case 'PostgreSQL':
      icon = <IconPostgres classes={iconClasses} fillHex={fillHex} />
      break
    case 'rightArrowCircle':
      icon = <IconRightArrowCircle classes={iconClasses} />
      break
    case 'leftArrowCircle':
      icon = <IconLeftArrowCircle classes={iconClasses} />
      break
    case 'backArrow':
      icon = <IconBackArrow classes={iconClasses} fillHex={fillHex} />
      break
    case 'web':
      icon = <IconWeb classes={iconClasses} />
      break
    case 'email':
      icon = <IconEmail classes={iconClasses} />
      break
    case 'academic':
      icon = <IconAcademicCap classes={iconClasses} />
      break
    case 'HTML':
      icon = <IconHTML classes={iconClasses} />
      break
    case 'Node.js':
      icon = <IconNode classes={iconClasses} />
      break
    case 'Clerk':
      icon = <IconClerk classes={iconClasses} />
      break
    case 'SendGrid':
      icon = <IconSendgrid classes={iconClasses} />
      break
    case 'JavaScript':
      icon = <IconJavascript classes={iconClasses} />
      break
    case 'ChatGPT API':
      icon = <IconChatGPT classes={iconClasses} />
      break
    case 'NextAuth':
      icon = <IconNextAuth classes={iconClasses} />
      break
    case 'React Context':
      icon = <IconReactContext classes={iconClasses} />
      break
    case 'Redux Toolkit':
      icon = <IconRTK classes={iconClasses} />
      break
    case 'React Hook Form':
      icon = <IconReactHookForm classes={iconClasses} />
      break
    default:
      icon = <p className='text-red-500'>Error: No Icon Found</p>
  }

  return <>{icon}</>
}
