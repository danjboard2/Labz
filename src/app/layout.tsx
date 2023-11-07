
import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'The Labz',
  description: 'Web3 Technology Development & Solutions - Providing adoption at scale through cutting-edge decentralized ecosystem and product builds.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" translate="no" className="notranslate">
     <meta name="google" content="notranslate" />
     <Suspense fallback={<Loading />}>
     <body className="bg-[#000]">{children}</body>
      </Suspense>
    </html>
  )
}
