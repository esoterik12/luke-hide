import NavLink from '../ui/NavLink'
import SelectIcon from '../icons/SelectIcon'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

const BotBarMobileOnly = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang)

  const sideBarLinks = [
    {
      id: 1,
      link: '/contact',
      name: navigation.contact,
      icon: 'email'
    },
    {
      id: 2,
      link: '/projects',
      name: navigation.projects,
      icon: 'web'
    },
    {
      id: 3,
      link: '/resume',
      name: navigation.resume,
      icon: 'academic'
    }
  ]

  return (
    <section className='xs:px-7 fixed bottom-0 z-10 w-full rounded-t-3xl py-1 px-6 backdrop-blur-lg sm:hidden'>
      <div className='xs:gap-5 flex flex-row items-center justify-between gap-3'>
        {sideBarLinks.map(item => (
          <div key={item.id} className='m-2 flex flex-col items-center gap-2'>
            <NavLink
              classes='text-light-1 flex flex-col items-center text-sm'
              href={`/${lang}/${item.link}`}
            >
              <SelectIcon iconClasses='h-6 w-6' iconSelection={item.icon} />
              <p className='text-[15px]'>{item.name}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BotBarMobileOnly
