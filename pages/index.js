
import About from '@/components/About';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head >
        <title>YiitWT | Developer</title>
        <link rel="icon" href="https://media.discordapp.net/attachments/1149704738179403806/1149704961068892241/icon.png" />
        <meta name="title" content="YiitWT"/>
        <meta name="description" content="Selamlar, ben Yiğit Polyglot Developer'im"/>
        <meta name="keywords" content="yiitwt,portifolio,webdeveloper, developer"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Turkish"/>

      </Head>

  

      <Navbar />
      <Main />
      <About />
      <Skills/>
      <Projects />
      <Footer />

    </div>
  )
}
