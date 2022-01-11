import React from "react";

const CommentContainer = ({ comment }) => {
    return (
        <div>
            <div>
                <p>{comment.comment_text}</p>
                <button>Like</button>
            </div>
        </div>
    )
}

export default CommentContainer
