import styled from 'styled-components'


const TbodyStyled = styled.tbody`
    
    tr{
        border-block-end: 1px solid var(--greyDarken);
    }
    td{
        padding-inline: 1rem;
        padding-block: .5rem;
        text-align: center;
        color: var(--black);
    }
`

function TbodyComponent({data}) {
    return (
        <TbodyStyled>
            {
                data.map((item,index) =>{
                    return <tr key={index}>
                            <td key={`${index}_ID`}>{item['id']}</td>
                            <td key={`${index}_task`}>{item['comment']}</td>
                           
                        </tr>
                    
                })
            }
        </TbodyStyled>
    )
}

export default TbodyComponent
