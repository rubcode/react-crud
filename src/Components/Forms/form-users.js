import styled from 'styled-components'
import InputText from './input-text.js';
import {Button} from './button.js'; 
import { useRef, useState } from 'react';
import { addUsers } from '../../Services/users.js';

const FormUsersStyled = styled.form`
    width: 100%;
    background-color: var(--white);
    border-radius: 0.5rem;
    padding-inline: 2rem;
    padding-block: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    @media (max-width: 600px) {
        &{
            flex-direction: column;
        }
    
    }
`

function FormUsers({...props}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const form = useRef(null)

    function handlerChangeName(e){
        const name = e.target.value
        setName(name)
    }

    function handlerChangeEmail(e){
        const email = e.target.value
        setEmail(email)
    }

    function handlerChangePassword(e){
        const password = e.target.value
        setPassword(password)
    }

    async function handlerSubmit(e){
        e.preventDefault()
        const formData = new FormData(form.current)
        const usersList = props.usersList
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
        const params = {"name": name,"email": email,"password": password, status:1}
        const response = await addUsers(params)
        const data = {"id":usersList.length + 1,"name": name,"email":email,"password":password,status:1}
        if(response.data.code === "000"){
            props.setUsersList((prevUser) => [...prevUser, data]);
            setName("")
            setEmail("")
            setPassword("")
        }

    }

    return (
        <FormUsersStyled onSubmit={handlerSubmit} ref={form}>
            <InputText placeholder='Ingrese nombre' name='name' type='text' value={name} onChange={handlerChangeName} required/> 
            <InputText placeholder='Ingrese correo' name='email' type='email' value={email} onChange={handlerChangeEmail} required/>
            <InputText placeholder='Ingrese contraseña' name='password' type='password' value={password} onChange={handlerChangePassword} required/>  
            <Button
                text="Registrar"
            />
        </FormUsersStyled>
    )
}

export default FormUsers

