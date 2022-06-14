import { combineReducers } from "redux";

import userReducer from './user/index.reducer'

export default combineReducers({
    user: userReducer
})