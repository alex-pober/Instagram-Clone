import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addOnePost } from "../../../store/posts";
import './newPostForm.css';


const NewPostForm = () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [imgURL, setImgURL] = useState('');
    const [caption, setCaption] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const validUrl = require('valid-url');

    const validate = () => {
        const errors = [];
        if (!imgURL || !validUrl.isUri(imgURL)) {
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
            history.push(`/users/${user.id}`)
        }
    }

    const updateImgURL = e => {
        setImgURL(e.target.value)
    }

    const updateCaption = e => {
        setCaption(e.target.value)
    }

    return (
        <div class="post-main">

            <div className="post">
                <form onSubmit={submit}>
                    <div>
                        <div>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                        <div>
                        <img src="https://i.imgur.com/2V6sFyy.png"></img>
                            <label htmlFor='imgURL'>Image URL</label>
                            <input
                                name='imgURL'
                                type='text'
                                placeholder="add image url"
                                value={imgURL}
                                onChange={updateImgURL}
                            />
                        </div>
                        <div>
                            <label  htmlFor='caption'>Caption</label>
                            <input
                                className='input-element'
                                name='caption'
                                type='text'
                                placeholder="add caption"
                                value={caption}
                                onChange={updateCaption}
                            />
                        </div>
                        <button class='button1' type='submit'>Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default NewPostForm
