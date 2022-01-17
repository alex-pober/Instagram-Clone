import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateOnePost } from "../../../store/posts";
import "./EditPostForm.css"

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
        setErrors([]);

        const editedPost = {
            id: +postId,
            user_id: userId,
            imgURL: image,
            caption
        }
        return dispatch(updateOnePost(editedPost))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          })
          .then((res) => res && history.push(`/`));
        // if (submitted) {
        //     history.push(`/posts/${postId}`)

    }

    return (
        <form className="edit-all" onSubmit={onEdit}>
            <div className="errors">
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div className="edit-image">
                <img alt={postId} src={image} width="400px"></img>
            </div>
            <div className="edit-caption">
                <p htmlFor='caption'>Caption</p>
                <textarea
                    name='caption'
                    type='text'
                    placeholder="Caption"
                    value={caption}
                    onChange={updateCaption}
                />
            <button className="submit-new-comment" type='submit'>Update Caption</button>
            </div>
        </form>
    )
}

export default EditPostForm
