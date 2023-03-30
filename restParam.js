const add = (...value) => { //.. return args as an array
    // console.log(value);
    console.log(...value);
    let sum = 0;
    for(let i of value){
        sum += i;
    }
    console.log(sum);
}

add(1,2,3,4);

