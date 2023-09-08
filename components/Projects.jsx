import Image from "next/image"
import Link from "next/link"


const Projects = () => {
  return (
<div id="projects" className="w-full">

<div className="max-w-[1250px] mx-auto px-2 py-16">

  <p className="text-xl tracking-widest uppercase text-[#cfdfe6]">{"</Projelerim>"}</p>
  <h2 className="py-4">Projeler</h2>
  <div className="grid md:grid-cols-2 gap-8">

  <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-tr from-[#c1e0ee] to-[#374f5a] ">
        <Image className="rounded-xl group-hover:opacity-10" src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704986977120366/orionhosting.png" alt="/" width="1920" height="1080"/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className="text-2xl text-white tracking-wider text-center">Orion Hosting</h3>
          <p className="pb-4 pt-2 text-white text-center">ExpressJS & Ejs & CSS</p>
          <Link  href="https://orionhost.com.tr" target="#blank">
            <p className="text-center py-4 rounded-lg bg-white text-black font-bold text-lg cursor-pointer" >Göz at</p>
          </Link>
        </div>
    </div>




    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-tr from-[#c1e0ee] to-[#374f5a] ">
        <Image className="rounded-xl group-hover:opacity-10" src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704986117279804/hcmcotureu.png" alt="/" width="1920" height="1080"/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className="text-2xl text-white tracking-wider text-center">HCM Couture</h3>
          <p className="pb-4 pt-2 text-white text-center">Wordpress & HTML + CSS</p>
          <Link  href="https://hcmcouture.com" target="#blank">
            <p className="text-center py-4 rounded-lg bg-white text-black font-bold text-lg cursor-pointer" >Göz at</p>
          </Link>
        </div>
    </div>

    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-tr from-[#c1e0ee] to-[#374f5a] ">
        <Image className="rounded-xl group-hover:opacity-10" src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704986633183333/olablanka.png" alt="/" width="1920" height="1080"/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className="text-2xl text-white tracking-wider text-center">Ola Blanka</h3>
          <p className="pb-4 pt-2 text-white text-center">Wordpress & HTML + CSS</p>
          <Link  href="https://olablanka.com" target="#blank">
            <p className="text-center py-4 rounded-lg bg-white text-black font-bold text-lg cursor-pointer" >Göz at</p>
          </Link>
        </div>
    </div>

    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-tr from-[#c1e0ee] to-[#374f5a] ">
        <Image className="rounded-xl group-hover:opacity-10" src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704987392348230/portscanner.png" alt="/" width="1920" height="1080"/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className="text-2xl text-white tracking-wider text-center">Port Scanner</h3>
          <p className="pb-4 pt-2 text-white text-center">Python</p>
          <Link  href="https://github.com/YiitWT/PortScanner" target="#blank">
            <p className="text-center py-4 rounded-lg bg-white text-black font-bold text-lg cursor-pointer" >Göz at</p>
          </Link>
        </div>
    </div>

    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-tr from-[#c1e0ee] to-[#374f5a] ">
        <Image className="rounded-xl group-hover:opacity-10" src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704985676886088/whicver.png" alt="/" width="1920" height="1080"/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className="text-2xl text-white tracking-wider text-center">WhicVer</h3>
          <p className="pb-4 pt-2 text-white text-center">Python</p>
          <Link  href="https://github.com/YiitWT/PortScanner" target="#blank">
            <p className="text-center py-4 rounded-lg bg-white text-black font-bold text-lg cursor-pointer" >Göz at</p>
          </Link>
        </div>
    </div>

  </div>
</div>

</div>

  
    
  )
}

export default Projects
