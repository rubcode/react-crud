import Layout from './Containers/layout.js';
import Form from './Forms/form';
import ContainerTable from './Containers/container-table.js';
import Table from './Table/table.js';
import Modal from './Modals/modal';
import Filters from './Containers/filters.js';
import { useState, useEffect } from 'react';
import { getTasks } from '../Services/task';
import Nav from './Containers/nav';
import ModalComments from './Modals/ModalContentComments';

function Home() {
    const [tasksList, setTaskList] = useState([])
    const [headers, setHeaders] = useState([])
    const [task,setTask] = useState("")
    const [filteredTasks, setFilteredTasks] = useState([]); 
    const [deadline,setDeadline] = useState("")
    const [selectedTask, setSelectedTask] = useState({})
    const [isActiveModal,setIsActiveModal] = useState(false)
    const [isActiveModalComment,setIsActiveModalComment] = useState(false)
    const [statusFilter, setStatusFilter] = useState('TODAS');

    useEffect(() => {
        getTasks().then(({data,isError}) => {
          if(isError){
            console.log('Error al extraer datos');
            return
          }
          
          const taskList = data.data
          const headers =  (taskList.length > 0) ? ["NO","TAREA","FECHA REALIZACIÓN","ESTATUS","ACCIONES"] : []
          setTaskList(data.data);
          setFilteredTasks(taskList)
          setHeaders(headers)
        }); 
      },[]);

    return (
        <div>
            <Nav>
                <ul className='items'>
                    <li key="nav_menu_usuaros"><a href='Users'>Usuarios</a></li>
                </ul>
            </Nav>
            <Layout>
                <ModalComments
                    selectedTask={selectedTask}
                    isActiveModalComment={isActiveModalComment}
                    setIsActiveModalComment={setIsActiveModalComment}
                />
                <Modal
                    tasksList={tasksList}
                    setTaskList={setTaskList}
                    isActiveModal={isActiveModal}
                    selectedTask={selectedTask}
                    setSelectedTask={setSelectedTask}
                    setIsActiveModal={setIsActiveModal}
                />
                <h1 className='title'>Lista de Tareas</h1>
                <Form
                    task={task}
                    deadline={deadline}
                    setTask={setTask}
                    setDeadline={setDeadline}
                    tasksList={tasksList}
                    setTaskList={setTaskList}
                />

                {
                    filteredTasks.length ? 
                        <>
                            <Filters 
                                statusFilter={statusFilter}
                                setStatusFilter={setStatusFilter}
                                tasksList={tasksList}
                                setFilteredTasks={setFilteredTasks}
                            />
                            <ContainerTable>
                                <Table
                                    headers={headers}
                                    data={filteredTasks}
                                    setIsActiveModal={setIsActiveModal}
                                    setIsActiveModalComment={setIsActiveModalComment}
                                    setTaskList={setTaskList}
                                    setSelectedTask={setSelectedTask}
                                    tasksList={tasksList}
                                />
                            </ContainerTable> 
                        </>
                        : null
            }
        
            </Layout>
        </div>
    )
    
}

export default Home;