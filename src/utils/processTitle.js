const processTitle = (title) => {
    return title
        .split(',')
        .slice(0, 2)
        .join('');
};

export default processTitle;
