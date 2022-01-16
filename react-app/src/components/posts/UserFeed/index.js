import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllFollows } from "../../../store/follows";
import { getAllPosts } from "../../../store/posts";
import { refreshUserState } from "../../../store/session";
import PostContainer from '../PostContainer';
import './UserFeed.css'

const UserFeed = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();

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

    const feed = Object.entries(posts)


 let followersPost = []
  for (let i = 0; i < followedUsers?.length; i++) {
    const followedUser = followedUsers[i];
    for (let i = 0; i < feed.length; i++) {
      const post = feed[i];
      if (post[1].user_id === followedUser){
        followersPost.push(post)
      }
    }
}


    useEffect (() => {
        dispatch(refreshUserState(user?.id))
        dispatch(getAllPosts())
    }, [dispatch])


    if (!user) {
        return (
            <Redirect to='/login' />
        )
    }

    return(
        <div >
            {followersPost.map(posts => (
                <PostContainer className="post" key={posts[0]} posts={posts[1]} />
            ))}
        </div>
        )
}

export default UserFeed
