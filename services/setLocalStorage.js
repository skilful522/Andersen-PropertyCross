const setLocaleStorage = (key, value) => {
    return Promise.resolve(localStorage.setItem(key, JSON.stringify(value)));
};

export default setLocaleStorage;
