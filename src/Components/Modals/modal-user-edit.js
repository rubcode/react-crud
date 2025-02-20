import React, { useRef } from 'react';
import styled from 'styled-components'
import Overlay from './overlay';
import { Button } from '../Forms/button'
import ReactDOM from 'react-dom'
import { updateUsers } from '../../Services/users';
import InputText from '../Forms/input-text';

const modalRoot = document.getElementById("portal-comments-edit");

class ModalPortal extends React.Component{
    constructor(props){
        super(props);
        this.el = document.createElement('div');
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.el);
    }

    componentDidMount(){
        modalRoot.appendChild(this.el);
    }

    render(){
        return ReactDOM.createPortal(this.props.children,this.el);
    }
}

const ModalContentStyled = styled.div`
    background: var(--white);
    color: var(--black);
    padding: 2rem;
    border-radius: 0.5rem;
    position: fixed;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    inline-size: 30rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .title{
        font: var(--titleFont);
        color: var(--accentColor);
        margin: 0;
    }
`

function ModalContentUserEdit({...props}) {
    const form = useRef(null)
    function handlerChangeName(e){
        const updatedUser = { ...props.selectedUser, name: e.target.value };
        props.setSelectedUser(updatedUser)
    }

    async function handlerSubmit(e){
        e.preventDefault()
        const formData = new FormData(form.current)
        const ID = props.selectedUser.id_user
        const name = formData.get("name")
        const email = props.selectedUser.email;
        const status = props.selectedUser.status;
        let list = props.usersList
        const params = {
            "id": ID,
            "name": name,
            "email": email,
            "password": "",
            "status": status
        }
        const index = list.findIndex(obj => obj.id === ID);
        const response = await updateUsers(params,ID)
        if(response.data.code === "000"){
            list[index] = {...list[index],name:name}
            props.setUsersList(list)
            props.setIsActiveModalUserEdit(false)
        }else{
            console.log(response)
        }
               
    }

    return (
        <Overlay>
            <ModalContentStyled>
                <h2 className='title'>Editar Usuario</h2>
                <form ref={form} onSubmit={handlerSubmit}>
                    <InputText 
                        name='name'
                        type='text'
                        placeholder='Escribe tu nombre'
                        onChange={handlerChangeName}
                        value={props.selectedUser.name}
                    />
                     <Button
                        text="Editar Usuario"
                    />
                </form>
                
            </ModalContentStyled>
        </Overlay>
    )
}

export default function ModalCommentEdit({...props}){
    if(props.isActiveModalUserEdit){
        return(
            <ModalPortal>
                <ModalContentUserEdit 
                    setIsActiveModalUserEdit={props.setIsActiveModalUserEdit}
                    selectedUser={props.selectedUser}
                    setSelectedUser={props.setSelectedUser}
                    usersList={props.usersList}
                    setUsersList={props.setUsersList}
                />
            </ModalPortal>
        )
    }
    return null

}
