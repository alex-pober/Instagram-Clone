import React, { useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getOnePost, getAllPosts, deleteOnePost} from "../../../store/posts";
import { likePost } from "../../../store/likes";

const SinglePost = () => {
    const id = useParams().id
    const post = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }})
    useEffect (() => {
        dispatch(getAllPosts())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteOnePost(id))
        history.push(`/feed`)
    }

    const handleLike = () => {
        let postId = id
        dispatch(likePost(userId, postId))
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
                        <button onClick={() => handleLike(id)}>Like</button>
                        )}
                </div>
        </div>
    )
}

export default SinglePost
