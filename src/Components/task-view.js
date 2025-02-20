import Layout from "./Containers/layout"
import ContainerTable from "./Containers/container-table"
import TableComponent from "./Table/table-component"
import ModalCommentEdit from './Modals/modal-commments-edit'
import { getComments } from "../Services/comments"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TaskView() {
    const params = useParams();
    let idTask = params.idTask
    const [headersComments, setHeadersComments] = useState([])
    const [commentsList, setCommentsList] = useState([])
    const [isActiveModalCommentEdit,setIsActiveModalCommentEdit] = useState(false)

    if(!idTask)
      idTask = 1

    useEffect(() => {
        getComments().then(({data,isError}) => {
          if(isError){
            console.log('Error al extraer datos');
            return
          }
          
          const commentsList = data.data
          const filteredComments = commentsList.filter(comment => parseInt(comment.id) === parseInt(idTask))
          const headers =  (filteredComments.length > 0) ? ["NO","COMENTARIO","ACCIONES"] : []
          setCommentsList(filteredComments)
          setHeadersComments(headers)
        }); 
      },[idTask]);

      function handlerEdit(item){
        setIsActiveModalCommentEdit(true)
      }
      function handlerDelete(item){
        const ID = item.id
        console.log(ID)
      }
    return (
        <Layout>
            {
              commentsList.length ? 
                <div>
                  <ModalCommentEdit
                    isActiveModalCommentEdit={isActiveModalCommentEdit}
                    setIsActiveModalCommentEdit={setIsActiveModalCommentEdit}
                  />
                  <h1 className="title">Comentarios</h1>
                  <ContainerTable>
                      <TableComponent 
                          headers={headersComments}
                          data={commentsList}
                          type="comments"
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
                </div>
              : null
            }
        </Layout>
    )
}

export default TaskView
