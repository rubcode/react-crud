import React, { useRef } from 'react';
import styled from 'styled-components'
import Overlay from './overlay';
import TextArea from '../Forms/text-area';
import { Button } from '../Forms/button'
import ReactDOM from 'react-dom'
import { updateComment } from '../../Services/comments'

const modalRoot = document.getElementById("portal-comments-edit");

class ModalPortal extends React.Component{
    constructor(props){
        super(props);
        this.el = document.createElement('div');
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.el);
    }

    componentDidMount(){
        modalRoot.appendChild(this.el);
    }

    render(){
        return ReactDOM.createPortal(this.props.children,this.el);
    }
}

const ModalContentStyled = styled.div`
    background: var(--white);
    color: var(--black);
    padding: 2rem;
    border-radius: 0.5rem;
    position: fixed;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    inline-size: 30rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .title{
        font: var(--titleFont);
        color: var(--accentColor);
        margin: 0;
    }
`

function ModalContentCommentEdit({...props}) {
    const form = useRef(null)
    function handlerChangeComment(e){
        const updatedComment = { ...props.selectedComment, comment: e.target.value };
        props.setSelectedComment(updatedComment)
    }

    async function handlerSubmit(e){
        e.preventDefault()
        const formData = new FormData(form.current)
        const ID = props.selectedComment.id
        const comment = formData.get("comment")
        const idTask = props.selectedComment.id_task;
        const status = props.selectedComment.status;
        let list = props.commentsList
        const params = {
            "id": ID,
            "comment": comment,
            "idTask": idTask,
            "status": status
        }
        const index = list.findIndex(obj => obj.id === ID);
        const response = await updateComment(params,ID)
        if(response.data.code === "000"){
            list[index] = {...list[index],comment:comment}
            props.setCommentsList(list)
            props.setIsActiveModalCommentEdit(false)
        }else{
            console.log(response)
        }
               
    }

    return (
        <Overlay>
            <ModalContentStyled>
                <h2 className='title'>Editar Comentario</h2>
                <form ref={form} onSubmit={handlerSubmit}>
                    <TextArea 
                        name='comment'
                        placeholder='Escribe tu comentario'
                        onChange={handlerChangeComment}
                        value={props.selectedComment.comment}
                    />
                     <Button
                        text="Editar Comentario"
                    />
                </form>
                
            </ModalContentStyled>
        </Overlay>
    )
}

export default function ModalCommentEdit({...props}){
    if(props.isActiveModalCommentEdit){
        return(
            <ModalPortal>
                <ModalContentCommentEdit 
                    setIsActiveModalCommentEdit={props.setIsActiveModalCommentEdit}
                    selectedComment={props.selectedComment}
                    setSelectedComment={props.setSelectedComment}
                    commentsList={props.commentsList}
                    setCommentsList={props.setCommentsList}
                />
            </ModalPortal>
        )
    }
    return null

}
