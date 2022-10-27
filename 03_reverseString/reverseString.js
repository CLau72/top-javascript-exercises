const reverseString = function(inputString) {
    let stringArray = inputString.split('')
    stringArray.reverse();
    
    return stringArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
