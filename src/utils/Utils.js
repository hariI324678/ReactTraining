import settings from '../Settings'
export const getTimeStampComparator = (objectName) => {
    let comparator = (x, y) => {
        if (typeof x[objectName] === 'undefined' && typeof y[objectName] === 'undefined') {
            return 0
        } else if (typeof x[objectName] !== 'undefined' && typeof y[objectName] === 'undefined') {
            return -1;
        } else if (typeof x[objectName] === 'undefined' && typeof y[objectName] !== 'undefined') {
            return 1;
        } else if (typeof x[objectName] != 'undefined' && typeof y[objectName] !== 'undefined') {
            let a = new Date(x[objectName]);
            let b = new Date(y[objectName]);
            return a > b ? -1 : a < b ? 1 : 0;
        }
    }
    //return new Date(x.latestNotificationTime) - new Date(y.latestNotificationTime);
    return comparator;
}
export const showLog = (message) => {
    if (settings.build='dev') {
        console.log(message);
    }
}
export const isUsable = (object) => {
    let objectType = realtypeof(object);
    if (object === null || objectType === DATA_TYPE_UNDEFINED) {
        return false;
    } else if (objectType === DATA_TYPE_OBJECT && Object.keys(object).length !== 0) {
        return true;
    } else if (objectType === DATA_TYPE_ARRAY && object.length !== 0) {
        return true;
    } else if (objectType === DATA_TYPE_STRING && object.length !== 0) {
        return true;
    } else if (objectType === DATA_TYPE_BOOLEAN || objectType === DATA_TYPE_NUMBER || objectType === DATA_TYPE_DATE) {
        return true;
    }
    else {
        return false;

    }
}
export const DATA_TYPE_OBJECT = 'OBJECT';
export const DATA_TYPE_ARRAY = 'ARRAY';
export const DATA_TYPE_DATE = 'DATE';
export const DATA_TYPE_REG_EX = 'REGEX';
export const DATA_TYPE_STRING = 'STRING';
export const DATA_TYPE_NUMBER = 'NUMBER';
const DATA_TYPE_BOOLEAN = 'BOOLEAN';

export const DATA_TYPE_UNDEFINED = 'UNDEFINED';
export const realtypeof = (obj) => {
    switch (typeof (obj)) {
        // object prototypes
        case 'object':
            if (obj instanceof Array)
                return DATA_TYPE_ARRAY;
            else if (obj instanceof Date)
                return DATA_TYPE_DATE;
            else if (obj instanceof RegExp)
                return DATA_TYPE_REG_EX;
            else if (obj instanceof String)
                return DATA_TYPE_STRING;
            else if (obj instanceof Number)
                return DATA_TYPE_NUMBER;
            else
                return DATA_TYPE_OBJECT;
        case 'string':
            return DATA_TYPE_STRING;
        case 'boolean':
            return DATA_TYPE_BOOLEAN;
        case 'number':
            return DATA_TYPE_NUMBER;
        case 'date':
            return DATA_TYPE_DATE
        case 'undefined':
            return DATA_TYPE_UNDEFINED;
        // object literals
        default:
            return typeof (obj);
    }
}