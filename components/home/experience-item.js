import React from 'react'

function ExperienceItem({ noLine, title, description, image, link, date }) {
  return (
    <article className="article flex space-x-4">
      <div className="flex-shrink-0">
        <figure className="p-1 border-2 border-purple-500 border-dashed rounded-full">
          <a target="_blank" href={link}>
            <img className="rounded-full object-contain h-20 w-20" src={image} alt="Tulkitpay"/>
          </a>
        </figure>
        <div className={noLine ? 'h-full' : 'h-full mx-auto bg-purple-500 w-0.5'} ></div>
      </div>
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <small className="italic">{date}</small>
        <p className="mb-3 text-gray-500 italic" >{description}</p>
      </div>
    </article>
  )
}

export default ExperienceItem
