import Image from "next/image"

const Skills = () => {
  return (
    <div id='skills'className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#cfdfe6]">{"</Skills>"}</p>
            <h2 className="py-4">Kullandığım Teknolojiler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704963430285383/node.png" alt="/" width="64" height="64"/>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>NodeJS</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704962226524200/html.png" alt="/" width="64" height="64"/>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704963707125782/python.png" alt="/" width="64" height="64"/>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Python</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704961685458964/css.png" alt="/" width="64" height="64"/>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>CSS</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704963069579326/nextjs.png" alt="/" width="64" height="64"/>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>NextJS</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src="https://cdn.discordapp.com/attachments/1149704738179403806/1149704962524315718/java.png" alt="/" width='38' height="64"/>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Java</h3>
                  </div>
                </div>
              </div>

              

            </div>
        </div>
    </div>
  )
}

export default Skills
