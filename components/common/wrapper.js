import React from 'react'

function Wrapper({ children, className }) {
  return (
    <div className={`max-w-7xl mx-auto p-4 xl:px-20 xl:py-3 ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper
