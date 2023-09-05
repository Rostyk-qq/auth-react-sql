import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import { ContextApp } from './components/createContext'
import Render from './components/pages/Render/renderPages'
const App = () => {
  const [auth, setAuth] = useState(false)
  const [registred, setIsRegistred] = useState(false)
  return (
    <ContextApp.Provider value={{
      auth,
      setAuth,
      registred,
      setIsRegistred
    }}>
      <BrowserRouter>
        <Render />
      </BrowserRouter>
    </ContextApp.Provider>
  )
}
export default App;