import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from "../../../store/posts";
import PostContainer from '../PostContainer';

const UserFeed = () => {
    const posts = useSelector(state => state.posts);
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect (() => {
        dispatch(getAllPosts())
    }, [dispatch])

    const feed = Object.assign([], posts)

    if (!user) {
        return (
            <Redirect to='/login' />
        )
    }

    return(
        <div>
            {feed.map(posts => (
                <PostContainer key={posts.id} posts={posts} />
            ))}
        </div>
        )
}

export default UserFeed
