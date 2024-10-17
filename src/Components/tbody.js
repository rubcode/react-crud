import styled from 'styled-components'
import { ButtonIcon } from './button'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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

function Tbody({data,setIDTask,setIsActiveModal}) {
    function handlerEdit(ID){
        setIsActiveModal(true)
        console.log(ID)
    }
    function handlerDelete(ID){
        setIDTask(ID)
    }
    return (
        <TbodyStyled>
            {
                data.map((item,index) =>{
                    return <tr key={index}>
                            <td key={`${index}_ID`}>{item['ID']}</td>
                            <td key={`${index}_task`}>{item['task']}</td>
                            <td key={`${index}_deadline`}>{item['deadline']}</td>
                            <td key={`${index}_actions`}>
                                <ButtonIcon text={<FaEdit/>} onClick={() => handlerEdit(item['ID'])}/>
                                <ButtonIcon text={<MdDelete/>} onClick={() => handlerDelete(item['ID'])}/>
                            </td>
                        </tr>
                    
                })
            }
        </TbodyStyled>
    )
}

export default Tbody
