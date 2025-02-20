import Layout from './Containers/layout.js';
import Nav from './Containers/nav.js';
import FormUsers from './Forms/form-users.js';
import ContainerTable from './Containers/container-table.js';
import TableComponent from "./Table/table-component"
import ModalContentUserEdit from './Modals/modal-user-edit.js';
import { useState, useEffect } from 'react';
import { getUsers } from '../Services/users.js';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteUsers } from '../Services/users.js';
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

      function handlerEdit(user){
        setIsActiveModalUserEdit(true)
        setSelectedUser(user)
      }

      async function handlerDelete(user){
        console.log(user)
        const ID = user.id_user
        const params = {
          "id": ID
        }
        const response = await deleteUsers(params)
        if(response.data.code === "000"){
            const users = usersList.filter(item => item.id !== ID)  
            setUsersList(users)
        }else{
            console.log(response)
        }
        

      }
    return (
        <>
            <Nav>
                <ul className='items'>
                    <li key="nav_menu_tareas"><a href='/'>Tareas</a></li>        
                </ul>
            </Nav>
            {

            usersList.length ?
            <Layout>
                  <ModalContentUserEdit
                    isActiveModalUserEdit={isActiveModalUserEdit}
                    setIsActiveModalUserEdit={setIsActiveModalUserEdit}
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                    usersList={usersList}
                    setUsersList={setUsersList}
                  />
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
            </Layout> : null
          }
        </>
    )
}

export default Users
