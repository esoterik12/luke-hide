'use server'
import { contactSchema } from '../schemas/schema'
import sgMail from '@sendgrid/mail'
import { ContactFormData } from '../types/types'

export async function sendContact(data: ContactFormData) {
  const result = contactSchema.safeParse({
    name: data.name,
    organization: data.organization,
    email: data.email,
    text: data.text
  })

  if (result.success) {
    console.log('success in _actions.ts: ', result.data)

    // Sendgrid //
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
    const msg = {
      to: 'luke.hide@gmail.com',
      from: 'luke.hide@gmail.com',
      subject: 'Contact Request from Portfolio Page',
      text: 'You have recieved a contact request from your portfolio page.',
      html: `
        <p>Contact Name: ${result.data.name}</p>
        <p>Contact Organization: ${result.data.organization}</p>
        <p>Contact Email: ${result.data.email}</p>
        <p>Message: ${result.data.text}</p>
      `
    }

    try {
      await sgMail.send(msg)
      console.log('Email sent')
    } catch (error: unknown) {
      console.error('Failed to send email due to an unexpected error.')

      if (error instanceof Error) {
        console.error('Error message:', error.message)
        // If the error is from SendGrid and includes a response
        if ('response' in error && error.response) {
          const errorCode = 'SENDGRID_ERROR'
          const errorMessage = 'An error occurred with the Sendgrid API.'
          console.error('SendGrid error response:', error.response)
          return {
            error: { message: errorMessage, code: errorCode },
            message: 'Request Failed'
          }
        }
      } else {
        const errorMessage = 'An unknown error occurred.'
        const errorCode = 'UNKNOWN_ERROR'

        // Not an Error object
        console.error('Unexpected error:', error)
        return {
          error: { message: errorMessage, code: errorCode },
          message: 'Request Failed'
        }
      }
    }

    // End sendgrid //

    return { code: 200, data: result.data, message: 'Request Successful' }
  }

  if (result.error) {
    console.log('error in _actions.ts: ', result.error)
    return { error: result.error.format(), message: 'Request Failed' }
  }
}
