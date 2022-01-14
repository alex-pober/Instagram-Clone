import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllFollows } from "../../../store/follows";
import { getAllPosts } from "../../../store/posts";
import PostContainer from '../PostContainer';

const UserFeed = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(getAllPosts())
    }, [dispatch])

    const feed = Object.assign([], posts)

    return(
        <div>
            {feed.map(posts => (
                <PostContainer key={posts.id} posts={posts} />
            ))}
        </div>
        )
}

export default UserFeed
