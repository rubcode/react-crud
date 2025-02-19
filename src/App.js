import './App.css';
import Layout from './Components/layout';
import Form from './Components/form';
import ContainerTable from './Components/container-table';
import Table from './Components/table';
import Modal from './Components/modal';
import { useState, useEffect } from 'react';
import { getTasks } from './Services/task';




function App() {
  const [tasksList, setTaskList] = useState([])
  const [headers, setHeaders] = useState([])
  const [task,setTask] = useState("")
  const [deadline,setDeadline] = useState("")
  const [selectedTask, setSelectedTask] = useState({})
  const [isActiveModal,setIsActiveModal] = useState(false)

  useEffect(() => {
    getTasks().then(({data,isError}) => {
      if(isError){
        console.log('Error al extraer datos');
        return
      }
      
      const taskList = data.data
      const headers =  (taskList.length > 0) ? ["NO","TAREA","FECHA REALIZACIÓN","ESTATUS","ACCIONES"] : []
      setTaskList(data.data);
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
          tasksList.length ? 
            <ContainerTable>
              <Table
                headers={headers}
                data={tasksList}
                setIsActiveModal={setIsActiveModal}
                setTaskList={setTaskList}
                setSelectedTask={setSelectedTask}
                tasksList={tasksList}
              />
            </ContainerTable> : null
        }
        
      </Layout>
    </div>
  );
}

export default App;
