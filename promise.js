//executor
//produce promise
const prom = new Promise( (resolve,reject) =>{
    setTimeout( () =>{
        let rollno = [1,2,3,4,5];
        resolve(rollno);
        reject('Error occured');
    },2000 )
});

// promise consume
prom.then((rollno) => {
    console.log(rollno);
}).catch((err)=>{
    console.log(err);
})