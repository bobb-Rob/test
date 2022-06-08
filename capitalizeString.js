
const capitalizeString = (str) => {
    let arrStr = str.split('');
    arrStr[0] = arrStr[0].toUpperCase();
    return arrStr.join('');
}

module.exports = capitalizeString;