import { takeLatest } from 'redux-saga/effects'
import { FORGOT_PASSWORD } from '../actions/auth/forgotPassword'

import { LOGIN_USER, LOGOUT_USER } from '../actions/auth/login'
import { REGISTER_USER } from '../actions/auth/register'
import { RESET_PASSWORD } from '../actions/auth/resetPassword'
import { CHECK_AUTHORISATION } from '../actions/auth/checkAuthorisation'
import { ADD_ASSET, DELETE_ASSET, EDIT_ASSET, GET_SINGLE_ASSET, GET_ASSETS } from '../actions/assets'
import { GET_PROFILE } from '../actions/profile'

import checkAuthorization from './handlers/auth/checkAuthorisation'
import { handlerLoginUser } from './handlers/auth/login'
import { handlerRegisterUser } from './handlers/auth/register'
import handlerResetPassword from './handlers/auth/resetPassword'
import handlerForgotPassword from './handlers/auth/forgotPassword'
import { handlerLogoutUser } from './handlers/auth/login'
import { handlerAddAsset, handlerDeleteAsset, handlerEditAsset, handlerGetSingleAsset, handlerGetAssets } from './handlers/assets'
import { handlerGetProfile } from './handlers/profile'

export function* watcherSaga(){
    yield takeLatest(LOGIN_USER, handlerLoginUser )
    yield takeLatest(REGISTER_USER, handlerRegisterUser)
    yield takeLatest(FORGOT_PASSWORD, handlerForgotPassword)
    yield takeLatest(RESET_PASSWORD, handlerResetPassword)
    yield takeLatest(LOGOUT_USER, handlerLogoutUser)    
    yield takeLatest(CHECK_AUTHORISATION, checkAuthorization)
    yield takeLatest(GET_ASSETS, handlerGetAssets)
    yield takeLatest(GET_SINGLE_ASSET, handlerGetSingleAsset)
    yield takeLatest(EDIT_ASSET, handlerEditAsset)
    yield takeLatest(ADD_ASSET, handlerAddAsset)
    yield takeLatest(DELETE_ASSET, handlerDeleteAsset)
    yield takeLatest(GET_PROFILE, handlerGetProfile)
}