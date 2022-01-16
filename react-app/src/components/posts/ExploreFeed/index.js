import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BsHeartFill } from "react-icons/bs";
import ExplorePostContainer from "../ExplorePostContainer";
import { getAllLikes } from "../../../store/likes";
import './ExploreFeed.css'

const ExploreFeed = ({ randomOrder }) => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts);
    useEffect(() => {
        dispatch(getAllLikes())
    }, [dispatch])

    return (
        <div className="imageContainer" title='view'>
            {randomOrder.map(post =>
                <div key={post.id}>
                    <ExplorePostContainer posts={post} />
                    <div id='likeDiv'>
                        <i id='likeCounter'>{posts[post.id]?.likeCounter}</i>
                        <BsHeartFill id="counterHeart" />
                    </div>
                </div>
            )}
        </div>
    )
}


export default ExploreFeed
