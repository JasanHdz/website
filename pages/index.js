import { useContext, useEffect } from 'react'
import Menu from '../components/common/menu'
import Biography from '../components/home/biography'
import { InfoContext } from '../context/InfoContext'
import json from '../data.json'
import Skills from '../components/home/skills'
import Footer from '../components/common/footer'
import Experience from '../components/home/experience'

function Home(data) {
  const { setInfo, setLanguage } = useContext(InfoContext)
  useEffect(() => {
    setInfo(data)
    if (localStorage.getItem('language')) {
      setLanguage(localStorage.getItem('language'))
    }
  }, [data])

  return (
    <>
      <Menu />
      <Biography />
      <Experience />
      <Skills />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: json
  }
}

export default Home
