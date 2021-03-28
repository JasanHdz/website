import Wrapper from './wrapper'
import { IoLanguage } from 'react-icons/io5'
import { useContext } from 'react'
import { InfoContext } from '../../context/InfoContext'

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
    <div className="bg-purple-500 text-white shadow sticky">
      <Wrapper>
        <div className="flex justify-between">
          <p className="italic font-serif">Jasan Hernández</p>
          <ul className="flex text-sm">
            {menux.map(({ name, link, Icon }, idx) => (
              <li key={idx} className="mx-2 first:mx-0">{Icon && <Icon />}<a href={link}>{name[language]}</a></li>
            ))}
            <li className="mx-0">
              <a onClick={handleClick} className="flex items-center cursor-pointer select-none">
                <span className="mr-0.5">{language}</span>
                <IoLanguage />
              </a>
            </li>
          </ul>
        </div>
      </Wrapper> 
    </div>
  )
}

export default Menu
