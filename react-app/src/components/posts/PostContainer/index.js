import React from "react";

const PostContainer = ({ posts }) => {
    return (
        <div>
                <div>
                    <img src={posts.imgURL}></img>
                    <p>{posts.caption}</p>
                </div>
        </div>
    )
}

export default PostContainer
