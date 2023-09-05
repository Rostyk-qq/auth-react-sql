import React from 'react'
import RegistrationForm from './RegistrationForm';
import style from './registration.module.css'
const Registration = () => {
  return (
    <div className={style.card}>
      <div className={style.card__content}>
          <RegistrationForm />
      </div>
    </div>
  )
}
export default Registration;