import './App.css';
import Layout from './Components/layout';
import Form from './Components/form';
import ContainerTable from './Components/container-table';
import Table from './Components/table';
import Modal from './Components/modal';
import { useEffect, useState } from 'react';




function App() {
  const [tasksList, setTaskList] = useState([])
  const [headers, setHeaders] = useState([])
  const [task,setTask] = useState("")
  const [deadline,setDeadline] = useState("")
  const [idTask, setIDTask] = useState("")
  const [isActiveModal,setIsActiveModal] = useState(false)

  useEffect(()=>{
    const tasks = tasksList.filter(item => item.ID !== idTask)
    setTaskList(tasks)
  },[idTask,tasksList])
  
  
  return (
    <div className="App">
      
      <Layout>
        <Modal
          isActiveModal={isActiveModal}
        />
        <h1 className='title'>Lista de Tareas</h1>
        <Form
          task={task}
          deadline={deadline}
          setTask={setTask}
          setDeadline={setDeadline}
          tasksList={tasksList}
          setHeaders={setHeaders}
          setTaskList={setTaskList}
        />
        {
          tasksList.length ? 
            <ContainerTable>
              <Table
                headers={headers}
                data={tasksList}
                setIDTask={setIDTask}
                setIsActiveModal={setIsActiveModal}
              />
            </ContainerTable> : null
        }
        
      </Layout>
    </div>
  );
}

export default App;
