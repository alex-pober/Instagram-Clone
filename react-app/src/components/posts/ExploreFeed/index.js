import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { BsHeartFill } from "react-icons/bs";
import ExplorePostContainer from "../ExplorePostContainer";

const ExploreFeed = () => {
    const posts = useSelector(state => state.posts);
    const likefromallposts = useSelector(state => state.likefromallposts);
    //necesito buscar la cantidad de likes de acuerdo al nuevo store que cree cruzandolo con posts
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
                        <i id='likeCounter'>{likefromallposts[post.id].likeCounter}</i>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExploreFeed
