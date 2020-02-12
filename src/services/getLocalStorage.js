const getLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);

        if (!data) {
            return Promise.resolve([]);
        }
        return Promise.resolve(JSON.parse(data));
    } catch {
        return [];
    }
};

export default getLocalStorage;
