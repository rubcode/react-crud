import styled from 'styled-components'

const NavStyled = styled.div`
    width: 100%;
    padding: 1rem;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--primaryColor);
    .items {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-end;
        padding: 1rem;
    }
    .items li{
        list-style: none;
    }
    .items li a {
        text-decoration: none;
        color: var(--white);
        position: relative;
        transition: all 0.3s;
    }
    .items li a:hover {
        color: var(--accentColor);
        transform: scale(1.1);  
    }
`

function Nav({children}) {
    return (
        <NavStyled>
            {children}
        </NavStyled>
    )
}

export default Nav
