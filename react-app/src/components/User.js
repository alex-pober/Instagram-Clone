import React, { useState, useEffect } from 'react';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/posts";
import { followUser, unfollowUser, getAllFollows } from "../store/follows"
import { getAllFollowers } from "../store/followers"
import { BsGearWide } from "react-icons/bs";
import ProfilePostContainer from './posts/ProfilePostContainer'
import './userstyle.css'

function User() {
  const dispatch = useDispatch()
  const { userId } = useParams();
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const follower = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
  })
  const user = useSelector(state => state.session.user)
  const post = useSelector(state => state.posts)
  const user_id = useSelector(state => state.session.user.id)
  const isFollowed = useSelector(state => state.follows[follower])
  const followers = useSelector(state => state.followers)
  const following = useSelector(state => state.follows)

  const myPosts = Object.values(post).filter(posts => posts.user_id === +userId)
  const QOfM = myPosts.length
  const numOfFollowers = Object.values(followers)?.length
  const numOfFollowing = Object.values(following)?.length



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


  const handleFollow = async () => {
    let followed = +userId
    isFollowed ? dispatch(unfollowUser(follower, followed)) : dispatch(followUser(follower, followed))
  };


  return (
    <div className='user-profile-page'>
      <div>
        <div className='top-user-container'>
          <div className='profile-img-container'>
            <img src={user.profileURL} alt={user.username} width="75px" max-height='75px' className='user-pro-pic' />
          </div>
          <div className='user-info-right'>
            <div className='user-info-right-top'>
              <p className='user-name-bold'>{user.username}</p>
              {+userId === +user_id && (
                <NavLink to={`/profile-edit`}>
                  {/* <BsGearWide id='gear' /> */}
                  <button className="edit-profile-button">Edit Profile</button>
                </NavLink>
              )}
            </div>
            <div className='user-info-right-mid'>
              <p><b>{QOfM}</b> posts</p>
              <p><b>{numOfFollowers}</b> followers</p>
              <p><b>{numOfFollowing}</b> following</p>
            </div>
            <div className='user-info-right-bot'>
              <p>{user.name}</p>
              <p>{user.bio}</p>
            </div>
          </div>
        </div>
        <div className='follow-button-container'>
          {userId && (+userId !== +follower) && isFollowed && (
            <button onClick={() => handleFollow(userId)} className='unfollow-button'>Unfollow</button>
          )}
          {userId && (+userId !== +follower) && !isFollowed && (
            <button onClick={() => handleFollow(userId)} className='follow-button'>Follow</button>
          )}
        </div>
        <div className='user-photos-container'>
          {myPosts.map(post => (
            <div className='one-photo-container'>
              <ProfilePostContainer posts={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default User;
