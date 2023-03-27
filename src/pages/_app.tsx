import React from 'react'
import localFont from '@next/font/local'

import type { AppProps } from 'next/app'

import GlobalStyle from '../styles/globalStyles'
import 'tailwindcss/tailwind.css'

export const poppins = localFont({
  src: '../../public/fonts/Poppins-Regular.ttf',
  variable: '--font-poppins',
})

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className} font-sans`}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  )
}

export default App