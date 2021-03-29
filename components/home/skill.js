import React from 'react'

function Skill({ image, title, small}) {
  return (
    <div className="flex flex-col justify-around items-center mt-4">
      <img className="my-2.5 max-h-16 max-w-16" width="64" height="64" src={image} alt="icono" />
      {small && <small className="uppercase">{title}</small> }
      {!small && <p className="text-sm my-5 uppercase">{title}</p>}
    </div>
  )
}

export default Skill
