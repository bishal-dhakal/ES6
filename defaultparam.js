// function mul(a,b){
//     console.log(a*b);
// }

// mul(4);

// const mul = (a,b) => {

//     b = (typeof b !== 'undefined') ? b : 2;
//     console.log(a*b)
// }

// mul(4);

//param value can be passed in function param.

const mul = (a, b=5) => {
    console.log(a * b)
}

mul(4);