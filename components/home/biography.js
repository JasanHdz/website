import React, { useContext } from 'react'
import { InfoContext } from '../../context/InfoContext'
import Wrapper from '../common/wrapper'
import BlockOutput from '../content-render/BlockOutput'
import SocialList from './social-list'
// import Link from 'next/link'

function Biography() {
  const { info, language } = useContext(InfoContext)
  const { blocks, profile } = info[language].bio
  console.log(profile)
  const figureStyles = `
    mx-auto overflow-hidden object-fill border-4 
    border-blue-500 rounded-full bg-white 
    xl:w-72 xl:h-72 w-60 h-60
  `
  
  return (
    <div className="lg:py-5" >
      <Wrapper className="md:flex">
        <div>
          <figure className={figureStyles}>
            <img className="rounded object-cover"  src="/jasan.jpg" alt=""/>
          </figure>
          <div className="lg:min-w-max space-y-8 my-8 text-center">
            <BlockOutput chunks={profile && profile.blocks} />
          </div>
          <SocialList />
        </div>
        <div className="bg-black bg-opacity-10 h-px my-7 md:w-px md:mx-8 md:my-0 md:h-auto" />
        <div>
          <div className="text-lg space-y-4" >
            <BlockOutput chunks={blocks} headerStyle="text-4xl mb-2" />
            <a target="_blank" href="/resume-jasandz.pdf" download className="block max-w-max mt-3 bg-blue-600 rounded-md px-2 py-2 text-white" >
              {language === 'ES' ? 'Descargar' : 'Download' } CV
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Biography
