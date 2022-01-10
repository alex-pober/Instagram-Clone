import React from "react";
import { useSelector } from 'react-redux';
import PostContainer from './PostContainer';

const UserFeed = () => {
    const posts = useSelector(state => state.posts);
    return (
        <div>
            {posts.map(post => (
                <PostContainer post={post} />
            ))}
        </div>
    )
}
