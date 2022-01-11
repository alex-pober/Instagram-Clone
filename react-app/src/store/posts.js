const GET_POSTS = 'posts/GET_POSTS';
const ADD_POST = 'posts/ADD_POST';
const UPDATE_POST = 'posts/UPDATE_POST';
const DELETE_POST = 'posts/DELETE_POST';

const getPosts = posts => ({
    type: GET_POSTS,
    payload: posts
});

const addPost = post => ({
    type: ADD_POST,
    payload: post
})

const updatePost = post => ({
    type: UPDATE_POST,
    payload: post
})

const deletePost = post => ({
    type: DELETE_POST,
    payload: post
})

export const getAllPosts = () => async dispatch => {
    const response = await fetch('/api/posts/')
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(getPosts(data));
        return data
    }
}

export const addOnePost = post => async dispatch => {
    const response = await fetch('/api/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(addPost(data))
        return data
    }
}

export const updateOnePost = post => async dispatch => {
    const response = await fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(updatePost(data))
        return data
    }
}

export const deleteOnePost = id => async dispatch => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    })
    dispatch(deletePost(id))
    return 'Successfully deleted.'
}

const initialState = {};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_POSTS:
            newState = {...state}
            action.payload.posts.map((post) => { newState[post.id] = post })
            return newState

        case ADD_POST:
            newState = {
                ...state,
                [action.payload.id]: action.payload
            }
            return newState

        case UPDATE_POST:
            state[action.payload.id] = action.payload;
            newState = { ...state };
            return newState

        case DELETE_POST:
            newState = { ...state }
            delete newState[action.payload]
            return newState

        default:
            return state;
    }
}
