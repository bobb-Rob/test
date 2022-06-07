
const stringLength = (str) => {
    if(str.length < 1){
        throw new Error('string too short')
    } else if(str.length > 10){
        throw new Error('string too long')
    }
  return str.length;
}

module.exports = stringLength;