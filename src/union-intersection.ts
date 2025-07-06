// Or hochhe Union

type NoobDeveloper = {
    name: string;
}

// type JuniorDeveloper = {
//     name:string;
//     expertise:string;
//     experience:number;
// }

// And means Intersection 2tai combine hoye ekta hoy

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

// Intersection er arekta expample

// enum Level{
//     junior = 'junior',
//     mid = 'mid',
//     senior = 'senior',
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: "junior" | "mid" | "senior";
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Moznu Mia",
    expertise: "JavaScript",
    experience: 1,
}

const developer: NextLevelDeveloper ={
    name: 'Md Rejaul Karim',
    expertise: 'Typescript',
    experience: 2,
    leadershipExperience: 2,
    level: "senior",
}