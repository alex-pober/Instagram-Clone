const GET_ALL_POSTS_RANDOM = 'allpostsrandom/GET_ALL_POSTS_RANDOM'

const getAllPostsRandom = allrandomposts => ({
  type: GET_ALL_POSTS_RANDOM,
  payload: allrandomposts
})

export const getAllRandomPosts = () => async dispatch => {
  const res = await fetch(`/api/posts/random-order-posts`)
  if (res.ok) {
    const data = await res.json();
    if (data.errors) {
      return;
    }
    console.log(data)
    dispatch(getAllPostsRandom(data));
    return data
  }
}

const initialState = {};

export default function (state = initialState, action) {
  let newState;
  switch (action.type) {

    case GET_ALL_POSTS_RANDOM:
      newState = { ...state }
      action.payload.allrandomposts.map((post, i) => { newState[i] = post })
      return newState;

    default:
      return state;
  }
}