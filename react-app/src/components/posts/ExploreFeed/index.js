import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from "../../../store/posts";
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
    shuffle(feed)

    return (
        <div className="imageContainer" title='view'>
            {feed.map(posts => (
                // <PostContainer className='imageContainer' key={posts[0]} posts={posts[1]} />
                <NavLink className="navlink" to={`/posts/${posts[0]}`}>
                    <img className="individualImage" key={posts[0]} alt={posts[1].caption} src={posts[1].imgURL} width="250px" height="250px" object-fit="cover" title="view"></img>
                    <BsHeartFill className="hearts" id="like"/>
                    <i>{posts[1].likeCounter}</i>
                </NavLink>
            ))}
        </div>
    )
}

export default ExploreFeed
