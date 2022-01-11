import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from "../../../store/posts";
import PostContainer from '../PostContainer';

const UserFeed = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(getAllPosts())
    }, [dispatch])

    const feed = Object.assign([], posts)
    console.log(posts)
    console.log(feed)
    return(
        <div>
            {feed.map(posts => (
                <PostContainer posts={posts} />
            ))}
        </div>
        )
}

export default UserFeed
