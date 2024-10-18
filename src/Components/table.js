import styled from 'styled-components'
import Thead from './thead'
import Tbody from './tbody'

const TableStyled = styled.table`
    width: 100%;
    display: table;
    border-collapse: collapse;
    text-align: center;
`

function Table({headers,data,tasksList,setTaskList,setIsActiveModal,setSelectedTask}) {
    return (
        <TableStyled>
            <Thead
                headers={headers}
            />
            <Tbody 
                data={data}
                setIsActiveModal={setIsActiveModal}
                setTaskList={setTaskList}
                tasksList={tasksList}
                setSelectedTask={setSelectedTask}
            />
        </TableStyled>
    )
}

export default Table
