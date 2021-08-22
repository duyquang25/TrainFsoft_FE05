function fibonaci(n){
    let map = new Map();
    map.set(0, 1);
    map.set(1, 1);
    for( let i = 2; i <= n ; i++){
        map.set(i, map.get(i-1) + map.get(i-2));
    }
    return map.get(n);
}

var test = 20;

for (let i = 0; i < test; i++){
    console.log(fibonaci(i));
}