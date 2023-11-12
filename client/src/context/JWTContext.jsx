/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const JWTContext = createContext({})

export function JWTContextProvider ({ children }) {
  const [jwt, setJWT] = useState('')

  return <JWTContext.Provider value={{ jwt, setJWT }}>
    {children}
  </JWTContext.Provider>
}