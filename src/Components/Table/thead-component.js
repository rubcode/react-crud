import styled from 'styled-components'

const TheadStyled = styled.thead`

    background-color: var(--accentColor);
    color: var(--white);
    tr{
        border-block-end: 1px solid var(--grey);
    }
    th{
        padding-inline: 1rem;
        text-align: center;
    }
    @media (max-width: 750px) {
        &{
            font-size: 0.8rem;
        }
    }
`

function TheadComponent({headers}) {
    return (
        <TheadStyled>
            <tr key={0}>
                {
                    headers.map((item,index) => <th key={index}>{item}</th>)
                }
            </tr>
        </TheadStyled>
    )
}

export default TheadComponent
