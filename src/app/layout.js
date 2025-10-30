'use client'
import './globals.css'
import Navigation from '@/components/navigation/navigation-component'
import { Footer } from '@/components/footer/Footer' // Import your existing Footer component
import { usePathname } from 'next/navigation'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Navigation />
        {children}
        {!(isHomePage || pathname === '/contact') && <Footer />}
      </body>
    </html>
  )
}
