import styled from 'styled-components'
import InputText from './input-text'
import {Button} from './button'

const FormStyled = styled.form`
    width: 100%;
    background-color: var(--white);
    border-radius: 0.5rem;
    padding-inline: 2rem;
    padding-block: 1rem;
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
    align-items: center;
`

function Form() {
    return (
        <FormStyled>
            <InputText placeholder='Ingrese una tarea' name='task' type='text'/> 
            <InputText placeholder='Ingrese fecha termino' name='date' type='date'/>
            <Button
                text="Añadir"
            />
        </FormStyled>
    )
}

export default Form
