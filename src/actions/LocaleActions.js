import * as ActionTypes from './ActionTypes';
import * as StorageUtils from './../utils/AsyncStorage';
import * as Utils from './../utils/Utils';
import apis from '../apis/apis';
const { getMessages, getLocales } = apis.LocaleApi;



export const loadMessages = (localeObject) => (dispatch, getState) => {
    let { locale, localeValue } = localeObject
    getMessages(locale)
        .then(localeMessages => {
            StorageUtils.setItem('locale', localeObject).then(() => {
                dispatch(createLoadLocaleMessagesAction(locale, localeValue, localeMessages))
            });

        })
        .catch(ex => {
            //console.log(ex);
        })
}


export const loadLocales = () => (dispatch) =>
    getLocales()
        .then(locales => {
            dispatch(createLoadLocalesAction(locales))
        })
        .catch(ex => {
            //console.log(ex);
        });

export const loadLocalesFromLocalStorage = () => (dispatch) => {
    StorageUtils.getItem('locale')
        .then(locale => {
            if (Utils.isUsable(locale)) {
                loadMessages(locale)(dispatch);
            }
        })
}
const createLoadLocalesAction = (locales) =>
    (
        {
            type: ActionTypes.LOAD_LOCALES,
            payload: {
                locales
            }
        }
    )
const createLoadLocaleMessagesAction = (locale, localeValue, messages) =>
    ({
        type: ActionTypes.LOAD_LOCALE_MESSAGES,
        payload: {
            locale,
            messages,
            localeValue
        }
    })