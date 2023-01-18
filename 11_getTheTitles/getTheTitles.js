const getTheTitles = function(bookArray) {
    let bookTitles = [];
    for (const book in bookArray) {
        bookTitles.push(bookArray[book].title)
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;