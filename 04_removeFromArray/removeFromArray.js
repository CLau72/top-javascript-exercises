const removeFromArray = function (inputArray, ...args) {
  for (let i = 0; i < args.length; i++) {
    let removeIndex = inputArray.indexOf(args[i]);
    if (args[i] === inputArray[removeIndex]) {
    inputArray.splice(removeIndex, 1);
    }
  }
  return inputArray;
};


// Do not edit below this line
module.exports = removeFromArray;
