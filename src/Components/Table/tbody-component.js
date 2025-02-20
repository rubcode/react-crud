import styled from 'styled-components'
import { ButtonIcon } from '../Forms/button'


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

function TbodyComponent({...props}) {
    const type = props.type
    return (
        <TbodyStyled>
            {
                props.data.map((item,index) =>{
                    return <tr key={index}>
                            <td key={`${index}_ID_${type}`}>{item['id']}</td>
                            <td key={`${index}_comment_${type}`}>{item['comment']}</td>
                            <td key={`${index}_actions_${type}`}>
                                {
                                    props.actions.map(action=> {
                                        return <ButtonIcon text={action.icon} onClick={() => action.action(item)}/>
                                    })
                                }
                            </td>
                        </tr>
                    
                })
            }
        </TbodyStyled>
    )
}

export default TbodyComponent
