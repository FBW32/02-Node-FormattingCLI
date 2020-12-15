function formatting(string) {
    let formatedStr = string.split(' ')
        .filter(item => item != '')
        .join(' ')
        .toLowerCase()
    return (formatedStr)

}

module.exports = { formatting }