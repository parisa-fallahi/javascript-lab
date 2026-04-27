const array = [2,2,3,3,12,6,7,2,89,0];

const newArray = [];

for(let i=0;i<array.length;i++){
    if(newArray.indexOf(array[i]) === -1){
        for(let i=0; i<newArray.length;i++){
            if(newArray.indexOf(array[i])>=0){
                newArray.push(array[i]);

            }
        }

    }
}
console.log(newArray)
