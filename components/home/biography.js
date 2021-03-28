import React, { useContext } from 'react'
import { InfoContext } from '../../context/InfoContext'
import Wrapper from '../common/wrapper'
import BlockOutput from '../content-render/BlockOutput'
import Link from 'next/link'


function Biography() {
  const { info, language } = useContext(InfoContext)
  const { blocks, greating } = info[language].bio
  console.log(blocks)
  
  return (
    <div className="w-full bg-gray-600" style={{ maxHeight: 'calc(100vh - 48px)' }}>
      <Wrapper>
        <div className="grid grid-cols-3">
          <div className="col-start-1 col-end-2">
            <figure className="mx-auto overflow-hidden object-fill border-4 border-blue-500 rounded-full bg-white w-72 h-72">
              <img className="rounded object-cover"  src="/jasan.jpg" alt=""/>
            </figure>
            <BlockOutput chunks={greating && greating.blocks} headerStyle="text-3xl text-center" />
          </div>
          <div className="col-start-2 col-end-4">
            <div className="text-lg space-y-4" >
              <BlockOutput chunks={blocks} headerStyle="text-4xl mb-2" />
              <Link href="/resume-jasandz.pdf">
                <a className="block max-w-max mt-3 bg-blue-600 rounded-md px-2 py-2 text-white" >
                  {language === 'ES' ? 'Descargar' : 'Download' } CV
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Biography
