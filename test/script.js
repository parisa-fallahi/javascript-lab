// let customers = [
//   {
//     id: 1,
//     f_name: "Abby",
//     l_name: "Thomas",
//     gender: "M",
//     married: true,
//     age: 32,
//     expense: 500,
//     purchased: ["Shampoo", "Toys", "Book"],
//   },
//   {
//     id: 2,
//     f_name: "Jerry",
//     l_name: "Tom",
//     gender: "M",
//     married: true,
//     age: 64,
//     expense: 100,
//     purchased: ["Stick", "Blade"],
//   },
//   {
//     id: 3,
//     f_name: "Dianna",
//     l_name: "Cherry",
//     gender: "F",
//     married: true,
//     age: 22,
//     expense: 1500,
//     purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//   },
//   {
//     id: 4,
//     f_name: "Dev",
//     l_name: "Currian",
//     gender: "M",
//     married: true,
//     age: 82,
//     expense: 90,
//     purchased: ["Book"],
//   },
//   {
//     id: 5,
//     f_name: "Maria",
//     l_name: "Gomes",
//     gender: "F",
//     married: false,
//     age: 7,
//     expense: 300,
//     purchased: ["Toys"],
//   },
// ];


// let _result = customers.map((customer)=>{
//     const _title = customer.gender === "M" ? 'Mr.' : (customer.married ? 'Mrs.' : 'Miss.')
//     customer.fullName = ` ${_title} ${customer.f_name} ${customer.l_name}`

// })

// console.log(customers);

const generateRandomNumber = (min,max) =>{
    if(!min && !max){
        return 'enter number'
    }
    if(!max){
        max = min;
        min = 0
    }
   const _result =min + Math.floor(Math.random()*(max-min + 1)); 
   return _result
   
}

console.log(generateRandomNumber(1,10));
console.log(generateRandomNumber());
console.log(generateRandomNumber(100));










