import React from 'react'
import Wrapper from '../common/wrapper'
import Skill from './skill'

function Skills() {
  return (
    <div className="py-14">
      <Wrapper>
        <h2 className="text-center mb-2 uppercase text-3xl text-pink-800">Habilidades blandas</h2>
        <section className="grid grid-cols-3">
          <Skill image="/images/attitude.png" title="actitud positiva" />
          <Skill image="/images/curiosity.png" title="curiosidad" />
          <Skill image="/images/integrity.png" title="integridad" />
        </section>
        <h2 className="text-center my-4 uppercase text-3xl text-pink-800">Habilidades Técnicas</h2>
        <section className="grid grid-cols-4">
          <Skill image="/images/javascript.png" title="javascript" small />
          <Skill image="/images/html5.png" title="html5" small />
          <Skill image="/images/css.png" title="css" small />
          <Skill image="/images/npm.png" title="npm" small />
          <Skill image="/images/react.png" title="react" small />
          <Skill image="/images/redux.png" title="redux" small />
          <Skill image="/images/git.png" title="git" small />
          <Skill image="/images/github.png" title="github" small />
          <Skill image="/images/flutter.jpg" title="flutter" small />
          <Skill image="/images/firebase.png" title="firebase" small />
          <Skill image="/images/nodejs.png" title="nodejs" small />
          <Skill image="/images/jest.png" title="jest" small />
          <Skill image="/images/materialui.png" title="material ui" small />
          <Skill image="/images/tailwindcss.png" title="tailwindcss" small />
          <Skill image="/images/styled-components.png" title="style-components" small />
          <Skill image="/images/figmaa.png" title="figma" small />
        </section>
      </Wrapper>
    </div>
  )
}

export default Skills
