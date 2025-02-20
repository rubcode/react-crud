import Layout from "./layout"
import ContainerTable from "./container-table"
import TableComponent from "./Table/table-component"
import { getComments } from "../Services/comments"
import { useState,useEffect } from "react"

function TaskView() {
    const [headersComments, setHeadersComments] = useState([])
    const [commentsList, setCommentsList] = useState([])

    useEffect(() => {
        getComments().then(({data,isError}) => {
          if(isError){
            console.log('Error al extraer datos');
            return
          }
          
          const commentsList = data.data
          const headers =  (commentsList.length > 0) ? ["NO","COMENTARIO","ACCIONES"] : []
          setCommentsList(commentsList)
          setHeadersComments(headers)
        }); 
      },[]);
    return (
        <Layout>
            <h1 className="title">Comentarios</h1>
            <ContainerTable>
                <TableComponent 
                    headers={headersComments}
                    data={commentsList}
                />
            </ContainerTable>
        </Layout>
    )
}

export default TaskView
