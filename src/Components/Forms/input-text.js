import styled from 'styled-components'

const InputText = styled.input`
    border: 1px solid var(--grey);
    color: var(--black);
    background: var(--white);
    outline: none;
    border: 1px solid var(--accentColor) ;
    padding-inline: 1rem;
    padding-block: .5rem;
    border-radius: 1.5rem;
    font: var(--body2-regular);
    flex: 1;
    @media (max-width: 600px) {
        &{
            width: 100%;
        }
    
    }


`


export default InputText
