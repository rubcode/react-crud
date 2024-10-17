import React from 'react';
import styled from 'styled-components'
import Overlay from './overlay'
import InputText from './input-text'
import { Button } from './button'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById("portal");

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
    inline-size: 24rem;
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

function ModalContent({isActiveModal}) {
    return (
        <Overlay>
            <ModalContentStyled>
                <h2 className='title'>Editar Tarea</h2>
                <form>
                    <InputText type='text' name='task' placeholder='Ingrese Tarea'/>
                    <InputText type='date' name='deadline' placeholder='Ingrese Fecha Compromiso'/>
                    <Button
                        text="Editar"
                    />
                </form>
                
            </ModalContentStyled>
        </Overlay>
    )
}

export default function Modal({isActive}){
    if(isActive){
        return(
            <ModalPortal>
                <ModalContent />
            </ModalPortal>
        )
    }
    return null

}
