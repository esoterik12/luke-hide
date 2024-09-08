import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name is required.')
    .max(255, 'Your name is too long.'),
  email: z.string().trim().email(),
  text: z
    .string()
    .trim()
    .min(2, 'A message is required.')
    .max(5000, '5000 characters is the message limit.')
})
