import React, { createContext, useState } from 'react'

export const InfoContext = createContext()

const mock = {
  bio: {
    profile: {
      blocks: []
    },
    blocks: []
  }
}

function InfoProvider({ children }) {
  const [info, setInfo] = useState({
    ES: mock, EN: mock
  })
  const [language, setLanguage] = useState('EN')
  return (
    <InfoContext.Provider value={{ info, setInfo, language, setLanguage }}>
      {children}
    </InfoContext.Provider>
  )
}

export default InfoProvider
