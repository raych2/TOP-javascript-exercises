const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    }
    let arr = [1,1];
    for (let i = 2; i < num + 1; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[num - 1];
}

module.exports = fibonacci
