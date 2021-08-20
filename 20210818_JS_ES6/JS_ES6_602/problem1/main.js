// De Bai
// var numbers = {

// };
// should print 0..100 by step 1
// 0 1 2 … 100
// for (let num of numbers) {
//     console.log(num);
// }

// should print 6..30 by step 4
// 6 10 14 … 30
// for (let num of /*..*/) {
//     console.log(num);
// }

// BAI LAM

// var numbers = [ ... Array(101).keys() ];
var numbers = {
    *[Symbol.iterator]() {
        for (let i = 0; i <= 100; i += 1) {
            yield i;
        }
    }
};

// should print 0..100 by step 1
// 0 1 2 … 100
for (let num of numbers) {
    console.log(num);
}

// should print 6..30 by step 4
// 6 10 14 … 30
var customNumbers = {
    *[Symbol.iterator]() {
        for (let i = 6; i <= 30; i += 4) {
            yield i;
        }
    }
};
for (let num of customNumbers) {
    console.log(num);
}