import { combineReducers } from 'redux'

const userLog = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_USER_LOG':
      return action.payload

    default:
      return state
  }
}

export default combineReducers({
  isLogin: userLog,
})
