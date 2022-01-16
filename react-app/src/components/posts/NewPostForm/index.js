import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addOnePost } from "../../../store/posts";

const NewPostForm = () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [imgURL, setImgURL] = useState('');
    const [caption, setCaption] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const validate = () => {
        const errors = [];
        if (!imgURL) {
            errors.push("Please provide an image URL for your photo.")
        }
        return errors
    }

    const submit = async (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors.length > 0) return setErrors(errors);

        const newPost = {
            user_id: user.id,
            imgURL,
            caption,
        }
        let submited = await dispatch(addOnePost(newPost))
        if (submited) {
            history.push('/feed')
        }
    }

    const updateImgURL = e => {
        setImgURL(e.target.value)
    }

    const updateCaption = e => {
        setCaption(e.target.value)
    }

    return (



        <form onSubmit={submit}>
            <div>
                <div>
                    {errors.length > 0 && (
                        <div>
                            {errors}
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor='imgURL'>Image URL</label>
                    <input
                        name='imgURL'
                        type='text'
                        placeholder="Image URL"
                        value={imgURL}
                        onChange={updateImgURL}

                    />
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
};

export default NewPostForm
