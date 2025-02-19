import React, { useRef } from 'react';
import styled from 'styled-components'
import Overlay from '../overlay';
import TextArea from '../text-area';
import { Button } from '../button'
import ReactDOM from 'react-dom'
import { addComment } from '../../Services/comments';

const modalRoot = document.getElementById("portal-comments");

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

function ModalContentComment({...props}) {
    const form = useRef(null)
    

    async function handlerSubmit(e){
        e.preventDefault()
        const formData = new FormData(form.current)
        const comment = formData.get("comment")
        const ID = parseInt(props.selectedTask.id)
        const params = {
            "idTask": ID,
            "comment": comment,
            "status": 1
        }
        console.log(params)
        const response = await addComment(params)
        if(response.data.code === "000"){
            props.setIsActiveModalComment(false)
        }else{
            console.log(response)
        }
            

    }
    return (
        <Overlay>
            <ModalContentStyled>
                <h2 className='title'>Registrar Comentario</h2>
                <form ref={form} onSubmit={handlerSubmit}>
                    <TextArea 
                        name='comment'
                        placeholder='Escribe tu comentario'
                    />
                     <Button
                        text="Añadir Comentario"
                    />
                </form>
                
            </ModalContentStyled>
        </Overlay>
    )
}

export default function Modal({...props}){
    if(props.isActiveModalComment){
        return(
            <ModalPortal>
                <ModalContentComment 
                    setIsActiveModalComment={props.setIsActiveModalComment}
                    selectedTask={props.selectedTask}
                />
            </ModalPortal>
        )
    }
    return null

}
