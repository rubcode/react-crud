import styled from 'styled-components'
import Thead from './thead'
import Tbody from './tbody'

const TableStyled = styled.table`
    width: 100%;
    display: table;
    border-collapse: collapse;
    text-align: center;
`

function Table() {
    return (
        <TableStyled>
            <Thead
                headers={["NO","TAREA","FECHA ESTIMADA"]}
            />
            <Tbody 
                data={[{"task":"Hacer mi cama","deadline": "16-10-2024"}]}
            />
        </TableStyled>
    )
}

export default Table
