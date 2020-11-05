const caesar = function(str, num) {
    num = num % 26;
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    //for uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      //if charCode will be greater than 90, loop back to start at 65  
      if (charCode + num > 90) {
        num = num - 26;
        newStr += String.fromCharCode(charCode + num);
        //if charCode is less than 65, add 26 to stay within char range
      } else if (charCode + num < 65) {
        num = num + 26;
        newStr += String.fromCharCode(charCode + num);
      } else {
        newStr += String.fromCharCode(charCode + num);
      }
      //for lowercase letters
    } else if (charCode >= 97 && charCode <= 122) {
      //if charCode will be greater than 122, loop back to start at 97 
      if (charCode + num > 122) {
        num = num - 26;
        newStr += String.fromCharCode(charCode + num);
        //if charCode is less than 97, add 26 to stay within char range
      } else if (charCode + num < 97) {
        num = num + 26;
        newStr += String.fromCharCode(charCode + num);
      } else {
        newStr += String.fromCharCode(charCode + num);
      }
      //for non-letter char
    } else {
      newStr += String.fromCharCode(charCode);
    }
  }
  return newStr;
}

module.exports = caesar
