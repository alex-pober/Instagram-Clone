import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {BsCardImage} from 'react-icons/bs';
import { addOnePost } from "../../../store/posts";
import './newPostForm.css';


const NewPostForm = () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [imgURL, setImgURL] = useState(null);
    const [imgLoading, setImgLoading] = useState(false);
    const [caption, setCaption] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const validUrl = require('valid-url');

    const validate = () => {
        const errors = [];
        // if (!imgURL || !validUrl.isUri(imgURL)) {
        //     errors.push("Please provide an image URL for your photo.")
        // }
        // else if (caption.length > 2200) {
        //     errors.push("Character limit is 2200.")
        // }
        return errors
    }


    const submit = async (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors.length > 0) return setErrors(errors);
        const newPost = {
            user_id: user.id,
            image:imgURL,
            caption,
        }
        console.log(newPost.image);
        setImgLoading(true);
        let submited = await dispatch(addOnePost(newPost))
        if (submited) {
            setImgLoading(false);
            history.push(`/users/${user.id}`)
        }
    }

    const updateImgURL = e => {
        setImgURL(e.target.files[0])
    }

    const updateCaption = e => {
        setCaption(e.target.value)
    }

    const empty = (imgURL == "")

    return (
        <div className="newpost">
            <form className="newpostForm" onSubmit={submit}>
                <div className="errors">
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className="nameandpic">
                    <img id="profileButton" class="" src={user.profileURL} alt="demo"></img>
                    <p>&nbsp;&nbsp;{user.name}</p>
                </div>
                <p className="createTitle">Create new post</p>
                {empty
                    ? <BsCardImage className="holderimg"/>
                    : <img className="previewImage" src={imgURL} ></img>
                }
                <div>
                    <label htmlFor='imgURL'></label>
                    <input
                        name='imgURL'
                        type='file'
                        accept="image/*"
                        placeholder="Image"
                        onChange={updateImgURL}
                        width="600px"
                    />
                </div>
                <div>
                    <label  htmlFor='caption'></label>
                    <textarea
                        className='input-element'
                        name='caption'
                        type='text'
                        placeholder="Write a caption..."
                        value={caption}
                        onChange={updateCaption}
                    />
                    <p className="characterLimit">{caption.length}/2200</p>
                </div>
                <button type='submit'>Share</button>
            </form>
        </div>
    )
};

export default NewPostForm
