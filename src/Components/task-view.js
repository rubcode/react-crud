import Layout from "./Containers/layout"
import ContainerTable from "./Containers/container-table"
import TableComponent from "./Table/table-component"
import ModalCommentEdit from './Modals/modal-commments-edit'
import { getComments } from "../Services/comments"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteComment } from "../Services/comments"

function TaskView() {
    const params = useParams();
    let idTask = params.idTask
    const [headersComments, setHeadersComments] = useState([])
    const [commentsList, setCommentsList] = useState([])
    const [selectedComment, setSelectedComment] = useState({})
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
          const filteredComments = commentsList.filter(comment => parseInt(comment.id_task) === parseInt(idTask))
          const headers =  (filteredComments.length > 0) ? ["NO","COMENTARIO","ACCIONES"] : []
          setCommentsList(filteredComments)
          setHeadersComments(headers)
        }); 
      },[idTask]);

      function handlerEdit(comment){
        setIsActiveModalCommentEdit(true)
        setSelectedComment(comment)
      }

      async function handlerDelete(comment){
        const ID = comment.id
        const params = {
          "id": ID
        }
        const response = await deleteComment(params)
        if(response.data.code === "000"){
            const comments = commentsList.filter(item => item.id !== ID)  
            setCommentsList(comments)
        }else{
            console.log(response)
        }

      }
    return (
        <Layout>
            {
              commentsList.length ? 
                <div>
                  <ModalCommentEdit
                    isActiveModalCommentEdit={isActiveModalCommentEdit}
                    setIsActiveModalCommentEdit={setIsActiveModalCommentEdit}
                    selectedComment={selectedComment}
                    setSelectedComment={setSelectedComment}
                    commentsList={commentsList}
                    setCommentsList={setCommentsList}
                  />
                  <h1 className="title">Comentarios</h1>
                  <ContainerTable>
                      <TableComponent 
                          headers={headersComments}
                          data={commentsList}
                          type="comments"
                          fieldData={['no','comment']}
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
