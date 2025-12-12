'use client'
import './globals.css'
import Navigation from '@/components/navigation/navigation-component'
import { Footer } from '@/components/footer/Footer' // Import your existing Footer component
import { usePathname } from 'next/navigation'

import { Roboto, Inter, Poppins } from 'next/font/google'

const roboto = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
