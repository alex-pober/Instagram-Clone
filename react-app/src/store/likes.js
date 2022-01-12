const ADD_REMOVE_LIKE = 'likes/ADD_LIKE'
const GET_LIKES = 'likes/GET_LIKES'

// ACTIONS
const getLikes = likes => ({
  type: GET_LIKES,
  payload: likes
});

const addRemoveLike = like => ({
  type: ADD_REMOVE_LIKE,
  payload: like
});

// SELECTORS
export const getAllLikes = () => async dispatch => {
  const response = await fetch('/api/likes/')
  if (response.ok) {
      const data = await response.json();
      if (data.errors) {
          return;
      }
      dispatch(getLikes(data));
      return data
  }
}

export const likePost = (userId, postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });
  if (res.ok) {
    const like = await res.json();
    dispatch(addRemoveLike(like));
    return like;
  }
};


const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {

    case GET_LIKES:
      newState = {...state}
      action.payload.likes.map((like) => { newState[like.id] = like })
      return newState
    
    case ADD_REMOVE_LIKE:
      newState = { ...state, [action.like.id]: action.like };
      return newState;

    default:
      return state;
  }
}
