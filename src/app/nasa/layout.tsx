
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'], display: 'swap' })
export const metadata = {
    title: 'NASA',
    // description: 'a website for pages practice',
  }

export default function NasaLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang='en' className={ubuntu.className}>
            <head>
                {/* <title>NASA</title> */}
            </head>
            <body>{children}</body>
        </html>
    )
}