import React, {useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteOneComment } from "../../../store/comments";
import EditCommentForm from "../EditCommentForm";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import './CommentContainer.css'

const CommentContainer = ({ comment }) => {
    const dispatch = useDispatch()
    const [editPopUp, setEditPopUp] = useState(false)
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }})

    const handleDelete = (id) => {
        dispatch(deleteOneComment(id))
    }

    const openPopUp = () => {
        setEditPopUp(!editPopUp)
    }

    const sendDataToParent = (data) => {
        setEditPopUp(data)
    }


    return (
        <div className="small-comment-container">
            <div>
                {!editPopUp && (
                    <p className="comment-text">{comment.comment_text}</p>
                )}
            {comment?.user_id === +userId && (
                <>
                {!editPopUp && (
                    <AiOutlineEdit className="edit-comment" onClick={openPopUp} />
                )}
                {editPopUp && (
                    <EditCommentForm comment={comment} editState={editPopUp} sendDataToParent={sendDataToParent}/>
                )}
                </>
                )}
            {comment?.user_id === +userId && (
                    <AiFillDelete className="delete-comment" onClick={() => handleDelete(comment.id)} />
                    )}
            </div>
        </div>
    )
}

export default CommentContainer
