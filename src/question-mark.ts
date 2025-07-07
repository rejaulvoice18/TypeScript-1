// Ternary operator

const age:number = 22;

// if(age >= 18){
//     console.log("Yes")
// }else{
//     console.log("No")
// }

const isAdult = age >= 18 ? "Yes" : "No"

// Nullish coalescing operator 
// ?? mark 2 ta dile hoy Nullish coalescing operator
// Null and Undefined
// ai operator er kaj hochhe kuno ekta null othoba undefined er depend kore
// default value set kora

const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest"
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest"
console.log({userName}, {userName2})

type Manush = {
    name: string;
    age: number;
    address: {
        city: "NO City";
        road: "No Road";
        home?: "";
    }
}

const manush1: Manush ={
    name: "Manush",
    age: 100,
    address: {
        city: "NO City",
        road: "No Road"
    }
}

//address er modde jehetu home nai tai aitar value undefined hobe
//r null and undefined hole amra nullish coalescing operator use kore default value dite pari
const home = manush1?.address?.home ?? 'No Home'
console.log({home})
