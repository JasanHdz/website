import React from 'react'
import Wrapper from './wrapper'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="bg-purple-500 text-gray-100 shadow sticky">
      <Wrapper>
        <p className="text-center text-sm md:text-base">
          {/* COPYRIGHT © {year} Jasan Hernández */}
          © {year} — Web app diseñada y programada por <a className="text-white underline" href="https://www.instagram.com/jasanhdz/">Jasan Hernández</a> usando React.js + Next.
        </p>
      </Wrapper> 
    </div>
  )
}

export default Footer
