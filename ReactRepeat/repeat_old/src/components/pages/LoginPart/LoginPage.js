import React from 'react'
import style from './login.module.css'
import FormForLoginPage from './FormForLoginPage'
const Login = () => {
  return (
    <div className={style.card}>
    <div className={style.card__content}>
        <FormForLoginPage />
    </div>
  </div>
  )
}
export default Login;
