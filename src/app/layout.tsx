import Head from 'next/head';

import GlobalStyle from '../styles/globalStyles'

import { colors } from '@/utils/baseStyles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <Head>
        <meta
          name='google-site-verification'
          content='j9u3qeAdRsZNjiVE4p72VQSU04sRZA3ec-bq5Qhhmmg'
        />
        <meta httpEquiv='x-ua-compatible' content='IE=edge,chrome=1' />
        <meta name='MobileOptimized' content='320' />
        <meta name='HandheldFriendly' content='True' />
        <meta name='theme-color' content={colors.primary.background} />
        <meta name='color-scheme' content='dark' />
        <meta name='msapplication-TileColor' content={colors.primary.text} />
        <meta name='referrer' content='no-referrer-when-downgrade' />
        <meta name='google' content='notranslate' />

        {/* Facebook */}
        <meta name='og:image' content='/assets/twitter_img.png' />
        <meta name='og:title' content='Welcome to the future | SoundWave' />
        <meta name='og:description' content='Search smarter, not harder' />
        <meta name='og:site_name' content='SoundWave' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content={process.env.NEXT_PUBLIC_SITE_URL} />

        {/* Twitter */}
        <meta name='twitter:image:src' content='/assets/twitter_img.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Welcome to the future | SoundWave' />
        <meta name='twitter:description' content='Search smarter, not harder' />
        <meta name='twitter:site' content='@soundwave_br' />
      </Head>

      <body>{children}</body>
    </html>
  );
}