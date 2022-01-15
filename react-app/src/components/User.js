import React, { useState, useEffect } from 'react';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/posts";
import { followUser, unfollowUser, getAllFollows } from "../store/follows"
import { getAllFollowers } from "../store/followers"
import { BsGearWide } from "react-icons/bs";
import { Modal } from '../context/Modal'
import ProfilePostContainer from './posts/ProfilePostContainer'
import './userstyle.css'

function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const post = useSelector(state => state.posts)
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const follower = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
  })

  const user_id = useSelector(state => state.session.user.id)
  const isFollowed = useSelector(state => state.follows[follower])
  const myPosts = Object.values(post).filter(posts => posts.user_id === +userId)
  const QOfM = myPosts.length



  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

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


  const handleFollow = async () => {
    let followed = +userId
     isFollowed ? dispatch(unfollowUser(follower, followed)) : dispatch(followUser(follower, followed))
  };


  // if (!users.includes(userId)) {
  //   return (
  //       <Redirect to='/' />
  //   )
  // }



  return (
    <div>
      <div>
        <p>{user.username}</p>
        <img src={user.profileURL} alt={user.username} width="75px" max-height='75px' />
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <p>Number of Posts {QOfM}</p>
        {+userId === +user_id && (
        <NavLink to={`/profile-edit`}>
          <BsGearWide id='gear'/>
        </NavLink>
        )}
        {userId && isFollowed && (
          <button onClick={() => handleFollow(userId)}>UNFOLLOW</button>
        )}
        {userId && !isFollowed && (
          <button onClick={() => handleFollow(userId)}>FOLLOW</button>
        )}

      </div>
      <div>
        {myPosts.map(post => (
          <div>
            <ProfilePostContainer posts={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
