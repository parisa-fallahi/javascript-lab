
// const duplicate = (number,callBack1,callBack2,callBack3) =>{

//     setTimeout(() => {
//         const result = number * 2 ;
//         console.log('1',result);
//         callBack1(result,callBack2,callBack3)
        
//     }, 1000);
// }

// const add = (number,callBack,callBack2) =>{
//    const result = number + 5
//    console.log('2',result)
//    callBack(result,callBack2)
// }

// const makeString = (number,callBack) =>{
//     const result = number.toString();
//     console.log('3',result);
//     callBack(result);
// }

// const addNumberToString = (res) =>{
//     const result = res + 3;
//     console.log('4',result);
// }

// duplicate(2,add,makeString,addNumberToString);


//resolve the above problem with promise:

const duplicate = (number) =>{
    const promise = new Promise((resolve,reject)=>{
        const result = number * 2 ;
        resolve(result);

    })
    return promise
}

const add = (number) => {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            const result = number + 20
            resolve(result);
        }, 1000);
    })
    return promise
}
const numberToString = (number)=>{
    const promise = new Promise((resolve,reject)=>{
        const result = number.toString();
        resolve(result);
    })
    return promise
}

// duplicate(5)
// .then((number)=>add(number))
// .then((num)=>console.log(num))

// async function start(){
//     const number = await duplicate(4);
//     const result = await add(number);
//     console.log('---test---',result)
    
// }

start = async () => {
 const number = await duplicate(4);
    const result = await add(number);
    console.log('---test---',result)
}

start()








