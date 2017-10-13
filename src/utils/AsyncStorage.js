export const getItem = (key) => new Promise((resolve /*, reject*/ ) => {
    setTimeout(()=> {
        resolve(window.localStorage.getItem(key));
    }, 1);
});


export const setItem = (key, value) => new Promise((resolve /*, reject*/ ) => {
    setTimeout(()=> {
        window.localStorage.setItem(key, value);
        resolve();
    }, 1);
});

export const removeItem = (key) => new Promise((resolve, reject) => {
    setTimeout(() => {
        window.localStorage.removeItem(key);
        resolve();
    }, 1);
});