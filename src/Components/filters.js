import styled from 'styled-components'
import Select from './select'
import { useEffect } from 'react';

const FiltersStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

function Filters({setStatusFilter,statusFilter,tasksList,setFilteredTasks}) {
    

    function handlerFilterStatus(e){
        const status = e.target.value;
        setStatusFilter(status);
    }

    useEffect(() => {
        if(statusFilter === "TODAS"){
            setFilteredTasks(tasksList)
            return
        }
        const filteredTasks = tasksList.filter(task => task.status === statusFilter)
        setFilteredTasks([...filteredTasks])
    },[statusFilter,tasksList,setFilteredTasks])

    return (
        <FiltersStyled>
            <Select name='statusFilter' onChange={handlerFilterStatus}>
                <option value="TODAS">Todas</option>
                <option value="COMPLETADA">Completadas</option>
                <option value="PENDIENTE">Pendientes</option>
            </Select>
        </FiltersStyled>
    )
}

export default Filters
