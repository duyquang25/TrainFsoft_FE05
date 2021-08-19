var numbers = [ ... Array(101).keys() ];

console.log(...numbers)

// should print 0..100 by step 1
// 0 1 2 … 100
for (let num of numbers) {
    console.log(num);
}

// should print 6..30 by step 4
// 6 10 14 … 30
// for (let num of /*..*/) {
//     console.log(num);
// }

