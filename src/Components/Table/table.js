import styled from 'styled-components'
import Thead from './thead'
import Tbody from './tbody'

const TableStyled = styled.table`
    width: 100%;
    display: table;
    border-collapse: collapse;
    text-align: center;

    @media (max-width: 750px) {
        &{
            width: 100%;
            table-layout: auto;
        }
    
    }
`

function Table({headers,data,tasksList,setTaskList,setIsActiveModal,setSelectedTask,setIsActiveModalComment}) {
    return (
        <TableStyled>
            <Thead
                headers={headers}
            />
            <Tbody 
                data={data}
                setIsActiveModal={setIsActiveModal}
                setIsActiveModalComment={setIsActiveModalComment}
                setTaskList={setTaskList}
                tasksList={tasksList}
                setSelectedTask={setSelectedTask}
                
            />
        </TableStyled>
    )
}

export default Table
