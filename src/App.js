import './App.css';
import Layout from './Components/layout';
import Form from './Components/form';
import ContainerTable from './Components/container-table';
import Table from './Components/table';
import { useState } from 'react';




function App() {
  const [tasksList, setTaskList] = useState([])
  const [headers, setHeaders] = useState([])
  const [task,setTask] = useState("")
  const [deadline,setDeadline] = useState("")
  return (
    <div className="App">
      <Layout>
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
        <ContainerTable>
          <Table
            headers={headers}
            data={tasksList}
          />
        </ContainerTable>
      </Layout>
    </div>
  );
}

export default App;
