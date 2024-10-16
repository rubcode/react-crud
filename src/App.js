import './App.css';
import Layout from './Components/layout';
import Form from './Components/form';
import ContainerTable from './Components/container-table';
import Table from './Components/table';

function App() {
  return (
    <div className="App">
      <Layout>
        <h1 className='title'>Lista de Tareas</h1>
        <Form/>
        <ContainerTable>
          <Table/>
        </ContainerTable>
      </Layout>
    </div>
  );
}

export default App;
