import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function ParagraphBlock({ data, styles }) {
  if (!data) return ''
  if(!styles) styles = ""
  let content = null

  if (typeof data === 'string') content = data
  else if(typeof data === 'object' && typeof data.text === 'string') content = data.text

  return content ? <p className={styles}>{ReactHtmlParser(content)}</p> : ''
}

export default ParagraphBlock
