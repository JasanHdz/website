import React from 'react'
import Wrapper from '../common/wrapper'
import ExperienceItem from './experience-item'

function Experience() {
  return (
    <div id="arrow" className="">
      <Wrapper>
        <h2 className="text-2xl uppercase mb-6" >Experiencia</h2>
        <section className="">
          <ExperienceItem
            link="https://tulkitpay.com/"
            title="Tulkitpay"
            description="En esta charla conté cómo puedes hacer páginas web estáticas que no necesitan servidor. Qué tipo de web utilizar dependiendo de tus necesidades, sus propiedades y sus funcionalidades."
            image="/works/tulkitpay.png"
            date="Septiembre 2020 - Actualidad"
          />
          <ExperienceItem
            link="https://leonidasesteban.com/"
            title="Leonidas Esteban"
            description="En esta charla conté cómo puedes hacer páginas web estáticas que no necesitan servidor. Qué tipo de web utilizar dependiendo de tus necesidades, sus propiedades y sus funcionalidades."
            image="/works/leonidas.png"
            date="Abril 2020 - Septiembre 2020"
          />
          <ExperienceItem
            link="https://platzi.com/blog/associates/"
            title="Platzi Associate"
            description="En esta charla conté cómo puedes hacer páginas web estáticas que no necesitan servidor. Qué tipo de web utilizar dependiendo de tus necesidades, sus propiedades y sus funcionalidades."
            image="/works/platzi.jpg"
            noLine
            date="Septiembre 2019 - Marzo 2020"
          />
        </section>
      </Wrapper>
    </div>
  )
}

export default Experience
