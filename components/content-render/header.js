import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function HeaderBlock({ data, styles }) {
  if (!data) return ''
  if(!styles) styles = ""
  let content = null
  if (typeof data === 'string') content = data
  else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text
  if (!content) return ''

  if (typeof data === 'object' && data.level && typeof data.level === 'number') {
    switch (data.level) {
      case 1: return <h1 className="text-2xl sm:text-3xl">{ ReactHtmlParser(content) }</h1>;
      case 2: return <h2 className={styles}>{ ReactHtmlParser(content) }</h2>;
      case 3: return <h3 className={styles}>{ ReactHtmlParser(content) }</h3>;
      case 4: return <h4 className={styles}>{ ReactHtmlParser(content) }</h4>;
      case 5: return <h5 className={styles}>{ ReactHtmlParser(content) }</h5>;
      case 6: return <h6 className={styles}>{ ReactHtmlParser(content) }</h6>;
      default: return <h4 className={styles}>{ ReactHtmlParser(content) }</h4>;
    }
  }

  return <h4>{ ReactHtmlParser(content) }</h4>;
}

export default HeaderBlock
