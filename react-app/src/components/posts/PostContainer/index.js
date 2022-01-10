import React from "react";

const PostContainer = ({ post }) => {
    return (
        <div>
            {posts.map(post => (
                <div>
                    <img src={post.imgURL}></img>
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
    )
}
