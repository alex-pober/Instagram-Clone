import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, deleteOnePost } from "../../../store/posts";
import { getAllLikes, likePost, unlikePost } from "../../../store/likes";
import { getAllLikesAllPosts } from '../../../store/allpostsrandom';
import CommentFeed from "../../comments/CommentFeed";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import './style.css';
import NewCommentForm from "../../comments/NewComment";

const SinglePost = ({ post }) => {
    const [postUser, setpostUsers] = useState([]);
    const [editCommentOpen, setEditCommentOpen] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }
    })

    const allLikeToThisPost = useSelector(state => {
        if (state.likes) {
            return Object.values(state.likes)
                .filter(like => like?.post_id === +post.id)
        }
    })

    const isLiked = allLikeToThisPost.filter(like => like.user_id === userId).length > 0 ? true : false

    // useEffect(() => {
    //     dispatch(getAllPosts())
    //     dispatch(getAllLikes())
    // }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteOnePost(id))
        history.push(`/`)
    }

    const handleLike = () => {
        isLiked ? dispatch(unlikePost(userId, post.id)) : dispatch(likePost(userId, post.id))
    }

    return (
        <div className='post-container'>
            <div className='image-container'>
                <img className="post-image" alt={post?.caption} src={post?.imgURL} width="250px"></img>
            </div>
            <div className='text-comment-container'>
                <NavLink to={`/users/${post?.user_id}`} className="post-username-container">
                    <img src={post?.userProfilePic} className='post-user-profileimg'></img>
                    <p className="post-username">{post?.username}</p>
                </NavLink>
                <div>
                    <p className="post-caption">{post?.caption}</p>
                </div>
                <div className="user-options-container">
                    {post?.user_id === +userId && (
                        <NavLink to={`/posts/${post.id}/edit`}>
                            <AiOutlineEdit className="edit-profile-link" />
                        </NavLink>
                    )}
                    {post?.user_id === +userId && (
                        <AiFillDelete onClick={() => handleDelete(post.id)} className="post-delete-button" />
                    )}
                </div>
                <div className="comment-feed">
                    <CommentFeed post={post} />
                </div>
                <div>
                    <div className='comment-like-container'>
                        <div className='like-container'>
                            {userId && isLiked && (
                                <BsHeartFill className="hearts" id="like" onClick={() => handleLike(post.id)} />
                            )}
                            {userId && !isLiked && (
                                <BsHeart className="hearts" id="unlike" onClick={() => handleLike(post.id)} />
                            )}
                        </div>
                        <div className="comment-container">
                            {userId && (
                                <>
                                    <FaRegComment className="hearts" id='comment' onClick={() => setEditCommentOpen(!editCommentOpen)} />
                                    {editCommentOpen && (
                                        <NewCommentForm post={post} />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
