// May require suppressHydrationWarning in html of layout.tsx
'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputField } from './InputField'
import { TextareaInput } from './TextareaInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/lib/schemas/schema'
import { sendContact } from '@/lib/actions/sendContact'
import { ContactFormText } from '@/lib/types/types'

export default function ContactForm({
  title,
  nameLabel,
  emailLabel,
  messageLabel,
  buttonText,
  sendingText,
  loadingText
}: ContactFormText) {
  const [serverResponse, setServerResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

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
        <div className='h-24 w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm'>
          <p className='mb-4 text-lg text-gray-500'>Loading...</p>
        </div>
      </div>
    )
  }

  if (serverResponse) {
    return (
      <div className='flex items-center justify-center px-4 pt-8'>
        <div className='h-24 w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm'>
          <p className='text-sm text-gray-700'>{serverResponse}</p>{' '}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className='mt-6 py-3 text-xl font-semibold text-gray-600'>{title}</h1>
      <div>
        <form className='' noValidate action={action}>
          {/* Name field */}
          <InputField
            type='text'
            id='name'
            loading={loading}
            label={nameLabel}
            placeholder='...'
            {...register('name')}
            error={errors.name}
          />

          {/* Email field */}
          <InputField
            type='text'
            id='email'
            loading={loading}
            label={emailLabel}
            placeholder='...'
            {...register('email')}
            error={errors.email}
          />

          {/* Notes Section */}
          <div className='mt-6'>
            <TextareaInput
              id='text'
              loading={loading}
              label={messageLabel}
              placeholder='...'
              inputClasses='w-full h-32 p-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none'
              {...register('text')}
              error={errors.text}
            />
          </div>
          <button
            type='submit'
            className={`mt-4 rounded-xl px-6 py-2 font-semibold text-white transition-colors duration-150 ${loading ? 'bg-gray-400' : 'bg-gray-900 hover:bg-gray-600'}`}
            disabled={loading}
          >
            {loading ? `${sendingText}` : `${buttonText}`}
          </button>
        </form>
      </div>
    </div>
  )
}
