// infer kore bujte pare data type
// wife property thakte o pare nao thakte pare tai eita optional chaining deua
// specific value hoile amra data type na diye sora sori value o dite pari nicher moto kore
// ekta object property er samne readonly use korle tar value r change kora jay na.
const user1 : {
    readonly company: 'Programming Hero',
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string
} = {
    company: 'Programming Hero',
    name: "Montu Mia",
    age: 52,
    isMarried: true,
    wife: 'Bibi'
}