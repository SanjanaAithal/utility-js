
const map = (array, func) =>{
    if(array.length == 0){
        return array;
    }
    return array.map(func);
}
module.exports= map;