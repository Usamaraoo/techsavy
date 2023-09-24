"use client"

import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechSavy Group | Digital Solutions, Web Development, SEO &amp; Marketing',
  description: `
  Scale your online presence with TechSavy Group&#39;s top-tier web development, SEO, and
  marketing solutions. Contact us for expert digital services.`,

}

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== '/' && <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  )
}
