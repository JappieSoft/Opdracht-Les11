function borderCounter(inputArray) {
    let count = 0;
    count = inputArray.length;
    return count;
}

export function millionCounter(inputString){
    let count = 0;
    count = inputString / 1e6
    return count.toFixed(2);
}

export default borderCounter;



