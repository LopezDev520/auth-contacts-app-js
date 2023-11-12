import { useField } from '../hooks/useField'
import { useJWT } from '../hooks/useJWT'

export function LoginForm() {
  const { login } = useJWT()

  const usernameInput = useField("text")
  const passwordInput = useField("password")

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const { value: username } = usernameInput
    const { value: password} = passwordInput

    login({ username, password })
  }

  return (
    <form onSubmit={handleSubmit} className='text-xl bg-amber-300 p-5 rounded-lg border-4 border-black'>
      <h1 className='text-center font-bold'>Inicia Sesión</h1>
      <div className='m-5'>
        <label >
          <p>Nombre de usuario</p>
          <input {...usernameInput} />
        </label>        
      </div>
      <div className='m-5'>
        <label >
          <p>Contraseña</p>
          <input {...passwordInput} />
        </label>
      </div>

      <div className='text-center'>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Iniciar Sesión!</button>
      </div>
    </form>
  )
}