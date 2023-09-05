import React, { useState } from 'react'
import Button from '../customElements/Button/button'
import Input from '../customElements/Input/input'
import style from './style.module.css'

const Form = ({setIsActive, getPost}) => {
    const [values, setVelues] = useState({title: '', body: ''});
    return (
        <form className={style.form}>
            <h1>Add Post</h1>
            <Input value={values.title} onChange={e => setVelues({...values, title: e.target.value})} placeholder={'title'} />
            <Input value={values.body} onChange={e => setVelues({...values, body: e.target.value})} placeholder={'Description'} />
            <div>
                <Button onClick={(e) => {
                    e.preventDefault();
                    const post = {
                        title: values.title,
                        body: values.body
                    }
                    getPost(post)
                    setIsActive(false)
                    setVelues({title: '', body: ''})
                }} type='submit'>Add Post</Button>
            </div>
        </form>
    )
}

export default Form