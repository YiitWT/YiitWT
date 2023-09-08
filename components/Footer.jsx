import Link from "next/link"



const Footer = () => {
  return (
    <footer className=' w-full h-max[500px] bg-[#2b2d31] border-t-gray-600 border-t-4'>
      <h2 className="text-center text-[1.7rem] text-gray-200 ">YiitWT{"'"}s Portifolio</h2>
     
      <p className="py-5 text-bold text-m text-center text-gray-300">Made by <Link className="text-blue-300 underline" href="https://github.com/YiitWT">YiitWT</Link> with <span className="text-red-500 text-lg">♡</span> </p>
    </footer>
  )
}

export default Footer