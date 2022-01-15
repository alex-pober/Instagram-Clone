const GET_FOLLOWS = 'follows/GET_FOLLOWS'
const ADD_FOLLOW = 'follows/ADD_FOLLOW'
const REMOVE_FOLLOW = 'follows/REMOVE_FOLLOW'

//ACTIONS
const getFollows = follows => ({
    type: GET_FOLLOWS,
    payload: follows
})

const addFollow = follow => ({
    type: ADD_FOLLOW,
    payload: follow
})

const removeFollow = follow => ({
    type: REMOVE_FOLLOW,
    payload: follow
})

//SELECTORS
export const getAllFollows = (id) => async dispatch => {
    const res = await fetch(`/api/follows/${id}`)
    if (res.ok) {
      const data = await res.json();
      if (data.errors) {
        return;
      }
      dispatch(getFollows(data));
      return data
    }
  }



  export const followUser = (followerId, followedId) => async (dispatch) => {
    const res = await fetch(`/api/follows/${followedId}/new-follow`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ followerId, followedId }),
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(addFollow(data));
      if (data.errors) {
        return;
      }
      return data
    }
  };
  
  export const unfollowUser = (followerId, followedId) => async (dispatch) => {
    const res = await fetch(`/api/follows/${followedId}/new-follow`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ followerId, followedId }),
    });
    
    if (res.ok) {
      const data = await res.json();
      if (data.errors) {
        return;
      }
      dispatch(removeFollow(data));
      return data
    }
  };

//REDUCER
const initialState = {};

export default function (state = initialState, action) {
    let newState;
    switch (action.type) {

      case GET_FOLLOWS:
        newState = { ...state }
        action.payload.follows.map((follow) => { newState[follow.id] = follow })
        return newState


      case ADD_FOLLOW:
        newState = { ...state, [action.payload.id]: action.payload };
        return newState;


      case REMOVE_FOLLOW:
        newState = { ...state };
        delete newState[action.payload.id];
        return newState;

      default:
        return state;
    }
  }
