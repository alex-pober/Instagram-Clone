import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import NewCommentForm from "../../comments/NewComment";
import { deleteOnePost } from "../../../store/posts";
import { likePost, unlikePost } from "../../../store/likes";
import CommentFeed from "../../comments/CommentFeed";
import './ExploreFeed.css'
import './style.css';

const ExplorePostContainer = ({ posts }) => {
    const [postUser, setpostUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
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
            return Object.values(state.likes)
                .filter(like => like?.post_id === +posts.id)
        }
    })

    const isLiked = allLikeToThisPost.filter(like => like.user_id === userId).length > 0 ? true : false


    const handleDelete = (id) => {
        dispatch(deleteOnePost(id))
        history.push(`/`)
    }

    const handleLike = () => {
        isLiked ? dispatch(unlikePost(userId, posts.id)) : dispatch(likePost(userId, posts.id))
    }

    return (
        <div>
            <div >
                <div>
                    <img className="individualImage" key={posts.id} alt={posts.caption} src={posts.imgURL} onClick={() => setShowModal(true)} width="250px" height="250px" object-fit="cover" title="view"></img>
                </div>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div>
                            <div>
                                <NavLink to={`users/${posts.user_id}`}>
                                    <i>{posts.username}</i>
                                </NavLink>
                            </div>
                            <div>
                                <img alt={posts?.caption} src={posts?.imgURL} width="250px"></img>
                                <p>{posts?.caption}</p>
                            </div>
                            <div>
                                {posts?.user_id === +userId && (
                                    <button onClick={() => handleDelete(posts.id)}>Delete</button>
                                )}
                                {posts?.user_id === +userId && (
                                    <NavLink to={`/posts/${posts.id}/edit`}>
                                        <button>Edit</button>
                                    </NavLink>

                                )}
                                <div>
                                    {userId && isLiked && (
                                        <BsHeartFill className="hearts" id="like" onClick={() => handleLike(posts.id)} />
                                    )}
                                    {userId && !isLiked && (
                                        <BsHeart className="hearts" id="unlike" onClick={() => handleLike(posts.id)} />
                                    )}
                                </div>
                                <div>
                                    {userId && (
                                        <>
                                            <FaRegComment className="hearts" id='comment' onClick={() => setEditCommentOpen(true)} />
                                            {editCommentOpen && (
                                                <NewCommentForm post={posts} />
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                            <div>
                                <CommentFeed post={posts} />
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    )
}

export default ExplorePostContainer
