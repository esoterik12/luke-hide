// May require suppressHydrationWarning in html of layout.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from './InputField'
import { TextareaInput } from './TextareaInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/lib/schemas/schema'
import { sendContact } from '@/lib/actions/sendContact'
import { ContactFormText } from '@/lib/types/types'
import Loading from '../ui/Loading'

export default function ContactForm({
  langProps
}: {
  langProps: ContactFormText
}) {
  const [serverResponse, setServerResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const {
    title,
    subtitleOne,
    subtitleTwo,
    nameLabel,
    emailLabel,
    messageLabel,
    buttonText,
    sendingText,
    loadingText
  } = langProps

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      organization: '',
      email: '',
      text: ''
    }
  })

  const action: () => void = handleSubmit(async data => {
    setLoading(true)

    try {
      const response = await sendContact(data)
      console.log('server action response: ', response)
      if (response?.message) {
        setServerResponse(response.message)
      }
      if (response?.error) {
        setServerResponse(response.message)
      }
    } catch (error) {
      console.log('server action error: ', error)
    } finally {
      setLoading(false)
    }
  })

  if (loading) {
    return (
      <div className='flex items-center justify-center px-4 pt-8'>
        <div className='h-24 w-full max-w-sm rounded-xl p-4 text-center shadow-sm'>
          <p className='mb-4 text-xl'>{loadingText}</p>
          <Loading />
        </div>
      </div>
    )
  }

  if (serverResponse) {
    return (
      <div className='flex items-center justify-center px-4 pt-8'>
        <div className='h-24 w-full max-w-sm rounded-xl border-gray-200 p-4 text-center shadow-sm'>
          <p className='text-xl'>{serverResponse}!</p>{' '}
        </div>
      </div>
    )
  }

  return (
    <div className='mb-16 max-w-[700px]'>
      <h1 className='ml-1 text-3xl font-semibold'>{title}</h1>
      <p className='text-md ml-1 pt-2 text-gray-600 dark:text-gray-400 md:text-lg'>
        {subtitleOne}
      </p>
      <div className='text-md mb-2 ml-1 flex flex-row flex-wrap pb-2 md:text-lg'>
        <p className='text-gray-600 dark:text-gray-400 para-text'>{subtitleTwo}&nbsp;</p>
        <p className='font-semibold para-text'>luke.hide@gmail.com</p>
      </div>
      <div>
        <form className='' noValidate action={action}>
          <div className='flex flex-col gap-x-10 md:flex-row'>
            {/* Name field */}
            <InputField
              type='text'
              id='name'
              loading={loading}
              label={nameLabel}
              labelClasses='para-text'
              inputClasses='pl-2 w-full'
              {...register('name')}
              error={errors.name}
            />

            {/* Email field */}
            <InputField
              type='text'
              id='email'
              loading={loading}
              label={emailLabel}
              labelClasses='para-text'
              inputClasses='pl-2 w-full'
              {...register('email')}
              error={errors.email}
            />
          </div>
          {/* Notes Section */}
          <div className=''>
            <TextareaInput
              id='text'
              loading={loading}
              label={messageLabel}
              placeholder=''
              labelClasses='para-text'
              inputClasses='w-full pl-2 h-20 md:h-32 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none'
              {...register('text')}
              error={errors.text}
            />
          </div>
          <button
            type='submit'
            className={`ml-1 w-32 rounded-xl bg-red-200 p-2 text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-white ${loading ? 'bg-gray-400' : 'hover:bg-gray-400 dark:hover:bg-blue-500'}`}
            disabled={loading}
          >
            {loading ? `${sendingText}` : `${buttonText}`}
          </button>
        </form>
      </div>
    </div>
  )
}
