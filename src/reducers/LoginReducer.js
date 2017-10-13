import {  LOGOUT, REGISTER_USER, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from '../actions/ActionTypes';

const initialState = {
    loaded:'false',
    errors: [],
    token: '',
    username: '',
}

const loginReducer = (state = initialState, action = {}) => {
    const { payload } = action;
    if (action.type === LOGOUT) {
        return Object.assign({ username: '' }, initialState);
    } else if (action.type === REGISTER_USER) {
        return Object.assign({}, state, {  errors: [], ...payload });
    } else if (action.type === REGISTRATION_ERROR) {
        return Object.assign({}, state, { loaded:true, errors: payload.errors });
    } else if (action.type === REGISTRATION_SUCCESS) {
        return Object.assign({}, state, {
            errors: [],
            loaded:true,
            ...payload
        });
    }
    return state;
}

export default {
    initializer: (dispatch,getState) => {
        //LoginActions.loadLoginFromLocalStorage()(dispatch,getState);

    },
    reducer: loginReducer
};