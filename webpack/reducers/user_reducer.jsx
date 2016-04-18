import * as actions from '../actions/user_action_creator.jsx'

const initialState = {
  user: {}
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_USER :
      return Object.assign({}, state, {
            user: action.user
          })
      break;
    default:
      return state;
  }
}
