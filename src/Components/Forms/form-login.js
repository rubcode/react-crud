import styled from 'styled-components'
import InputText from './input-text.js';
import {Button} from './button.js';
import { useRef } from 'react';

const FormLoginStyled = styled.form`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    background-color: var(--white);
    border-radius: 0.5rem;
    padding-inline: 2rem;
    padding-block: 1rem;
    display: flex;
    justify-content: flex-cener;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    .input-login{
        width: 100%;
    }

`

function FormLogin({...props}) {

    const form = useRef(null)
    function handlerEmail(e){
        const email = e.target.value
        props.setEmail(email)
    }
    function handlerPassword(e){
        const password = e.target.value
        props.setPassword(password)
    }
    function handlerSubmit(e){
        e.preventDefault()
        const formData = new FormData(form.current)
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email,password)
    }
    return (
        <FormLoginStyled ref={form} onSubmit={handlerSubmit}>
            <h1 className="title">Login</h1>
            <InputText className='input-login' type="email" name="email" placeholder="Ingrese Email" onChange={handlerEmail}/>
            <InputText className='input-login' type="password" name="password" placeholder="Ingrese Password" onChange={handlerPassword}/>
            <Button
                text="Ingresar"
            />
        </FormLoginStyled>
    )
}

export default FormLogin
