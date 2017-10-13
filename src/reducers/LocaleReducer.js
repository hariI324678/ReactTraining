import { REFRESH_APPLICATION, LOAD_LOCALES, LOAD_LOCALE_MESSAGES } from '../actions/ActionTypes';
import { messageFor, translate } from '../utils/LocaleUtils';
import * as LocaleActions from '../actions/LocaleActions'
import messages from '.././apis/mock/Messages';

const initialState = {
    loaded: false,
    locale: 'en_US',
    localeValue: 'English (United States)',
    locales: [],
    messageFor: (key, params = []) =>translate('en_us', key,messages['en_US']['values'], params) 
};

const localeReducer = (state = initialState, action = {}) => {
    const { payload } = action;
    if (action.type === LOAD_LOCALES) {
        return Object.assign({}, state, { locales: payload.locales, });
    } else if (action.type === LOAD_LOCALE_MESSAGES) {
        return Object.assign({}, state, { loaded: true, localeValue: payload.localeValue, locale: payload.locale, messageFor: (key, params = []) => translate(payload.locale, key, payload.messages, params) });
    } else if (action.type === REFRESH_APPLICATION) {
        return Object.assign({}, state, { loaded: false });
    }
    return state;
};

export default {
    initializer: (dispatch, getState) => {
        // LocaleActions.loadLocalesFromLocalStorage()(dispatch);
    },
    reducer: localeReducer
}