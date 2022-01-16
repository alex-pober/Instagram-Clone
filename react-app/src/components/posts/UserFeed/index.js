import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllFollows } from "../../../store/follows";
import { getAllPosts } from "../../../store/posts";
import { refreshUserState } from "../../../store/session";
import PostContainer from '../PostContainer';
import './UserFeed.css'

const UserFeed = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const user = useSelector(state => {
        if (state.session.user) {
            return state.session.user
        }
    })

    //this is for followed users
    const followedUsers = useSelector(state => {

        if (state.session.user) {
            return state.session.user.following
        }
    })
    const feed = Object.values(posts)


    let followersPost = []
    for (let i = 0; i < followedUsers?.length; i++) {
        const followedUser = followedUsers[i];
        for (let i = 0; i < feed.length; i++) {
            const post = feed[i];
            if (post.user_id === followedUser) {
                followersPost.push(post)
            }
        }
    }
    followersPost.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
    useEffect(() => {
        dispatch(refreshUserState(user?.id))
        dispatch(getAllPosts())
    }, [dispatch])


    if (!user) {
        return (
            <Redirect to='/login' />
        )
    }

    return (
        <>
            {followersPost.map(posts => (
                <PostContainer key={posts.id} posts={posts} />
            ))}
        </>
     
    )
}

export default UserFeed
