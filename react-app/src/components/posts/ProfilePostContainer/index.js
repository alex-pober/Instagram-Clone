import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import NewCommentForm from "../../comments/NewComment";
import { getAllPosts, deleteOnePost } from "../../../store/posts";
import { getAllLikes, likePost, unlikePost } from "../../../store/likes";
import CommentFeed from "../../comments/CommentFeed";
import './ExploreFeed.css'
import './style.css';

const ProfilePostContainer = ({ posts }) => {
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
    //////////////////////// Evalute the posibility to change into a reducer/store
    const userIdOfThisPost = +posts?.user_id

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setpostUsers(responseData.users);
        }
        fetchData();
    }, []);

    const userInfo = postUser?.find(owner => owner.id === userIdOfThisPost)
    ///////////////////////

    const allLikeToThisPost = useSelector(state => {
        if (state.likes) {
            return Object.values(state.likes)
                .filter(like => like?.post_id === +posts.id)
        }
    })

    const isLiked = allLikeToThisPost.filter(like => like.user_id === userId).length > 0 ? true : false

    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getAllLikes())
    }, [dispatch])

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
                                <i>{userInfo?.username}</i>
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

export default ProfilePostContainer
