const number = [2,3,4,5,6,7,8];
const output = [];

// for (let i = 0; i< number.length; i++) {
//   const element = number[i];
//   const result = element * element;
//   output.push(result)
//     }

// function square(element) {
//     const output = element * element;
//     return output;
    
// }

// const result = number.map(function square (element) {
//     return element * element;
// }
// );

// const square = element => element * element;
// const square = x => x * x ;

// const result = number.map( x => x * x);

// console.log(result);

const bigger = number.filter(x => x > 5);
// console.log(bigger);

const isThere =number.find(x => x >5);
console.log(isThere);








