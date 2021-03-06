import React from 'react'
import Github from '../icons/github'
import Gmail from '../icons/gmail'
import Instagram from '../icons/instagram'
import Linkedin from '../icons/linkedin'
import Phone from '../icons/phone'

function SocialList() {
  const styles = `
    hover:opacity-80 bg-gray-600 rounded-full 
    w-10 h-10 flex items-center justify-center
    lg:w-12 lg:h-12
  `
  return (
    <ul className="flex w-max space-x-2 text-white mx-auto">
      <a target="_blank"  href="https://github.com/JasanHdz" className={styles}>
        <Github className="lg:w-7 lg:h-7" />
      </a>
      <a href="mailto:jasan814@gmail.com" className={styles}>
        <Gmail className="lg:w-7 lg:h-7" />
      </a>
      <a target="_blank" href="https://www.instagram.com/jasanhdz/" className={styles}>
        <Instagram className="lg:w-7 lg:h-7" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/jasanhdz" className={styles}>
        <Linkedin className="lg:w-7 lg:h-7" />
      </a>
      <a href="tel:+522224365850" className={styles}>
        <Phone className="lg:w-7 lg:h-7" />
      </a>
    </ul>
  )
}

export default SocialList
