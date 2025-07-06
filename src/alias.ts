type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
}
// Aivabe name alias kora jay but name alias er name tar first letter Capital hoite hobe
const crush1: CrushType = {
    name: "Moina Pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda",
}

const crush2: CrushType = {
    name:"Tia Pakhi",
    profession: "Next level web developer",
    address: "Mexico"

}

// Boolean a type alias kivabe kaj kore ta niche dekhanu holo

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string

const courseName: CourseNameType = "Next Level Web Development"

type OperationType = (x: number, y:number)=> number;

const calculate = (
    number1: number, 
    number2: number,
    operation: OperationType
) => {
    return operation(number1, number2);
};

calculate(20,40, (x,y)=> x + y);
calculate(10, 20, (x,y) => x - y);
calculate(10, 20, (x, y)=> x * y);