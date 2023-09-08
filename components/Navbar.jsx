import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaDiscord, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';


export const Navbar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}
    

  return ( 
    
    

    <div className="bg-[#1e1f22] fixed w-full h-20 shadow-xl z-[100] px-2">

     

      <div className="flex justify-between shadow-gray-600 items-center w-full h-full px-2:px-16">
        {/* <Image src="/assets/indir.png" alt="/" width="100" height="50" /> */}


        <Link href="/">
        <h2>YiitWT</h2>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="#main">
              <li className="ml-10 text-sm uppercase hover:border-b">Ana Sayfa</li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Hakkımda
              </li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Yetenekler
              </li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projeler
              </li>
            </Link>
            <Link href="https://linktr.ee/YiitWT" target="#blank">
              <li className="ml-10 text-sm uppercase hover:border-b">
                İletişim
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "md:hidden  duration-400 fixed left=0 top-0 w-full h-screen bg-black/75" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#2e3035] p-10 ease-in duration-500"
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            {/* <Image src="/assets/indir.png" alt="/" width="87" height="35" /> */}
            <Link href="/">
            <h2>YiitWT</h2>
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <h3>
              <Link href="https://youtu.be/zkIqz2U6Vc0">
                WUBBA LUBBA DUB DUB
              </Link>
            </h3>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
            <Link href="#main">
<li className="py-4 text-sml">Ana Sayfa</li>
</Link>
<Link href="#about">
<li className="py-4 text-sml">
  Hakkımda
</li>
</Link>
<Link href="#skills">
<li className="py-4 text-sml">
  Yetenekler
</li>
</Link>
<Link href="#projects">
<li className="py-4 text-sml">
  Projeler
</li>
</Link>
<Link href="https://linktr.ee/YiitWT" target="#blank">
<li className="py-4 text-sml">
  İletişim
</li>
</Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">Sosyal</p>
              <div className="flex items-center justify-between my-2 sm:w-[80%]">
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
      </div>


     
    </div>
  );
}

export default Navbar
