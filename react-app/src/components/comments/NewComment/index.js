import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addOneComment } from "../../../store/comments";

const NewCommentForm = ({ post }) => {
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
        setErrors([]);

        const newComment = {
            user_id: user.id,
            post_id: post.id,
            comment_text
        }

        let submitted = await dispatch(addOneComment(newComment))
            .catch(async res => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

        if (submitted) {
            setCommentText('')
        }
    }

    return (
        <form onSubmit={submit}>
            <div>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label htmlFor='comment_text'>Comment</label>
                    <input
                        name='comment_text'
                        type='text'
                        placeholder="Comment..."
                        value={comment_text}
                        onChange={updateCommentText}
                    />
                </div>
                <button type='submit'>Post</button>
            </div>
        </form>
    )
}

export default NewCommentForm
