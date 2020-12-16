let capitalizeInitial = (str) => {
    let capiltalized = str
        .split(' ')
        .map(item =>
            item[0].toUpperCase()
            +
            item.slice(1))
        .join(' ');
    return capiltalized;
}

module.exports = { capitalizeInitial }