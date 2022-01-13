import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import SinglePost from "../SinglePost";

const PostContainer = ({ posts }) => {
    const [postUser, setpostUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    //////////////////////// Evalute the posibility to change into a reducer/store
    const userIdOfThisPost = +posts?.user_id

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setpostUsers(responseData.users);
        }
        fetchData();
    }, []);
    const userInfo = postUser?.find(owner => owner.id === userIdOfThisPost)
    ///////////////////////

    return (
        <div>
            <div >
                <NavLink to={`/users/${userInfo?.id}`}>
                    <p>{userInfo?.username}</p>
                </NavLink>
                <div>
                    {/* <button onClick={() => setShowModal(true)}>Show Post</button> */}
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
