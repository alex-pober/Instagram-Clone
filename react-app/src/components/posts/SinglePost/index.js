import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, deleteOnePost } from "../../../store/posts";
import { getAllLikes, likePost, unlikePost } from "../../../store/likes";
import CommentFeed from "../../comments/CommentFeed";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import './style.css';

const SinglePost = () => {
    const [postUser, setpostUsers] = useState([]);
    const id = +useParams().id
    const post = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }
    })

    ////////////////////////
    const userIdOfThisPost = +post[id]?.user_id

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('/api/users/');
          const responseData = await response.json();
          setpostUsers(responseData.users);
        }
        fetchData();
      }, []);
      const userInfo = postUser.find(owner => owner.id === userIdOfThisPost)
    ///////////////////////

    const allLikeToThisPost = useSelector(state => {
        if (state.likes) {
            return Object.values(state.likes)
                .filter(like => like?.post_id === +id)
        }
    })

    const isLiked = allLikeToThisPost.filter(like => like.user_id === userId).length > 0 ? true : false

    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getAllLikes())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteOnePost(id))
        history.push(`/feed`)
    }

    const handleLike = () => {
        let postId = id
        isLiked ? dispatch(unlikePost(userId, postId)) : dispatch(likePost(userId, postId))
    }


    if (!post[id]) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <div>
            <div>
                <i>{userInfo?.username}</i>
            </div>
            <div>
                <img alt={post[id]?.caption} src={post[id]?.imgURL} width="250px"></img>
                <p>{post[id]?.caption}</p>
            </div>
            <div>
                {post[id]?.user_id === +userId && (
                    <button onClick={() => handleDelete(id)}>Delete</button>
                )}
                {post[id]?.user_id === +userId && (
                    <NavLink to={`/posts/${id}/edit`}>
                        <button>Edit</button>
                    </NavLink>

                )}
                <div>
                    {userId && isLiked && (
                        <BsHeartFill className="hearts" id="like" onClick={() => handleLike(id)} />
                    )}
                    {userId && !isLiked && (
                        <BsHeart className="hearts" id="unlike" onClick={() => handleLike(id)} />
                    )}
                </div>
                <div>
                    {userId && (
                    <NavLink to={`/posts/${id}/new-comment`}>
                        <FaRegComment className="hearts" id='comment' />
                    </NavLink>
                    )}
                </div>
            </div>
            <div>
                <CommentFeed />
            </div>
        </div>
    )
}

export default SinglePost
