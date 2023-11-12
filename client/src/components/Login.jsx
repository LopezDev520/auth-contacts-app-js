/* eslint-disable react/prop-types */
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function Login() {
  const [mode, setMode] = useState('login')

  return (
    <>
      <div className="p-5 flex justify-around">
        <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded" onClick={() => setMode("login")}>Iniciar Sesión</button>
        <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded" onClick={() => setMode("register")}>Registrarse</button>
      </div>
  
      <div className="flex items-center justify-center h-[90vh] ">
        {mode === "login" ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </div>
    </>

  )
}