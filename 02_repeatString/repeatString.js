const repeatString = function (repeatingString, repeatCount) {
  let outputString = "";

  if (repeatCount >= 0) {
    for (let i = 0; i < repeatCount; i++) {
      outputString += repeatingString;
    }
    return outputString;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
