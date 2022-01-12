import React, { useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getOnePost } from "../../../store/posts";
import { getAllPosts } from "../../../store/posts";
import { deleteOnePost } from "../../../store/posts";
import CommentFeed from "../../comments/CommentFeed";

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
