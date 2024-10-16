import styled from 'styled-components'

const ContainerTableStyled = styled.div`
    width: 100%;
    background-color: var(--white);
    border-radius: 0.5rem;
    padding-inline: 2rem;
    padding-block: 1rem;
`

function ContainerTable({children}) {
    return (
        <ContainerTableStyled>
            {children}
        </ContainerTableStyled>
    )
}

export default ContainerTable
