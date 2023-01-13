const palindromes = function (input) {

const noPunctuation = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ").join("").toLowerCase();
const reversedString = noPunctuation.split('').reverse().join('')

if (reversedString === noPunctuation) {
    return true;
} else {
    return false;
}


return noPunctuation;
};

// Do not edit below this line
module.exports = palindromes;

