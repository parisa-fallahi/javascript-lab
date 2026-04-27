// const random = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const generateRandomNumber = Math.random();
//         if(generateRandomNumber<0.5){
//             console.log('----success---',generateRandomNumber);
//             resolve();
//         }
//         else{
//             console.log('---reject---');
//             reject();
//         }
//     }, 1000);
// })

// random.then(()=>{
//     console.log('---yes---')
// })

// random.catch(()=>{
//     console.log('---no---')
// })




const random = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const generateRandomNumber = Math.random();
        if(generateRandomNumber<0.5){
            resolve(generateRandomNumber);
        }
        else{
            reject('error');
        }
    }, 1000);
})

//chaining
random
.then((result)=>result * 100)
.then((number)=>Math.floor(number))
.then((test)=>console.log(test))
.catch((result)=>console.log(result))

const compact = arr => arr.filter(Boolean);

console.log(compact([0, 1, false, 2, '', 3, null, undefined, NaN,{name:'',}]));





