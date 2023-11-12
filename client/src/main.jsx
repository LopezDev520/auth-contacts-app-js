import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JWTContextProvider } from './context/JWTContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <JWTContextProvider>
    <App />
  </JWTContextProvider>,
)
