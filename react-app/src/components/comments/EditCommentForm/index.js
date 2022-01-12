import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateOneComment } from "../../../store/comments";

const EditCommentForm = ({comment}) => {
    const history = useHistory();
    const postId = useParams().id
    const dispatch = useDispatch();
    console.log(comment)
    const [errors, setErrors] = useState([]);
    const [comment_text, setComment] = useState('');
    const oldComment = useSelector(state => state?.comments[comment.id].comment_text)
    const user = useSelector(state => state?.session.user);
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }})

    useEffect(() => {
        setComment(oldComment)
    }, [])

    const updateComment = e => {
        setComment(e.target.value)
    }

    const onEdit = async e => {
        e.preventDefault()
        const editComment = {
            id: +comment.id,
            user_id: userId,
            post_id: postId,
            comment_text
        }
        let submitted = await dispatch(updateOneComment(editComment))
        if (submitted) {
            history.go(`/posts/${postId}`)
        }
    }

    return (
        <form onSubmit={onEdit}>
            <div>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <input
                        name='comment'
                        type='text'
                        placeholder="comment..."
                        value={comment_text}
                        onChange={updateComment}
                    />
                </div>
                <button type='submit'>Post</button>
            </div>
        </form>
    )
}

export default EditCommentForm
