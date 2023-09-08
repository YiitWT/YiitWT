import Link from 'next/link'
import { FaDiscord, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen  text-center'>
        
        <div className='max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>

            <div >
                <p  className='uppercase text-sm tracking-widest text-gray-400'><Link href="https://youtu.be/zkIqz2U6Vc0">WUBBA LUBBA DUB DUB</Link></p>
                <h1 className='py-4 text-gray-200'>Merhaba, Ben <span className='text-[#6249d1]'>Yiğit</span>!</h1>
                <h2 className='py-2 text-gray-200'>
                Polyglot Developer.
                </h2>
                <p className='py-4 text-gray-400 max-w-[70%] m-auto'>
                    Selam, ben bir Polyglot Geliştiriciyim, fakat çoğunlukla Web Geliştiriciliği üzerine çalışıyorum. Şuan yeni framework{"'"}ler ve JAVA öğrenmeye çalışıyorum.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                 <Link href="https://github.com/YiitWT" target='#blank'>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                </Link> 
                <Link href="https://www.instagram.com/yiitwt/" target='#blank'>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram />
                </div>
                </Link>
                <Link href="https://youtube.com/@YiitWT" target='#blank'>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaYoutube />
                </div>
                </Link>
                <Link href="https://discord.gg/whW7c9azVF" target='#blank'>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaDiscord />
                </div>
                </Link>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Main
