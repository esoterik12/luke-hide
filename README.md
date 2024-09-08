This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# i18n support:
- middleware.ts setup to redirect for locales en, fr, es, zh
- uses json files in dictionaries folders
- dependent on negotiator package / npm i negotiator / npm i --save-dev
  @types/negotiator
- npm i @formatjs/intl-localematcher
- i18n.config.ts
- [lang] folder for dynamic route in app directory
- Add generateStaticParams to layout.tsx
- LocaleSwitcher component uses on svg flags in /public/images/flags

# prettier and prettier plugin for tailwind
- npm install -D prettier prettier-plugin-tailwindcss

# Taiwlind custom classes:
- A few tailwind custom classes for text in /app/[lang]/global.css

# Theme support:
- Add darkMode: 'class' to tailwind.config.ts
- npm i next-themes
- wrap layout in <ThemeProvider>
- Add attribute='class' defaultTheme='dark' props to ThemeProvider

# Icons:
- Using custom svg icons (free svg code found online) with a SelectIcon
  component to select icons in use - /components/icons

# Framer-motion:
- Used in basic fade in and out animations for homepage and projects page

# React-hook-form /w zod:
- Contact page uses react hook form with zod as dependencies
- npm i react-hook-form zod @hookform/resolvers 
- npm i @sendgrid/mail
- Sendgrid used to send myself an email with server action