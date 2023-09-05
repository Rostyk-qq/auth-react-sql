import React, {useState} from 'react'
import { useContext } from 'react'
import { ContextApp } from '../../createContext'
import Button from '../../customElements/Button/button'
import Input from '../../customElements/Input/input'
import { createConectionLogin } from '../actionWithLoginRegisterParams/createLoginConnection'
import './login.module.css'
const LoginForm = () => {

    const {auth, setAuth, registred, setIsRegistred} = useContext(ContextApp)

    const [params, setParams] = useState({
        username: '',
        email: ''
    })

    const sendParams = async (e) => {
        e.preventDefault();
        const result = await createConectionLogin(params)
        if(result === 'All good!'){
            setAuth(true)
        }
        else if(result === 'No user found.'){
            alert('Error in username or email, because this user doesent exists!!!');
        }
    }
    
    return (
        <form>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <Input value={params.username} onChange={e => setParams({...params, username: e.target.value})}  id='username' type="text" name='username' required />
        <br />
        <label htmlFor="email">Email</label>
        <Input value={params.email} onChange={e => setParams({...params, email: e.target.value})}  id='email' type="email" name='email' required />
        <br />
        <div>
            <Button type={'submit'} onClick={sendParams}  >Login</Button>
        </div>
    </form>
    )
}
export default LoginForm