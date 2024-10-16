import styled from 'styled-components'

const TbodyStyled = styled.tbody`
    
    tr{
        border-block-end: 1px solid var(--grey);
    }
    td{
        padding-inline: 1rem;
        padding-block: .5rem;
        text-align: center;
        color: var(--black);
    }
`

function Tbody({data}) {
    return (
        <TbodyStyled>
            {
                data.map((item,index) =>{
                    return <tr key={index}>
                            <td key={`${index}_no`}>{index+1}</td>
                            <td key={`${index}_task`}>{item['task']}</td>
                            <td key={`${index}_deadline`}>{item['deadline']}</td>
                            
                        </tr>
                    
                })
            }
        </TbodyStyled>
    )
}

export default Tbody
