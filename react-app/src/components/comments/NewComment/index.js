import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addOneComment } from "../../../store/comments";
import './comment.css'

const NewCommentForm = ({post}) => {
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const [comment_text, setCommentText] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const updateCommentText = e => {
        setCommentText(e.target.value)
    }

    const submit = async e => {
        e.preventDefault()

        const newComment = {
            user_id: user.id,
            post_id: post.id,
            comment_text
        }

        let submitted = dispatch(addOneComment(newComment))

        if (submitted) {
            setCommentText('')
        }
    }

    return (
        <form onSubmit={submit} >
            <div>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className="new-comment-box">
                    <input
                        className="new-comment-input"
                        name='comment_text'
                        type='text'
                        placeholder="Comment..."
                        value={comment_text}
                        onChange={updateCommentText}
                    />
                    <button className="submit-new-comment" type='submit'>Post</button>
                </div>
            </div>
        </form>
    )
}

export default NewCommentForm
