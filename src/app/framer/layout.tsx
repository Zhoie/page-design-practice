import './framer.css'

export const metadata = {
    title: 'NASA',

}

export default function FramerLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en" >
            <head><title>Framer</title></head>
        
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}