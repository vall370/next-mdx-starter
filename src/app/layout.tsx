import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.defaultDescription,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
