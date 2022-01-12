import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getAllComments } from "../../../store/comments";
import CommentContainer from "../CommentContainer";

const CommentFeed = () => {
    const postId = useParams().id
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(getAllComments(postId))
    }, [dispatch])

    const feed = Object.assign([], comments)

    return(
        <div>
            {feed.map(comment => (
                <CommentContainer comment={comment} />
            ))}
        </div>
        )
}

export default CommentFeed
