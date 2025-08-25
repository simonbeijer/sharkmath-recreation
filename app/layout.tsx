import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'SharkMath - The Free, Fun, and Effective Way to Learn Math',
  description:
    'Learning with SharkMath is fun, and research shows that it works!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-body text-text-primary bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
