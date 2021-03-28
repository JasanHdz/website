import React from 'react'
import Wrapper from './wrapper'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="bg-purple-500 text-white shadow sticky">
      <Wrapper>
        <p className="uppercase text-center">
          COPYRIGHT © {year} Jasan Hernández
        </p>
      </Wrapper> 
    </div>
  )
}

export default Footer
