import React from 'react'

function Skill({ image, title, small}) {
  return (
    <div className="flex flex-col justify-around items-center mt-4">
      <img className="my-2.5" width="65" height="65" src={image} alt="icono" />
      {small && <small className="uppercase">{title}</small> }
      {!small && <p className="text-sm my-5 uppercase">{title}</p>}
    </div>
  )
}

export default Skill
