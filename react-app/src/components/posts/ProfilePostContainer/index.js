import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import NewCommentForm from "../../comments/NewComment";
import { getAllPosts, deleteOnePost } from "../../../store/posts";
import { getAllLikes, likePost, unlikePost } from "../../../store/likes";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import CommentFeed from "../../comments/CommentFeed";
import './ExploreFeed.css'
import './style.css';

const ProfilePostContainer = ({ posts }) => {
    const [showModal, setShowModal] = useState(false);
    const [editCommentOpen, setEditCommentOpen] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory();
    const currentUserId = useParams().userId;
    console.log(currentUserId)
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }
    })

    const allLikeToThisPost = useSelector(state => {
        if (state.likes) {
            return Object.values(state.likes)
                .filter(like => like?.post_id === +posts.id)
        }
    })

    const isLiked = allLikeToThisPost.filter(like => like.user_id === userId).length > 0 ? true : false

    useEffect(() => {
        setShowModal(false);
    }, [currentUserId])

    const handleDelete = (id) => {
        dispatch(deleteOnePost(id))
        setShowModal(false)
    }

    const handleLike = () => {
        isLiked ? dispatch(unlikePost(userId, posts.id)) : dispatch(likePost(userId, posts.id))
    }

    return (
        <div>
            <div >
                <img className="individualImage" key={posts.id} alt={posts.caption} src={posts.imgURL} onClick={() => setShowModal(true)} width="250px" height="250px" object-fit="cover" title="view"></img>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='post-container'>
                        <div className='image-container'>
                            <img className="post-image" alt={posts?.caption} src={posts?.imgURL} width="250px"></img>
                        </div>
                        <div className='text-comment-container'>
                            <NavLink to={`/users/${posts.user_id}`} className="post-username-container">
                                <img src={posts.userProfilePic} className='post-user-profileimg'></img>
                                <p className="post-username">{posts.username}</p>
                            </NavLink>
                            <div>
                                <p className="post-caption">{posts?.caption}</p>
                            </div>
                            <div className="user-options-container">
                                {posts?.user_id === +userId && (
                                    <NavLink to={`/posts/${posts.id}/edit`}>
                                        <AiOutlineEdit className="edit-profile-link" />
                                    </NavLink>
                                )}
                                {posts?.user_id === +userId && (
                                    <AiFillDelete onClick={() => handleDelete(posts.id)} className="post-delete-button" />
                                )}
                            </div>
                            <div className="comment-feed">
                                <CommentFeed post={posts} />
                            </div>
                            <div>
                                <div className='comment-like-container'>
                                    <div className='like-container'>
                                        {userId && isLiked && (
                                            <BsHeartFill className="hearts" id="like" onClick={() => handleLike(posts.id)} />
                                        )}
                                        {userId && !isLiked && (
                                            <BsHeart className="hearts" id="unlike" onClick={() => handleLike(posts.id)} />
                                        )}
                                    </div>
                                    <div className="comment-container">
                                        {userId && (
                                            <>
                                                <FaRegComment className="hearts" id='comment' onClick={() => setEditCommentOpen(!editCommentOpen)} />
                                                {editCommentOpen && (
                                                    <NewCommentForm post={posts} />
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default ProfilePostContainer
