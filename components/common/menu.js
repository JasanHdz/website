import Wrapper from './wrapper'
import { IoLanguage } from 'react-icons/io5'
import { useContext } from 'react'
import { InfoContext } from '../../context/InfoContext'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import HeaderMenu from './header-menu'

const menux = [
  {
    name: {
      ES: "Inicio",
      EN: "Home"
    },
    link: '#home',
  },
  {
    name: {
      ES: 'Sobre Mí',
      EN: 'About Me'
    },
    link: '#home',
  },
  {
    name: {
      ES: 'Habilidades',
      EN: 'Habilities'
    },
    link: '#home',
  },
  {
    name: {
      ES: 'Proyectos',
      EN: 'Projects'
    },
    link: '#home',
  },
  {
    name: {
      ES: 'Contacto',
      EN: 'Contact'
    },
    link: '#home',
  },
]


function Menu() {
  const { setLanguage, language } = useContext(InfoContext)
  const handleClick = (event) => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'EN')
    } else {
      if (localStorage.getItem('language') === 'EN') {
        localStorage.setItem('language', 'ES')
      } else {
        localStorage.setItem('language', 'EN')
      }
    }
    setLanguage(localStorage.getItem('language'))
  }
  return (
    <div className="bg-purple-500 text-white shadow-md sticky top-0 left-0 right-0 z-10">
      <Wrapper>
        <div className="flex justify-between">
          <input className="hidden" type="checkbox" name="toogle-button" id="checkbox"/>
          <HeaderMenu Icon={FiMenu} id="open" />
          <ul id="menu" className="opacity-10 transform translate-x-full fixed top-0 left-0 right-0 bottom-0 p-4 lg:p-0 lg:static lg:flex lg:flex-wrap bg-purple-500 lg:bg-none lg:translate-x-0 lg:opacity-100">
            <HeaderMenu Icon={MdClose} id="close" visible="lg:hidden" />
            <div className="text-xl space-y-5 uppercase transform translate-y-1/2 absolute bottom-1/2 lg:transform-none lg:static lg:flex lg:text-base lg:space-y-0">
              {menux.map(({ name, link, Icon }, idx) => (
                <li key={idx} className="lg:mx-2 lg:first:mx-0">{Icon && <Icon />}<a href={link}>{name[language]}</a></li>
              ))}
              <li className="mx-0">
                <a onClick={handleClick} className="flex items-center cursor-pointer select-none">
                  <span className="mr-0.5">{language}</span>
                  <IoLanguage />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </Wrapper> 
    </div>
  )
}

export default Menu
