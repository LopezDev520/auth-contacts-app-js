import { useContext, useEffect } from "react"
import { JWTContext } from "../context/JWTContext"
import { jwtDecode } from 'jwt-decode'
import axios from "axios"

import { toast } from 'react-hot-toast'

export function useJWT() {
  const { jwt, setJWT } = useContext(JWTContext)
  const isLogged = Boolean(jwt)
  const user = isLogged ? jwtDecode(jwt) : undefined

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("jwt")
    if(tokenFromStorage) {
      setJWT(tokenFromStorage)
    }
  }, [setJWT])

  const login = async credentials => {
    try {
      const { data } = await axios.post("http://localhost:4000/api/auth/login", credentials)
      const token = data.token
      setJWT(token)
      localStorage.setItem("jwt", token)  

      toast.success(data.message)
    } catch({ response: { data: { message } } }) {
      toast.error(message)
    }
  }

  const logout = () => {
    setJWT('')
    localStorage.removeItem("jwt")

    toast.success("Sesion cerrada")
  }

  const register = async credentials => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", credentials)

      toast.success(res.data.message)
    } catch({ response: { data: { message } } }) {
      toast.error(message)
    }
  }

  
  return {
    jwt,
    isLogged,
    user,
    login,
    logout,
    register
  }
}