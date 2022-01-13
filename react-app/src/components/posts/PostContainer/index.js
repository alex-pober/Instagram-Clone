import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PostContainer = ({ posts }) => {
    const [postUser, setpostUsers] = useState([]);

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
    const userInfo = postUser.find(owner => owner.id === userIdOfThisPost)
    ///////////////////////

    return (
        <div>
            <div >
                <NavLink to={`/users/${userInfo?.id}`}>
                    <p>{userInfo?.username}</p>
                </NavLink>
                <NavLink to={`/posts/${posts.id}`}>
                    <img key={posts.id} alt={posts.caption} src={posts.imgURL} width="250px"></img>
                    <p>{posts.caption}</p>
                </NavLink>
            </div>
        </div>
    )
}

export default PostContainer
