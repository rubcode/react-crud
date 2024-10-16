import styled from 'styled-components'

const LayoutStyled = styled.div`
    padding-inline: 4rem;
    padding-block: 2.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2em;
`

function Layout({children}) {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout