import { useJWT } from '../hooks/useJWT'

export function AppBar() {
  const { user, logout } = useJWT()


  return (
    <div className="flex items-center justify-around">
      <div>
        <h1>Contactos App</h1>
      </div>

      <div className='flex items-center'>
        <img src="/avatar.png" className='w-8' />
        <p className='text-2xl'>{user.username}</p>
      </div>

      <div>
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded m-2"
          onClick={logout}
        >Cerrar</button>
      </div>
    </div>
  )
}