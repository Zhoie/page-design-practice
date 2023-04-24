


import { useRouter } from 'next/router'
import Footer from '@/components/global/Footer'

const styles = {
  container: 'flex flex-col  p-4 mx-auto items-center justify-between',
  title: 'p-2 text-4xl text-zinc-50 border-b-2 border-bg-zinc-50 font-bold',
  ul: 'mt-2 p-4 text-xl text-zinc-50 font-bold hover:scale-110 transform transition duration-500 ease-in-out',
  li:'border-2 border-zinc-50 p-2 rounded-xl hover:bg-zinc-50 hover:text-zinc-900 transition duration-300 ease-in-out',
}

const websiteLinks = {
  'finance':'/finance'
}

export default function Home() {

  const router = useRouter()

  const handlerRouterClick = (link:string) => {
    router.push('/finance')
  }
  return (

    // route  diffrerent pages here
    <div className={styles.container}>
      <h1 className={styles.title}>
        Websites practice
      </h1>
      <ol className={styles.ul}>
        {Object.entries(websiteLinks).map(([name, value], index) => (
          <li className={styles.li} key={index}>
            <p className='cursor-pointer' onClick={()=>handlerRouterClick(value)}>{name}</p>
          </li>
        ))}
        {/* <li className={styles.li}>
          <p className='cursor-pointer' onClick={handlerRouterClick}>Finance</p>
      
        </li> */}

      </ol>
      <Footer />

    </div>
   
  )
}
