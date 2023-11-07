
"use client"
import './globals.css'
import { Suspense } from 'react';
import Loading from './loading';


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
