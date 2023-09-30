import './globals.css'
import type { Metadata } from 'next'
import 'rsuite/dist/rsuite.min.css';
import '../app/nav-overrides.css';

export const metadata: Metadata = {
  title: 'The Labz',
  description: 'Web3 Technology Development & Solutions - Providing adoption at scale through cutting-edge decentralized ecosystem and product builds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" bg-[#000]">{children}</body>
    </html>
  )
}
