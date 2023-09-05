import React from "react";
import style from './style.module.css'
const Modal = ({isActive, setIsActive, children}) => {
    let active = [style.modal__area];

    if(isActive){
        document.body.style.overflowY = 'hidden'
        active.push(style.isActive)
    }else{
        document.body.style.overflowY = 'auto'
    }

    return (
        <div className={`${active.join(' ')}`} onClick={() => setIsActive(false)} >
            <div className={style.modal__card} onClick={(e) => {
                e.stopPropagation();
            }} >
                {children}
            </div>
        </div>
    )
}
export default Modal