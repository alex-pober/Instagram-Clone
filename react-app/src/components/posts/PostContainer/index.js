import React from "react";
import { NavLink } from "react-router-dom";

const PostContainer = ({ posts }) => {  
    return (
        <div>
                <div> 
                    <NavLink to={`/posts/${posts.id}`}>
                        <img src={posts.imgURL} width="250px"></img>
                        <p>{posts.caption}</p>
                    </NavLink>
                </div>
        </div>
    )
}

export default PostContainer
