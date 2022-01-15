import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { BsHeartFill } from "react-icons/bs";
import ExplorePostContainer from "../ExplorePostContainer";

const ExploreFeed = () => {
    const posts = useSelector(state => state.posts);
    
    const feed = Object.values(posts)
    //shuffles feed
    const shuffledArray = feed.slice().sort((a, b) => 0.5 - Math.random());

    return (
        <div className="imageContainer" title='view'>
            {shuffledArray.map(post =>
                <div key={post.id}>
                    <ExplorePostContainer posts={post} />
                    <div id='likeDiv'>
                        <BsHeartFill id="counterHeart" />
                        <i id='likeCounter'>{post.likeCounter}</i>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExploreFeed
