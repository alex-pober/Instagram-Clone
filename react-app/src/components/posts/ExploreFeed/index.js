import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from "../../../store/posts";
import ExplorePostContainer from "../ExplorePostContainer";
import PostContainer from '../PostContainer';
import { BsHeartFill } from "react-icons/bs";
import './ExploreFeed.css'

const ExploreFeed = () => {
    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])
    const feed = Object.entries(posts)

    //shuffles feed
    function shuffle(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
    }

    // shuffle(feed)

    return (
        <div className="imageContainer" title='view'>
            {feed.map(post =>
                <div>
                    <ExplorePostContainer posts={post[1]} />
                </div>
            )})
        </div>
    )
}

export default ExploreFeed
