const GET_ALL_LIKES_FROM_ALL_POSTS = 'likesfromallposts/GET_ALL_LIKES_FROM_ALL_POSTS'

const getAllLikesFromAllPosts = likes => ({
  type: GET_ALL_LIKES_FROM_ALL_POSTS,
  payload: likes
})

export const getAllLikesAllPosts = () => async dispatch => {
  const res = await fetch(`/api/posts/forlikes`)
  if (res.ok) {
    const data = await res.json();
    if (data.errors) {
      return;
    }
    dispatch(getAllLikesFromAllPosts(data));
    return data
  }
}

const initialState = {};

export default function (state = initialState, action) {
  let newState;
  switch (action.type) {

    case GET_ALL_LIKES_FROM_ALL_POSTS:
      newState = { ...state }
      action.payload.posts.map((like) => { newState[like.id] = like })
      return newState;

    default:
      return state;
  }
}