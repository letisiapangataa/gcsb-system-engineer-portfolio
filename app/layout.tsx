import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GCSB System Engineer Portfolio - Letisia Pangataa',
  description: 'Portfolio showcasing technical skills for GCSB System Engineer Level 1 position',
  keywords: 'System Engineer, GCSB, Infrastructure, Security, Windows, Linux, PowerShell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
