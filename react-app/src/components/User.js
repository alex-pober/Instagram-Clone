import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/posts";
import { followUser, unfollowUser, getAllFollows } from "../store/follows"
import { getAllFollowers } from "../store/followers"

function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const post = useSelector(state => state.posts)
  const follower = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
  })
  const isFollowed = useSelector(state => state.followers[follower])

  const myPosts = Object.values(post).filter(posts => posts.user_id === +userId)
  const QOfM = myPosts.length

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllFollows(+userId))
    dispatch(getAllFollowers(+userId))
  }, [dispatch])

  //////////////////////////// Evalute the posibility to change into a reducer/store
  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);
  ///////////////////////////


  // Like post function
  const handleFollow = async () => {
    let followed = +userId
    //create unfolllow and follow
    isFollowed ? dispatch(unfollowUser(follower, followed)) : dispatch(followUser(follower, followed))
  };


  return (
    <div>
      <div>
        <p>{user.username}</p>
        <img src={user.profileURL} alt={user.username} width="75px" max-height='75px' />
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <p>Number of Posts {QOfM}</p>
        <button>Edit Profile</button>

        {userId && isFollowed && (
          <button onClick={() => handleFollow(userId)}>UNFOLLOW</button>
        )}
        {userId && !isFollowed && (
          <button onClick={() => handleFollow(userId)}>FOLLOW</button>
        )}

      </div>
      <div>
        {myPosts.map(post => (
          <div key={post.id}>
            <img key={post.id} src={post.imgURL} alt={post.caption} width="250px" max-height='250px'></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
