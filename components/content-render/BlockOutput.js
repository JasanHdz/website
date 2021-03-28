import React from 'react'
import ParagraphBlock from './paragraph'
import HeaderBlock from './header'

function BlockOutput({ chunks, headerStyle }) {
  return chunks.map((block, index) => {
    const type = block.type
    const data = block.data
    switch (type) {
      case 'header':
        return <HeaderBlock key={index} data={data} styles={headerStyle} />
      case 'paragraph':
        return <ParagraphBlock key={index} data={data} />
      case 'list':
        return <ListBlock key={index} data={data} />
      default:
        return <div key={index} />
    }
  })
}

export default BlockOutput
