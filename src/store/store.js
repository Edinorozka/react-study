import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import {postReducer} from "./reducers/postsReducer";
import {userReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
    posts: postReducer,
    user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))