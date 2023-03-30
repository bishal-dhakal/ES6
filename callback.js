const getRollNo = () =>{
    setTimeout(()=>{
        console.log('Getting roll no.');
        let roll =[1,2,3,4,5];

        setTimeout( (rollno)=>{
            const info = {
                name : 'who',
                age : 23
            }
            console.log(` User ${rollno} is ${info.name} and ${info.age}`);

            setTimeout((name)=>{
                info.gender ='female';
                console.log(info.gender);
            },2000,info);
        },2000,roll[1]);
    },2000)
}

getRollNo();