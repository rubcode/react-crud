import styled from 'styled-components'
import { ButtonIcon } from './button'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteTask } from '../Services/task';

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

function Tbody({data,tasksList,setTaskList,setIsActiveModal,setSelectedTask}) {
    function handlerEdit(Task){
        setIsActiveModal(true)
        setSelectedTask(Task)
    }
    async function handlerDelete(ID){
        const params = {
            "id": ID
        }
        const response = await deleteTask(params)
        if(response.data.code === "000"){
            const tasks = tasksList.filter(item => item.id !== ID)
            setTaskList(tasks)
        }else{
            console.log(response)
        }
        
    }
    return (
        <TbodyStyled>
            {
                data.map((item,index) =>{
                    return <tr key={index}>
                            <td key={`${index}_ID`}>{item['id']}</td>
                            <td key={`${index}_task`}>{item['task']}</td>
                            <td key={`${index}_deadline`}>{item['deadline']}</td>
                            <td key={`${index}_actions`}>
                                <ButtonIcon text={<FaEdit/>} onClick={() => handlerEdit(item)}/>
                                <ButtonIcon text={<MdDelete/>} onClick={() => handlerDelete(item['id'])}/>
                            </td>
                        </tr>
                    
                })
            }
        </TbodyStyled>
    )
}

export default Tbody
