import './globals.css'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'

// Use Inter for body text
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Use Poppins for headings
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

// Use JetBrains Mono for code samples
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata = {
  title: 'CodeForgeAI - Next Generation AI-Powered IDE',
  description: 'Experience the future of coding with CodeForgeAI, featuring advanced AI assistance, real-time collaboration, and decentralized infrastructure.',
  keywords: 'AI coding, decentralized development, blockchain IDE, smart contract development',
  openGraph: {
    title: 'CodeForgeAI - Next Generation AI-Powered IDE',
    description: 'Experience the future of coding with CodeForgeAI, featuring advanced AI assistance and real-time collaboration.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="font-sans bg-gradient-to-bl from-black to-[#0a0a0a]">
        {children}
      </body>
    </html>
  )
}
