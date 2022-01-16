import React, {useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
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
            <div className="username-container">
                <NavLink to={`/users/${comment.user_id}`} className="comment-username" >{comment.username}</NavLink>
            </div>
            <div className="comment-text-container">
                {!editPopUp && (
                    <p className="comment-text">{comment.comment_text}</p>
                )}
                <div>
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
        </div>
    )
}

export default CommentContainer
