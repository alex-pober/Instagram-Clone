import React, { useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getOnePost, getAllPosts, deleteOnePost } from "../../../store/posts";
import { getAllLikes, likePost, unlikePost } from "../../../store/likes";
import CommentFeed from "../../comments/CommentFeed";

const SinglePost = () => {
    const id = useParams().id
    const post = useSelector(state => state.posts)
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
            .filter(like => like?.post_id === +id)
        }
    })

    const isLiked = allLikeToThisPost.filter(like => like.user_id === userId).length > 0? true: false

    //REMOVE WHEN WE CHANGE FOR A HEART
    let buttonLikeUnlike = () => isLiked? "Unlike" : "Like"

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
        isLiked ? dispatch(unlikePost(userId, postId)):dispatch(likePost(userId, postId))
    }



    return (
        <div>
            <div>
                <img src={post[id]?.imgURL} width="250px"></img>
                <p>{post[id]?.caption}</p>
            </div>
            <div>
                {post[id]?.user_id == userId && (
                    <button onClick={() => handleDelete(id)}>Delete</button>
                )}
                {post[id]?.user_id == userId && (
                    <NavLink to={`/posts/${id}/edit`}>
                        <button>Edit</button>
                    </NavLink>

                )}
                {post[id]?.user_id == userId && (
                    <button onClick={() => handleLike(id)}>{buttonLikeUnlike()}</button>
                )}
             </div>
             <div>
                 <CommentFeed />
                 <NavLink to={`/posts/${id}/new-comment`}>
                     <button>Add Comment</button>
                 </NavLink>
             </div>
        </div>
    )
}

export default SinglePost
