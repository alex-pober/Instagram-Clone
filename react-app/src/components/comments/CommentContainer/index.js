import React, {useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteOneComment } from "../../../store/comments";
import EditCommentForm from "../EditCommentForm";

const CommentContainer = ({ comment }) => {
    const [users, setUsers] = useState([]);
    const postId =comment.post_id
    const dispatch = useDispatch()
    const [editPopUp, setEditPopUp] = useState(false)
    const history = useHistory()
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


    return (
        <div>
            <div>
                <p>{comment.comment_text}</p>
                {comment?.user_id === +userId && (
                        <button onClick={() => handleDelete(comment.id)}>Delete</button>
                        )}
                {comment?.user_id === +userId && (
                    <>
                        <button onClick={openPopUp}>Edit Comment</button>
                        {editPopUp && (
                            <EditCommentForm comment={comment} editState={editPopUp}/>
                        )}
                    </>
                    )}
            </div>
        </div>
    )
}

export default CommentContainer
