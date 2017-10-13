import users from './mock/Users';
import settings from '../Settings'
import * as ActionTypes from '../actions/ActionTypes';

const checkRequiredField = (value, message, messages) => {
    if (value === null || typeof value === 'undefined' || value.length == 0) {
        messages.push(message);
    }
}
const checkNumericField = (value, message, messages) => {
    if (isNaN(value)) {
        messages.push(message);
    }
}


export const register = (login) => new Promise((resolve, reject) => {
    let { userName, countryCode, mobileNumber, alphaCode } = login
    let messages = [];
    checkRequiredField(userName, { key: 'error.registration.username.required' }, messages);
    checkRequiredField(countryCode, { key: 'error.registration.countryCode.required' }, messages);
    checkRequiredField(mobileNumber, { key: 'error.registration.mobileNumber.required' }, messages);
    checkNumericField(mobileNumber, { key: 'error.registration.mobileNumber.invalid' }, messages);

    if (messages.length > 0) {
        reject(messages);
        return;
    }

    setTimeout(() =>
        resolve({ userName, countryCode, mobileNumber, token: '' })
        , settings.mockLatency);


});

