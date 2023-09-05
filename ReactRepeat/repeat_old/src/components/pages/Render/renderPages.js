import React, {useContext} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {privateMassive, publicMassiveRegistration, publicMassiveLogin} from '../Render/massivePrivateOrPublic'
import { ContextApp } from '../../createContext'

const Render = () => {
  const {auth, setAuth, registred} = useContext(ContextApp)

  return (
    <>
        {
          registred 
          ?
              auth
              ?
              <Routes>
                    {privateMassive.map(el => (
                        <Route key={el.path} path={el.path} element={el.element} exact={el.exact} />
                    ))}
                    <Route path='*' element={<Navigate to={'/posts'} replace />} />
              </Routes>
              :
              <Routes>
                    {publicMassiveLogin.map(el => (
                        <Route key={el.path} path={el.path} element={el.element} exact={el.exact} />
                    ))}
                    <Route path='*' element={<Navigate to={'/login'} replace />} />
              </Routes>
          :
              <Routes>
                    {publicMassiveRegistration.map(el => (
                        <Route key={el.path} path={el.path} element={el.element} exact={el.exact} />
                    ))}
                    <Route path='*' element={<Navigate to={'/registration'} replace />} />
              </Routes>
        }
    </>
  )
}
export default Render;