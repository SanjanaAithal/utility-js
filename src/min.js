const min =(array) => {
    if(array.length == 0) return 0;
    return Math.min(...array);
}
module.exports = min;