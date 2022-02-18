import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BsHeartFill } from "react-icons/bs";
import ExplorePostContainer from "../ExplorePostContainer";
import { getAllLikes } from "../../../store/likes";
import { getAllPosts } from "../../../store/posts";
import './ExploreFeed.css'

const ExploreFeed = ({ randomOrder }) => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts);
    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getAllLikes())
    }, [dispatch])

    return (
        <div className="imageContainer" title='view'>
            {randomOrder.map(post =>
            <>
                <div className='likeDiv' key={post.id}>
                    <div className="likecounter">
                        <p>{posts[post.id]?.likeCounter}</p>
                        <BsHeartFill className="heartIG" />
                    </div>
                    <ExplorePostContainer  posts={post} />
                </div>
                <div className='likeDiv'>
                </div>
            </>
            )}
        </div>
    )
}


export default ExploreFeed
