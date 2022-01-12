import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { useHistory } from "react-router-dom";
import { getAllPosts } from "../../../store/posts";

function ProfilePage() {
  const history = useHistory()
  const dispatch = useDispatch();
  const userId = useParams();
  const follower = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
  })
  const user = useSelector(state => state.session.user);
  const userPosts = useSelector(state => {
    if (state.posts) {
      return Object.values(state.posts)
        .filter(post => post?.user_id === +userId)
    }
  })

  const isFollowed = allLikeToThisPost.filter(like => like.user_id === userId).length > 0 ? true : false

  // Like post function
  const handleFollow = async () => {
    let followed = userId
    //create unfolllow and follow
    isFollowed ? dispatch(unfollowUser(followed, follower)) : dispatch(followUser(followed, follower))
  };

  useEffect(() => {
    dispatch(getAllPosts())
    //get all follows
  }, [dispatch])


  return (
    <div>
      <div className="profileUser">
        <img src={user.profileURL} alt=''/>
        <div>{user.username}</div>
        <div>{user.bio}</div>

      </div>
    </div>
  );
}

export default ProfilePage;
