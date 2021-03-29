import React from 'react'
import Github from '../icons/github'
import Gmail from '../icons/gmail'
import Instagram from '../icons/instagram'
import Linkedin from '../icons/linkedin'
import Phone from '../icons/phone'

function SocialList() {
  const styles = `
    hover:opacity-80 bg-gray-600 rounded-full 
    w-12 h-12 flex items-center justify-center
  `
  return (
    <ul className="grid grid-cols-5 text-white gap-x-1 max-w-xs mx-auto mb-7">
      <a target="_blank"  href="https://github.com/JasanHdz" className={styles}>
        <Github size={28} />
      </a>
      <a href="mailto:jasan814@gmail.com" className={styles}>
        <Gmail size={28} />
      </a>
      <a target="_blank" href="https://www.instagram.com/jasanhdz/" className={styles}>
        <Instagram size={28} />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/jasanhdz" className={styles}>
        <Linkedin size={28} />
      </a>
      <a href="tel:+522224365850" className={styles}>
        <Phone size={28} />
      </a>
    </ul>
  )
}

export default SocialList
