import apis from '../apis/apis';
import * as ActionTypes from './ActionTypes';
import * as StorageUtils from '../utils/AsyncStorage'
import * as NavigationActions from '../actions/NavigationActions'

/* 
export const logout = () => (dispatch, getState) => {
    if (typeof getState !== 'undefined') {
        var state = getState();
        if (Utils.isUsable(state.socketHolder.socket) === true) {
            state.socketHolder.socket.close();
        }
    }
    removeAllKeysFromLocalStorage(() => {
        dispatch({
            type: ActionTypes.LOGOUT
        });
        dispatch(createInitializeApplicationAction())
        dispatch(navigationReset());
    })

} */
export const registerUser = (login) => (dispatch, getState) => {
    apis.LoginApi.register(login)
        .then(registration => {
            dispatchRegistration(registration)(dispatch, getState);
        })
        .catch(messages => {
            dispatch(createRegistrationErrorAction(messages));
        })
}
export const dispatchRegistration = ({ userName = '', countryCode = '', mobileNumber = '', token = '' }) => (dispatch, getState) => {
    let login = { userName, countryCode, mobileNumber, token }
    StorageUtils.setItem('login', { userName, countryCode, mobileNumber, token }).then(() => {
        dispatch(createRegistrationSuccessAction(userName, countryCode, mobileNumber, token));
        //SocketActions.openSocket()(dispatch, getState);
        NavigationActions.push("/contacts");
    });

}


//reg Related 
const createRegistrationStartAction = (username, countryCode, mobileNumber, token) =>
    ({
        type: ActionTypes.REGISTER_USER,
        payload: {
            username,
            countryCode,
            mobileNumber,
            token
        }
    })
const createRegistrationErrorAction = (errors) =>
    ({
        type: ActionTypes.REGISTRATION_ERROR,
        payload: {
            errors
        }
    });
const createRegistrationSuccessAction = (userName, countryCode, mobileNumber, token) =>
    ({
        type: ActionTypes.REGISTRATION_SUCCESS,
        payload: {
            userName,
            countryCode,
            mobileNumber,
            token
        }
    })