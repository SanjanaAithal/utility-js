const tail = (inputArray) =>{
    let length = inputArray.length;
    if (length == 0) return inputArray;
    return inputArray.slice(1,length)
}
module.exports= tail;