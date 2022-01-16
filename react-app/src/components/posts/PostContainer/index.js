import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import SinglePost from "../SinglePost";
import "./postContainer.css"

const PostContainer = ({ posts }) => {
    const [postUser, setpostUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="post">
            <div className="">
                <NavLink to={`/users/${posts.user_id}`}>
                    <p>{posts.username}</p>
                </NavLink>
                <div className="post">
                    <img key={posts.id} alt={posts.caption} src={posts.imgURL} onClick={() => setShowModal(true)} width="250px"></img>
                    <p>{posts.caption}</p>
                </div>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <SinglePost post={posts} />
                    </Modal>
                )}
            </div>
        </div>
    )
}

export default PostContainer
