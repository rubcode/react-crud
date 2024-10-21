import React, { useRef } from 'react';
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

function ModalContent({...props}) {
    const form = useRef(null)
    function handlerChangeTask(e){
        const updatedTask = { ...props.selectedTask, task: e.target.value };
        props.setSelectedTask(updatedTask)
    }
    function handlerChangeDeadline(e){
        const updatedTask = { ...props.selectedTask, deadline: e.target.value };
        props.setSelectedTask(updatedTask)
    }
    function handlerSubmit(e){
        e.preventDefault()
        const formData = new FormData(form.current)
        let list = props.tasksList
        console.log(list)
        const task = formData.get("task")
        const deadline = formData.get("deadline")
        const index = list.findIndex(obj => obj.ID === 1);
        list[index] = {"ID":1,"task":task,"deadline": deadline}
        props.setTaskList(list)
        props.setIsActiveModal(false)

    }
    return (
        <Overlay>
            <ModalContentStyled>
                <h2 className='title'>Editar Tarea</h2>
                <form ref={form} onSubmit={handlerSubmit}>
                    <InputText type='text' name='task' placeholder='Ingrese Tarea' value={props.selectedTask.task} onChange={handlerChangeTask}/>
                    <InputText type='date' name='deadline' placeholder='Ingrese Fecha Compromiso' value={props.selectedTask.deadline} onChange={handlerChangeDeadline}/>
                    <Button
                        text="Editar"
                    />
                </form>
                
            </ModalContentStyled>
        </Overlay>
    )
}

export default function Modal({...props}){
    if(props.isActiveModal){
        return(
            <ModalPortal>
                <ModalContent 
                    selectedTask={props.selectedTask} 
                    setSelectedTask={props.setSelectedTask}
                    setIsActiveModal={props.setIsActiveModal}
                    tasksList={props.tasksList}
                    setTaskList={props.setTaskList}
                />
            </ModalPortal>
        )
    }
    return null

}
