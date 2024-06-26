import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-primary flex min-h-screen flex-col justify-between font-medium`}
      >
        <Header />
        <main className="mb-0 flex flex-col items-center">{children}</main>
        <div id="modal-root"></div>
        <Footer />
      </body>
    </html>
  )
}
