import React, { useContext } from 'react'
import { InfoContext } from '../../context/InfoContext'
import Wrapper from '../common/wrapper'
import Skill from './skill'

const headersText = {
  soft: {
    ES: 'Habilidades blandas',
    EN: 'Soft skills',
  },
  technical: {
    ES: 'Habilidades Técnicas',
    EN: 'Technical skills',
  },
  values: {
    ES: ['actitud positiva', 'curiosidad', 'integridad'],
    EN: ['positive attitude', 'curiosity', 'integrity']
  }
}

function Skills() {
  const { language } = useContext(InfoContext)
  return (
    <div id="arrow" className="pt-0 pb-10">
      <Wrapper>
        <h2 className="mt-10 text-center font-bold my-4 uppercase text-2xl">{headersText.soft[language]}</h2>
        <section className="grid grid-cols-2 sm:grid-cols-3">
          <Skill image="/images/attitude.png" title={headersText.values[language][0]} />
          <Skill image="/images/curiosity.png" title={headersText.values[language][1]} />
          <Skill image="/images/integrity.png" title={headersText.values[language][2]} />
        </section>
      </Wrapper>
      <div>
        <Wrapper>
          <h2 className="mt-10 text-center font-bold my-4 uppercase text-2xl">{headersText.technical[language]}</h2>
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <Skill image="/images/javascript.png" title="javascript" small />
            <Skill image="/images/typescript.png" title="typescript" small />
            <Skill image="/images/html5.png" title="html5" small />
            <Skill image="/images/css.png" title="css" small />
            <Skill image="/images/git.png" title="git" small />
            <Skill image="/images/github.png" title="github" small />
            <Skill image="/images/postman.png" title="postman" small />
            <Skill image="/images/yarn.png" title="yarn" small />
            <Skill image="/images/react.png" title="react" small />
            <Skill image="/images/redux.png" title="redux" small />
            <Skill image="/images/nextjs.svg" title="nextjs" small />
            <Skill image="/images/materialui.png" title="material ui" small />
            <Skill image="/images/tailwindcss.png" title="tailwindcss" small />
            <Skill image="/images/styled-components.png" title="style-components" small />
            <Skill image="/images/firebase.png" title="firebase" small />
            <Skill image="/images/flutter.jpg" title="flutter" small />
            <Skill image="/images/nodejs.png" title="nodejs" small />
            <Skill image="/images/jest.png" title="jest" small />
            <Skill image="/images/vercel.png" title="vercel" small />
            <Skill image="/images/graphql.png" title="graphql" small />
            <Skill image="/images/mongodb.png" title="mongodb" small />
            <Skill image="/images/python.png" title="python" small />
            <Skill image="/images/laravel.png" title="laravel 8" small />
            <Skill image="/images/cpp.svg" title="c++" small />
            <Skill image="/images/figmaa.png" title="figma" small />
          </section>
        </Wrapper>
      </div>
    </div>
  )
}

export default Skills
