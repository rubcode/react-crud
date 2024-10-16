import styled from 'styled-components'
import Thead from './thead'
import Tbody from './tbody'

const TableStyled = styled.table`
    width: 100%;
    display: table;
    border-collapse: collapse;
    text-align: center;
`

function Table({headers,data}) {
    return (
        <TableStyled>
            <Thead
                headers={headers}
            />
            <Tbody 
                data={data}
            />
        </TableStyled>
    )
}

export default Table
