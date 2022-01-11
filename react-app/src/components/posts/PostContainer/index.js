import React from "react";

const PostContainer = ({ posts }) => {
    return (
        <div>
                <div>
                    <img src={posts.imgURL} width="250px"></img>
                    <p>{posts.caption}</p>
                </div>
        </div>
    )
}

export default PostContainer
