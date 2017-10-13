import messages from './mock/Messages';

import settings from '../Settings'
import locales from './mock/Locales';


import * as ActionTypes from '../actions/ActionTypes';
export const getLocales = () => {
    return new Promise((resolve, reject) => {
        if (settings.useMockData === true) {
            setTimeout(() =>
                resolve(
                    locales.map(locale =>
                        ({
                            label: locale.value,
                            value: locale.key
                        })
                    )
                ), settings.mockLatency);

        } else {
           /*  callAPI({
                actionName: ActionTypes.LOAD_LOCALES,

            }).then(responseHolder => {
                if (responseHolder.status === true) {
                    resolve(responseHolder.responsePayLoad.map(locale =>
                        ({
                            label: locale.value,
                            value: locale.key
                        })
                    ));
                } else {
                    reject([{ key: 'some error' }]);
                }
            }).catch(errors => {

            }) */

        }

    });
}

export const getMessages = (locale) => {
    //let keys = messageKeys;
    let messageKeys = Object.keys(messages['en_US']['values'])
    let keysString = messageKeys.join(',');
    let data = {
        "locale": locale,
        "keys": keysString,
    }

    return new Promise((resolve, reject) => {
        if (settings.useMockData === true) {
            let localeMessages;
            if (locale in messages) {
                localeMessages = messages[locale];
            } else {
                localeMessages = messages['en_US'];
            }
                setTimeout(() => resolve(localeMessages.values), settings.mockLatency);

        } else {
       /*      callAPI({
                actionName: ActionTypes.LOAD_LOCALE_MESSAGES,
                body: data
            }).then(responseHolder => {
                if (responseHolder.status === true) {
                    resolve(responseHolder.responsePayLoad);
                } else {
                    reject([{ key: 'some error' }]);
                }
            }).catch(errors => {

            }) */
        }

    });

}

