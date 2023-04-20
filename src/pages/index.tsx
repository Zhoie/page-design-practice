import Image from 'next/image'
import { Inter } from 'next/font/google'

import { useRouter } from 'next/router'



const inter = Inter({ subsets: ['latin'] })

const styles = {
  container: 'flex flex-col  p-4 mx-auto items-center justify-between',
  title: 'p-2 text-4xl text-zinc-50 border-b-2 border-bg-zinc-50 font-bold',
  ul: 'mt-2 p-4 text-xl text-zinc-50 font-bold hover:scale-110 transform transition duration-500 ease-in-out',
}

export default function Home() {

  const router = useRouter()
  return (

    // route  diffrerent pages here
    <div className={styles.container}>
      <h1 className={styles.title}>
        Websites practice
      </h1>
      <ol className={styles.ul}>
        <li>
          <a href="/finance">Finance</a>
        </li>

      </ol>

    </div>
  )
}
