import React from 'react'

function HeaderMenu({ Icon, id, visible = '' }) {
  return (
    <div className={`flex justify-between w-full lg:w-auto ${visible}`}>
      <p className="font-semibold text-lg">Jasan Hernández</p>
      <label htmlFor="checkbox" className="text-white ml-auto cursor-pointer">
        <Icon id={id} size={27} className="lg:hidden" />
      </label> 
    </div>
  )
}

export default HeaderMenu
