'use client'
// import styles from './home.module.css'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

const styles = {
  container: ' flex flex-col h-screen ',
  title: 'text-center p-2 text-4xl text-zinc-50 border-b-2 border-bg-zinc-50 font-bold',
  ul: 'flex flex-col sm:flex-row sm:mx-auto mx-4 my-4 gap-2',
  li:'py-2 px-6 text-center border-2 border-zinc-50 p-2 text-zinc-50 font-bold rounded-xl hover:bg-zinc-50  hover:text-zinc-900  transition duration-300 ease-in-out',
}

const websiteLinks = {
  'Finance':'/finance',
  'Docebook':'https://docebook.vercel.app/',
  'Dashboard':'/dashboard',
  'Framer':'/framer',
  'Weather':'https://weather.zhoie.com',
  'NASA':'/nasa',

}

export default function Home() {

  const router = useRouter()

  // route to different pages Click
  const handlerRouterClick = (link:string) => {
    router.push(link)
  }
  return (

    // route  diffrerent pages here
    <div className={styles.container}>
      <h1 className={styles.title}>
        Websites practice
      </h1>
      <ul className={styles.ul}>
        {Object.entries(websiteLinks).map(([name, value], index) => (
          <li className={styles.li} key={index}>
            <p className='cursor-pointer' onClick={()=>handlerRouterClick(value)}>{name}</p>
          </li>
        ))}

      </ul>
      <Footer />

    </div>
   
  )
}
