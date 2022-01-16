import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import { getAllLikes, likePost, unlikePost } from "../../../store/likes";
import { getAllPosts, deleteOnePost } from "../../../store/posts";
import SinglePost from "../SinglePost";
import "./postContainer.css"
import { BsHeartFill, BsHeart } from "react-icons/bs";

const PostContainer = ({ posts }) => {
    const [postUser, setpostUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const like = useSelector(state => state.likes)
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getAllLikes())
    }, [dispatch])

    const allLikeToThisPost = useSelector(state => {
        if (state.likes) {
            return Object.values(state.likes)
            .filter(like => like?.post_id === +posts.id)
        }
    })
    const isLiked = allLikeToThisPost.filter(like => like.user_id === userId).length > 0 ? true : false

    const handleLike = () => {
        isLiked ? dispatch(unlikePost(userId, posts.id)) : dispatch(likePost(userId, posts.id))
    }

    return (
        <div className="post">
                <NavLink to={`/users/${posts.user_id}`}>
                    <p className="usernameCaption">{posts.username}</p>
                </NavLink>
                    <img key={posts.id} alt={posts.caption} src={posts.imgURL} onClick={() => setShowModal(true)} width="250px"></img>
                    <div className='heartinpost'>
                            {userId && isLiked && (
                                <BsHeartFill className="hearts" id="like" onClick={() => handleLike(posts.id)} />
                                )}
                            {userId && !isLiked && (
                                <BsHeart className="hearts" id="unlike" onClick={() => handleLike(posts.id)} />
                                )}
                        </div>
                    <p className="likeCounter">{allLikeToThisPost.length} Likes</p>
                    <p>
                        <a className="usernameCaption" href={`/users/${posts.user_id}`}>{posts.username}  </a>
                        {posts.caption}
                    </p>
                    <p className="viewComments" onClick={() => setShowModal(true)} >View Comments</p>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <SinglePost post={posts} />
                    </Modal>
                )}
        </div>
    )
}

export default PostContainer
