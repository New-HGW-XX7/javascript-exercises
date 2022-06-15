const fibonacci = function(n) {
    Number(n);
    if(n < 0) return 'OOPS';
    let arr = [1, 1];
    for(let i = 1; i < n; i++) {
        let fib = arr[i] + arr[i - 1];
        arr.push(fib);
    }
    return arr[n - 1];
}

// Do not edit below this line
module.exports = fibonacci;
