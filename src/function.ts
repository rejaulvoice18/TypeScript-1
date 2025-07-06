// Javascript a amra 2 dhoroner function use kore thaki
// 1. Normal Function 2. Arrow function

//Normal function
//default parameter
// Kokhonoi 1st parameter er default value use kora jabe nah, karon default
// value 1st parameter a dile, tarpor function call korar somoy 1st parameter er value
// na dile error ase tai 1st parameter er default value deua r na deua soman kotha
function add(num1:number, num2:number = 10):number{
    return num1 + num2;
}

add(20)

// arrow function
const addArrow = (num1:number, num2:number):number => num1+num2;

const arr = [1,4,5];

const newArray = arr.map((elem:number)=> elem * elem);

// kuno function k jodi object er modhe bebohar kori taile take bole method

const person:{
    name:string,
    balance:number,
    addBalance(money:number):void;
} = {
    name: "Rejaul",
    balance: 10,
    addBalance(money:number){
        console.log(`My New Balance is: ${this.balance + money}`)
    },
}

// addBalance function theke kuno kichu return na korle type bole dite pari void

//spread operator

const myFriends = ['chandler', 'joey', 'ross']
const newFriends = ['monica', 'rachel', 'pheobe']

// Array destructuring
const [bestfriend] = myFriends;
const myBestFriend = {
    fullName: "Abul Bashar",
    age: 24,
};

const { fullName } = myBestFriend;
// aikhane automatic fullName er type ta infer kore nichhe ba bujte parteche
// tai explicitliy type bole deua lagbe nah r jodi fullName er por FullName : string
// aivabe type bole dei taile seita name alias hisabe dhorbe


// ekhon ami chachhi myFriends array te newFriends array er prottekta upadan push korte ekta ekta kore

myFriends.push(...newFriends)
// console.log(myFriends)

// rest parameter

// const greetFriends = (
//     friend1:string,
//     friend2:string,
//     friend3:string
// ): void => console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`);

//res parameter spread operator er ulta kaj kore mane ekta ekta alada 
// elements k eksathe ekta array the store kore

const greetFriends = (
    ...friends:string[]
): void => friends.forEach((friend)=> console.log(`Hi ${friend}`));




greetFriends("kashem", "Hashem", "Akhyar", "Gashem", "Lashem", "Bangla bhai", "Meraj")