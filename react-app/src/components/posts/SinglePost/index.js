import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, deleteOnePost } from "../../../store/posts";
import { getAllLikes, likePost, unlikePost } from "../../../store/likes";
import CommentFeed from "../../comments/CommentFeed";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import './style.css';
import EditCommentForm from "../../comments/EditCommentForm";
import NewCommentForm from "../../comments/NewComment";

const SinglePost = ({ post }) => {
    const [postUser, setpostUsers] = useState([]);
    const [editCommentOpen, setEditCommentOpen] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }
    })

    const allLikeToThisPost = useSelector(state => {
        if (state.likes) {
            return Object.values(state?.likes)
                .filter(like => like?.post_id === +post.id)
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
        isLiked ? dispatch(unlikePost(userId, post.id)) : dispatch(likePost(userId, post.id))
    }

    return (
        <div>
            <div>
                <i>{post?.username}</i>
            </div>
            <div>
                <img alt={post?.caption} src={post?.imgURL} width="250px"></img>
                <p>{post?.caption}</p>
            </div>
            <div>
                {post?.user_id === +userId && (
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                )}
                {post?.user_id === +userId && (
                    <NavLink to={`/posts/${post.id}/edit`}>
                        <button>Edit</button>
                    </NavLink>

                )}
                <div>
                    {userId && isLiked && (
                        <BsHeartFill className="hearts" id="like" onClick={() => handleLike(post.id)} />
                    )}
                    {userId && !isLiked && (
                        <BsHeart className="hearts" id="unlike" onClick={() => handleLike(post.id)} />
                    )}
                </div>
                <div>
                    {userId && (
                        <>
                            <FaRegComment className="hearts" id='comment' onClick={() => setEditCommentOpen(true)} />
                            {editCommentOpen && (
                                <NewCommentForm post={post} />
                            )}
                        </>
                    )}
                </div>
            </div>
            <div>
                <CommentFeed post={post} />
            </div>
        </div>
    )
}

export default SinglePost
