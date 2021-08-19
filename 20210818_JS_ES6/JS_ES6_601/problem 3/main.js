// function foo() {}
//     function bar() {
//         var a1 = [2, 4];
//         var a2 = [6, 8, 10, 12];

//     return foo();
//     }


// // DO NOT MODIFY BELOW CODE
// console.log(bar().join('') === '281012');


function foo(...args) {
    return args[0];
}
function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];

    a1.pop();
    a2.shift();
    var a3 = [...a1, ...a2];

    // console.log(a1,a2,a3,a3.join(''));
    
    return foo(a3);
}

// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012');


