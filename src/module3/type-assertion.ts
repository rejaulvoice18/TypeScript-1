
let emni: any;

emni = "Next Level web development";

// (emni as string).length; aita onno vabe o lekha jay

<string>emni.length;


function kgToGram(param: string | number): string | number | undefined {
    if(typeof param === "string"){
        const value = parseFloat(param) * 1000;
        return `The Converted result is: ${value} gram`;
    }
    if(typeof param === "number"){
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number;
// const resultToBeString = kgToGram("1000") as string; alternative way niche dekhanu holo
const resultToBeString = <string>kgToGram("1000");

type CustomErrorType = {
    message: string
}

try{

}catch(err){
    console.log((err as CustomErrorType).message);
}