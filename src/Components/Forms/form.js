import styled from 'styled-components'
import InputText from './input-text'
import {Button} from './button'
import { useRef } from 'react'
import { addTask } from '../../Services/task'

const FormStyled = styled.form`
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
`

function Form({...props}) {

    const form = useRef(null)
    function handlerChangeTask(e){
        const task = e.target.value
        props.setTask(task)
    }
    function handlerChangeDeadline(e){
        const deadline = e.target.value
        props.setDeadline(deadline)
    }

    async function handlerSubmit(e){
        e.preventDefault()
        const tasksList = props.tasksList
        const formData = new FormData(form.current)
        const task = formData.get("task")
        const deadline = formData.get("deadline")
        
        const data = {"id":tasksList.length + 1,"task": task,"deadline":deadline,"status": "PENDIENTE"}
        const response = await addTask({"task": task,"deadline": deadline,"status": "PENDIENTE"})
        if(response.data.code === "000"){
            props.setTaskList((prevTasks) => [...prevTasks, data]);
            props.setTask("")
            props.setDeadline("")
        }
    }
    return (
        <FormStyled ref={form} onSubmit={handlerSubmit}>
            <InputText placeholder='Ingrese una tarea' name='task' type='text' value={props.task} onChange={handlerChangeTask} required/> 
            <InputText placeholder='Ingrese fecha termino' name='deadline' type='date' value={props.deadline} onChange={handlerChangeDeadline} required/>
            <Button
                text="Añadir"
            />
        </FormStyled>
    )
}

export default Form
