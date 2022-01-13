import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/posts";

function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const post = useSelector(state => state.posts)

  const myPosts = Object.values(post).filter(posts => posts.user_id === +userId)
  const QOfM = myPosts.length

  useEffect(() => {
    dispatch(getAllPosts())
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
  if (!user) {
    return null;
  }

  return (
    <div>
      <div>
        <p>{user.username}</p>
        <img src={user.profileURL} alt={user.username} width="75px" max-height='75px' />
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <p>Number of Posts {QOfM}</p>
        <button>Edit Profile</button>
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
