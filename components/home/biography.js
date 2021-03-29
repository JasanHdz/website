import React, { useContext } from 'react'
import { InfoContext } from '../../context/InfoContext'
import Wrapper from '../common/wrapper'
import BlockOutput from '../content-render/BlockOutput'
import SocialList from './social-list'

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
    <div>
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5">
          <div className="md:col-start-1 md:col-end-2">
            <figure className={figureStyles}>
              <img className="rounded object-cover"  src="/jasan.jpg" alt=""/>
            </figure>
            <div className="space-y-8 my-8 text-center">
              <BlockOutput chunks={profile && profile.blocks} />
            </div>
            <SocialList />
          </div>
          <div className="md:col-start-2 md:col-end-4">
            <div className="text-lg space-y-4" >
              <BlockOutput chunks={blocks} headerStyle="text-4xl mb-2" />
              {/* <Link href="/resume-jasandz.pdf"> */}
                <a className="block max-w-max mt-3 bg-blue-600 rounded-md px-2 py-2 text-white" >
                  {language === 'ES' ? 'Descargar' : 'Download' } CV
                </a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Biography
