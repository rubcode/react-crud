import styled from 'styled-components'
import TheadComponent from './thead-component'
import TbodyComponent from './tbody-component'

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

function TableComponent({...props}) {
    return (
        <TableStyled>
            <TheadComponent
                headers={props.headers}
            />
            <TbodyComponent 
                data={props.data}
                actions={props.actions}
                type={props.type}
                fieldData={props.fieldData}
            />
        </TableStyled>
    )
}

export default TableComponent
