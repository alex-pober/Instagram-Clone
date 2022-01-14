import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getAllComments } from "../../../store/comments";
import CommentContainer from "../CommentContainer";

const CommentFeed = ({post}) => {
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(getAllComments(post?.id))
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
