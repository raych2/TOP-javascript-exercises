const palindromes = function(str) {
    let regex = /[\W]/g;
    let newStr = str.toLowerCase().replace(regex, '');
    let reversedStr = newStr.split('').reverse().join('');
    return newStr === reversedStr;
}

module.exports = palindromes
