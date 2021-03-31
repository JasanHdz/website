import React, { useContext } from 'react'
import { InfoContext } from '../../context/InfoContext'
import Wrapper from '../common/wrapper'
import ExperienceItem from './experience-item'

function Experience({ data }) {
  const { language } = useContext(InfoContext)
  return (
    <Wrapper>
      <div className="experience-title">
        <h2 className="font-bold text-2xl mb-6" >{data.title[language]}</h2>
      </div>
      <section>
        {data.items.map((experience, idx) => (
          <ExperienceItem
            key={idx}
            company={experience.company}
            title={experience.title}
            link={experience.link}
            image={experience.image}
            description={experience[language].desc}
            date={experience[language].date}
            noLine={data.items.length - 1 === idx ? true : false}
          />
        ))}
      </section>
    </Wrapper>
  )
}

export default Experience
