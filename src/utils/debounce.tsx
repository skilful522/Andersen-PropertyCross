function debounce(f, ms) {
    let isCooldown = false;

    return function(...args) {
        if (isCooldown) {
            return false;
        }
        f.apply(this, args);
        isCooldown = true;
        setTimeout(() => (isCooldown = false), ms);
    };
}

export default debounce;
