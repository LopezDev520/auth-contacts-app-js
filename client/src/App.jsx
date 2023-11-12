import { ContactContextProvider } from "./context/ContactContext"
import { useJWT } from './hooks/useJWT'
import { Contacts } from "./components/Contacts"
import { Login } from "./components/Login"

import { Toaster } from "react-hot-toast"

function App() {
  const { isLogged } = useJWT()

  return (
    <>
      {!isLogged ? (
        <Login />
      ) : (
        <ContactContextProvider>
          <Contacts />
        </ContactContextProvider>
      )}

      <Toaster
        position="top-center"
      />
    </>
  )
}

export default App
