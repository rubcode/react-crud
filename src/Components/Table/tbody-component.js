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
    @media (max-width: 750px) {
        &{
            font-size: 0.8rem;
        }
    }
`

function TbodyComponent({...props}) {
    const type = props.type
    return (
        <TbodyStyled>
            {
                props.data.map((item,index) =>{
                    return <tr key={`tr_${index}_${type}`}>
                            {
                                props.fieldData.map(field => {
                                    if(field === 'no'){
                                        return <td key={`${index}_${field}_${type}`}>{index+1}</td>
                                    }
                                    return <td key={`${index}_${field}_${type}`}>{item[field]}</td>
                                })
                            }
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
