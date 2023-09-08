import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
               <p className="uppercase text-xl tracking-widest text-[#cfdfe6]">{"</About>"}</p>
                <h2 className="py-4">Bem Kimim</h2>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className="py-2 text-gray-400">// Vay be demek buraya kadar okuyorsun.O zaman bu yazıya <Link href="https://youtu.be/xvFZjo5PgG0"> <span className="text-blue-500 border-b-2 border-gray-500">TIKLA</span></Link></p>

                <p className="py-2 text-gray-300">
                    Selamlar, ben Yiğit 15 yaşındayım. {"İzmir'de"} yaşıyorum 2020-2019{"'"}dan beri yazılım ve bilgisayar üzerine çalışıyorum. Gün geçtikçe kendimi daha çok geliştiriyorum. 
                     <Link className="text-blue-500 underline" href="https://orionhost.com.tr" target="#blank">Orion Hosting{"'"}</Link>in co-sahibi ve front-end geliştiricisiyim.
                    
                </p>
                <p className="py-2 text-blue-300 underline cursor-pointer">Projelerime göz at.</p>
            </div>
            <div className="w-full h-full m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <Image className="rounded-xl" src="https://media.discordapp.net/attachments/1149704738179403806/1149704961433813032/hakkinmda-sag-kisim.jpg" alt="Resim Yüklenemedi" width="730" height="720" clas></Image>
            </div>
        </div>
    </div>
  )
}

export default About
