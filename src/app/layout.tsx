import './globals.css'
import { Jost } from 'next/font/google'

export const metadata = {
  title: 'websites practice',
  description: 'a website for pages practice',
}

const jost = Jost({ weight: '600', subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={jost.className}>
      <body>{children}</body>
    </html>
  )
}
