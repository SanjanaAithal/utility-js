const filter = (array, func) =>{
    if(array.length == 0){
        return array;
    }
    return array.filter(func);
}

function filterUpperCase(char) {
    return !/[a-z]/.test(char) && /[A-Z]/.test(char);
}
module.exports= filter;