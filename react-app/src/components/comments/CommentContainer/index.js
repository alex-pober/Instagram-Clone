import React, {useState} from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteOneComment, getAllComments } from "../../../store/comments";
import EditCommentForm from "../EditCommentForm";

const CommentContainer = ({ comment }) => {
    const postId = useParams().id
    const dispatch = useDispatch()
    const post = useSelector(state => state.posts)
    const [editPopUp, setEditPopUp] = useState(false)
    const history = useHistory()
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }})

        const handleDelete = (id) => {
            dispatch(deleteOneComment(id))
            history.push(`/posts/${id}`)
        }

        const openPopUp = () => {
            setEditPopUp(!editPopUp)
        }


    return (
        <div>
            <div>
                <p>{comment.comment_text}</p>
                <button>Like</button>
                {post[postId]?.user_id == userId && (
                        <button onClick={() => handleDelete(comment.id)}>Delete</button>
                        )}
                    {post[postId]?.user_id == userId && (
                        <>
                        <button onClick={openPopUp}>Edit Comment</button>
                        {editPopUp && (
                            <EditCommentForm comment={comment}/>
                        )}
                        </>
                        )}
            </div>
        </div>
    )
}

export default CommentContainer
