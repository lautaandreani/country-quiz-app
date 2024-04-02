import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import { ProgressContextProvider } from '@/context/quiz'

const VietnamPro = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Country Quiz App',
  description: 'Country quiz app by devchallenges.io',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${VietnamPro.className} isolate`}>
        <ProgressContextProvider>{children}</ProgressContextProvider>
      </body>
    </html>
  )
}
