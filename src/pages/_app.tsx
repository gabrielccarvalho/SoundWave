import React from 'react'
import localFont from '@next/font/local'

import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";

import GlobalStyle from '../styles/globalStyles'

export const poppins = localFont({
  src: '../../public/fonts/Poppins-Regular.ttf',
  variable: '--font-poppins',
})

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={`${poppins.className} font-sans`}>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}

export default App