//unpack object properties and store on a variable.

const info = {
    name : 'kumar',
    age: 26,
    occ: 'farm',
    obj : {
        last:'her',
        done:'BSCAG'
    }
}


//same name is required. let you rename a variable.
let { name:myname, age,occ,obj } = info;

console.log(info.name);
console.log(age);
console.log(obj.last);