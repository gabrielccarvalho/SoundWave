import React from 'react'
import Head from 'next/head'

import { colors } from '@/utils/baseStyles'

interface SEOProps {
  title: string
  description: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
}

export default function SEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
}: SEOProps) {
  const pageTitle = `${title} ${shouldExcludeTitleSuffix ? '' : '| SoundWave'}`
  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}` : undefined

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name='description' content={description} />}
      {pageImage && <meta name='image' content={pageImage} />}
      {!shouldIndexPage && <meta name='robots' content='noindex,nofollow' />}

      <meta httpEquiv='x-ua-compatible' content='IE=edge,chrome=1' />
      <meta name='MobileOptimized' content='320' />
      <meta name='HandheldFriendly' content='True' />
      <meta name='theme-color' content={colors.primary.background} />
      <meta name='msapplication-TileColor' content={colors.primary.text} />
      <meta name='referrer' content='no-referrer-when-downgrade' />
      <meta name='google' content='notranslate' />

      {/* Facebook */}
      {pageImage && <meta property='og:image' content={pageImage} />}
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content='SoundWave' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={process.env.NEXT_PUBLIC_SITE_URL} />

      {/* Twitter */}
      {pageImage && <meta property='twitter:image' content={pageImage} />}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content={pageTitle} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:site' content='@soundwave_br' />
      <meta property='twitter:creator' content='@soundwave_br' />

    </Head>
  )
}