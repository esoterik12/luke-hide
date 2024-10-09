// May require suppressHydrationWarning in html of layout.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from './InputField'
import { TextareaInput } from './TextareaInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/lib/schemas/schema'
import { sendContact } from '@/lib/actions/sendContact'
import { ContactFormText, SendgridResponse } from '@/lib/types/types'
import Loading from '../ui/Loading'

export default function ContactForm({
  langProps
}: {
  langProps: ContactFormText
}) {
  const [serverResponse, setServerResponse] = useState<SendgridResponse | null>(
    null
  )

  const [loading, setLoading] = useState(false)

  const {
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
        setServerResponse(response)
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
          <p className='mb-4 text-xl'>{langProps.loadingText}</p>
          <Loading />
        </div>
      </div>
    )
  }

  if (serverResponse && serverResponse.code === 200 && serverResponse.data) {
    return (
      <div className='flex items-center justify-center px-4 pt-8'>
        <div className='w-full rounded-xl border-gray-200 p-4 text-center shadow-sm'>
          <p className='text-xl'>{langProps.thankYou}</p>
          <p className='text-xl text-gray-500'>{langProps.yourMessage}</p>
          <p className='m-2 rounded-lg border-2 border-red-300 bg-red-200 p-6 text-xl text-black'>
            {serverResponse.data.text}
          </p>
          <p className='text-xl text-gray-500'>{langProps.hasBeenSentTo}</p>
          <p className='text-xl'>luke.hide@gmail.com</p>
        </div>
      </div>
    )
  }

  if (serverResponse?.code === 400) {
    return (
      <div className='flex items-center justify-center px-4 pt-8'>
        <div className='h-24 w-full max-w-sm rounded-xl border-gray-200 p-4 text-center shadow-sm'>
          <p className='text-xl'>{langProps.error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className=' max-w-[700px]'>
      <h1 className='ml-1 text-3xl font-semibold'>{langProps.title}</h1>
      {/* <p className='text-md ml-1 pt-2 text-gray-600 dark:text-gray-400 md:text-lg'>
        {langProps.subtitleOne}
      </p> */}
      <div className='text-md mb-2 ml-1 flex flex-row flex-wrap pb-2 md:text-lg'>
        <p className='para-text text-gray-600 dark:text-gray-400'>
          {langProps.subtitleTwo}&nbsp;
        </p>
        <p className='para-text font-semibold'>luke.hide@gmail.com</p>
      </div>
      <div>
        <form className='' noValidate action={action}>
          <div className='flex flex-col gap-x-10 md:flex-row'>
            {/* Name field */}
            <InputField
              type='text'
              id='name'
              loading={loading}
              label={langProps.nameLabel}
              labelClasses='para-text'
              inputClasses='pl-2 w-full max-w-[615px]'
              {...register('name')}
              error={errors.name}
            />

            {/* Email field */}
            <InputField
              type='text'
              id='email'
              loading={loading}
              label={langProps.emailLabel}
              labelClasses='para-text'
              inputClasses='pl-2 w-full max-w-[615px]'
              {...register('email')}
              error={errors.email}
            />
          </div>
          {/* Notes Section */}
          <div className=''>
            <TextareaInput
              id='text'
              loading={loading}
              label={langProps.messageLabel}
              placeholder=''
              labelClasses='para-text'
              inputClasses='w-full max-w-[615px] pl-2 h-20 md:h-32 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none'
              {...register('text')}
              error={errors.text}
            />
          </div>
          <button
            type='submit'
            className={`ml-1 w-32 text-white rounded-xl bg-blue-400 p-2 text-xl font-semibold ${loading ? 'bg-gray-400' : 'custom-hover-effect '}`}
            disabled={loading}
          >
            {loading ? `${langProps.sendingText}` : `${langProps.buttonText}`}
          </button>
        </form>
      </div>
    </div>
  )
}
