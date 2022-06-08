import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import LoginReducer from './auth/login'
import registerReducer from "./auth/register";
import forgotPasswordReducer from "./auth/forgotPassword";

const reducer = (history) => combineReducers({
    auth : LoginReducer,
    registerData : registerReducer,
    forgotPassword : forgotPasswordReducer,
    router: connectRouter(history)
})

export default reducer