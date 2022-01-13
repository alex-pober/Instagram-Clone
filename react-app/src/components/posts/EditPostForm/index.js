import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateOnePost } from "../../../store/posts";

const EditPostForm = () => {
    const history = useHistory();
    const postId = useParams().id
    const [errors, setErrors] = useState([]);
    const [caption, setCaption] = useState('');
    const oldCaption = useSelector(state => state?.posts[postId].caption)
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }})
    const image = useSelector(state => {
        return state?.posts[postId].imgURL
    })

    useEffect(() => {
        setCaption(oldCaption)
    }, [])


    const dispatch = useDispatch();

    const updateCaption = e => {
        setCaption(e.target.value)
    }

    const onEdit = async e => {
        e.preventDefault()
        const editedPost = {
            id: +postId,
            user_id: userId,
            imgURL: image,
            caption
        }
        let submitted = await dispatch(updateOnePost(editedPost))
        if (submitted) {
            history.push(`/posts/${postId}`)
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
                    <img alt={postId} src={image} width="250px"></img>
                </div>
                <div>
                    <label htmlFor='caption'>Caption</label>
                    <input
                        name='caption'
                        type='text'
                        placeholder="Caption"
                        value={caption}
                        onChange={updateCaption}
                    />
                </div>
                <button type='submit'>Post</button>
            </div>
        </form>
    )
}

export default EditPostForm
