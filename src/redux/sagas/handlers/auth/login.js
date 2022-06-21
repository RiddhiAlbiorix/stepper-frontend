import { call, put } from "redux-saga/effects";
import { loginUserError, loginUserSuccess, logoutUserSuccess } from "../../../actions/auth/login";
import { push } from "connected-react-router";
import { loginUserRequest } from "../../requests/auth/login";
import openNotificationWithIcon from "../../../../Helper/Notification";

export function* handlerLoginUser(action){
    try{
        const { data } = yield call(loginUserRequest, action.payload)
        const token = data?.loginUser?.token
        const user = data?.loginUser?.user
        yield localStorage.setItem('auth_token', token);
        yield localStorage.setItem('user', JSON.stringify(user));
        yield put(loginUserSuccess(data, token))
        yield put(push('/profile'))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(loginUserError(err.message, err.data || {}))
    }
}

export function* handlerLogoutUser(action){
    try{
        yield localStorage.clear('auth_token')
        yield put(logoutUserSuccess())
        yield put(push('/login'))
    }
    catch(err){
        
    }
}