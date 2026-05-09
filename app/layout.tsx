import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NavigationControls } from '@/components/navigation-controls'
import './globals.css'

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'مساعد PDF الذكي | رؤية 2030',
  description: 'مساعدك الذكي لتحليل وفهم ملفات PDF باستخدام الذكاء الاصطناعي - مستوحى من رؤية السعودية 2030',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${cairo.variable} font-sans antialiased`}>
        <NavigationControls />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
