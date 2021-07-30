const max =(array) => {
    if(array.length == 0) return 0;
    return Math.max(...array);
}
module.exports = max;