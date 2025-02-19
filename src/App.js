import './App.css';
import Layout from './Components/layout';
import Form from './Components/form';
import ContainerTable from './Components/container-table';
import Table from './Components/table';
import Modal from './Components/modal';
import Filters from './Components/filters';
import { useState, useEffect } from 'react';
import { getTasks } from './Services/task';




function App() {
  const [tasksList, setTaskList] = useState([])
  const [headers, setHeaders] = useState([])
  const [task,setTask] = useState("")
  const [filteredTasks, setFilteredTasks] = useState([]); 
  const [deadline,setDeadline] = useState("")
  const [selectedTask, setSelectedTask] = useState({})
  const [isActiveModal,setIsActiveModal] = useState(false)
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
    <div className="App">
      <Layout>
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
  );
}

export default App;
