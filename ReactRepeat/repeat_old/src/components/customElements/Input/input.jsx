import React from 'react';
import style from './input.module.css'
const Input = (props) => {
    return (
        <input {...props} className={style.input} />
    )
}
export default Input