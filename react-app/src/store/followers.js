const GET_FOLLOWERS = 'follows/GET_FOLLOWERS'

const getFollowers = followers => ({
    type: GET_FOLLOWERS,
    payload: followers
})

export const getAllFollowers = (id) => async dispatch => {
    const res = await fetch(`/api/follows/${id}/followers`)
    if (res.ok) {
      const data = await res.json();
      if (data.errors) {
        return;
      }
      dispatch(getFollowers(data));
      return data
    }
  }

const initialState = {};

export default function (state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_FOLLOWERS:
            newState = { ...state }
            action.payload.follows.map((follow) => { newState[follow.followers] = follow })
            return newState;

            default:
                return state;
            }
          }
