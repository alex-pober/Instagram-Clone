import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

const NewPostForm = () => {
    const [errors, setErrors] = useState([]);
    const [imgURL, setImgURL] = useState('');
    const [caption, setCaption] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const submit = async (e) => {
        e.preventDefault();

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
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
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
                <button type='submit'>Login</button>
            </div>
        </form>
    )
};

export default NewPostForm
