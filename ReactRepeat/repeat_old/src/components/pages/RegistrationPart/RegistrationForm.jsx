import React, {useState, useContext} from 'react';
import { ContextApp } from '../../createContext';
import Input from '../../customElements/Input/input';
import Button from '../../customElements/Button/button';
import'./registration.module.css'
import {createConectionRegister} from '../actionWithLoginRegisterParams/createRegisterConnection' 
const RegistrationForm = () => {

    const {auth, setAuth, registred, setIsRegistred} = useContext(ContextApp)

     const [params, setParams] = useState({
        username: '',
        email: '',
        password: '',
        reEnter: ''
    })

    const sendParams = async (e) => {
        e.preventDefault();
        const result = await createConectionRegister(params)

            if(result === 'All went good!'){
                setIsRegistred(true)
            }
            else if(result === 'Error, duplicate params!!!'){
                alert('Error, duplicate params!!!')
            }
            else if(result === 'Password is uncorrect or not indentical!!!'){
                alert('Password is uncorrect or not indentical!!!')
            }
    }

    return (
        <form>
            <h1>Registration</h1>
            <label htmlFor="username">Username</label>
            <Input value={params.username} onChange={e => setParams({...params, username: e.target.value})} id='username' type="text" name='username' required />
            <br />
            <label htmlFor="email">Email</label>
            <Input value={params.email} onChange={e => setParams({...params, email: e.target.value})} id='email' type="email" name='email' required />
            <br />
            <label htmlFor="password">Password</label>
            <Input value={params.password} onChange={e => setParams({...params, password: e.target.value})}  id='password' type="password" name='password' required />
            <br />
            <label htmlFor="ReEnterPassword">Re-Enter Password</label>
            <Input value={params.reEnter} onChange={e => setParams({...params, reEnter: e.target.value})} id='ReEnterPassword' type="password" name='ReEnterPassword' required />
            <div>
                <Button type={'submit'} onClick={sendParams} >Register</Button>
            </div>
        </form>
    )
} 
export default RegistrationForm