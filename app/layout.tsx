import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Saniya S | MCA Student & Aspiring Data Analyst',
  description: 'Portfolio of Saniya S - MCA Student with strong interest in Data Science, Analytics, and Software Development. Passionate about building impactful solutions and continuously learning emerging technologies.',
  keywords: ['Saniya S', 'MCA', 'Data Analyst', 'Software Developer', 'Portfolio', 'Data Science', 'Python', 'Web Development'],
  authors: [{ name: 'Saniya S' }],
  creator: 'Saniya S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saniya-portfolio.vercel.app',
    title: 'Saniya S | MCA Student & Aspiring Data Analyst',
    description: 'Portfolio of Saniya S - Passionate MCA student building impactful solutions with Data Science and Software Development.',
    siteName: 'Saniya S Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saniya S | MCA Student & Aspiring Data Analyst',
    description: 'Portfolio of Saniya S - Passionate MCA student building impactful solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
