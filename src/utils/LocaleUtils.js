import * as Utils from './Utils'
export const messageFor = (locale, key, messages) => {
    if (messages === null || typeof messages === 'undefined') {
        return locale + ':' + key;
    }
    if (key in messages) {
        return messages[key];
    }
    return  key;
}

export const translate = (locale, key, messages,params=[]) => {
    if(Utils.isUsable(params)){
        let translatedParams = params.map((param,index)=>{
            return  messageFor(locale, param, messages)
        });
        let translatedMessage = messageFor(locale, key, messages)
        let parts = translatedMessage.split('$*$');
        let  message =''
        parts.forEach((part,index)=>{
            message += part;
            if(typeof translatedParams[index] !== 'undefined'){
                message +=translatedParams[index];
            }
        });
        return message;

    }
    else return messageFor(locale, key, messages)
}
