import Layout from './Containers/layout.js';
import Nav from './Containers/nav.js';
import FormUsers from './Forms/form-users.js';
import ContainerTable from './Containers/container-table.js';
import TableComponent from "./Table/table-component"
import { useState, useEffect } from 'react';
import { getUsers } from '../Services/users.js';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Users() {
    const [usersList, setUsersList] = useState([])
    const [headers, setHeaders] = useState([])
    const [isActiveModalUserEdit,setIsActiveModalUserEdit] = useState(false)
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(() => {
        getUsers().then(({data,isError}) => {
          if(isError){
            console.log('Error al extraer datos');
            return
          }
          
          const usersList = data.data
          const headers =  (usersList.length > 0) ? ["NO","NOMBRE","CORREO","ACCIONES"] : []
          setUsersList(usersList);
          setHeaders(headers)
        }); 
      },[]);

      function handlerEdit(comment){
        setIsActiveModalUserEdit(true)
        setSelectedUser(comment)
      }

      async function handlerDelete(comment){
        const ID = comment.id
        const params = {
          "id": ID
        }
        

      }
    return (
        <>
            <Nav>
                <ul className='items'>
                    <li key="nav_menu_tareas"><a href='/'>Tareas</a></li>        
                </ul>
            </Nav>
            <Layout>
                <h1 className='title'>Usuarios</h1>
                <FormUsers
                    usersList={usersList}
                    setUsersList={setUsersList} 
                />
                <ContainerTable>
                    <TableComponent
                        type={"users"}
                        fieldData = {["no","name","email"]}
                        headers={headers}
                        data={usersList}
                        actions={[
                              {
                                  icon: <FaEdit />,
                                  action: handlerEdit
                              },
                              {
                                  icon: <MdDelete />,
                                  action: handlerDelete
                              }
                          ]}
                    />
                </ContainerTable>
            </Layout>
        </>
    )
}

export default Users
