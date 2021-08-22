function fibonaci(n){
    let map = new Map();
    map.set(0, 1);
    map.set(1, 1);
    for( let i = 2; i <= n ; i++){
        map.set(i, map.get(i-1) + map.get(i-2));
    }
    return map.get(n);
}

console.log(fibonaci(0))
console.log(fibonaci(1))
console.log(fibonaci(2))
console.log(fibonaci(3))
console.log(fibonaci(4))
console.log(fibonaci(5))
console.log(fibonaci(6))
console.log(fibonaci(7))
console.log(fibonaci(8))
console.log(fibonaci(9))
console.log(fibonaci(10))
console.log(fibonaci(11))
console.log(fibonaci(12))