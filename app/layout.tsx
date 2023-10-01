import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight:["300","400","500","600","700"],
})

export const metadata: Metadata = {
  title: 'AI-STUDIO',
  description: 'Generated AI Systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className='px-2 md:px-20 lg:px-40'>
          {children}
        </main>
      </body>
    </html>
  )
}
