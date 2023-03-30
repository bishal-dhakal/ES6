//executor
//produce promise
const prom = new Promise( (resolve,reject) =>{
    setTimeout( () =>{
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);
        reject('Error occured');
    },2000 )
});

const getInfo = (data) =>{
    return  new Promise( ( resolve, reject) =>{
        setTimeout( (data)=>{
            let info = {
                name : 'john',
                age : 24
            }
            resolve(`${data} , ${info.name} and ${info.age}`)
            reject('Couldnot get data');
        },2000,data)
    });
}

// promise consume
prom.then((rollno) => {
    console.log(rollno);
    return getInfo(rollno[1]);
    }).then( (dat) =>{
        console.log(dat);
    }).catch((err)=>{
     console.log(err);
})