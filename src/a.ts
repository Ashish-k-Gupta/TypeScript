const humidity = 79 //? Recall Literal types



//? Create types for two set of numbers


//? A set of number from 1 to 5
type OneThroughFive = 1 | 2 | 3 | 4 | 5
let lowNumber: OneThroughFive = 3;


//? A set up even number
type EvenNumber = 2 | 4 | 6 | 8
let evenNumber: EvenNumber = 8

let unionSetNumber : OneThroughFive | EvenNumber = 2
// let unionSetNumber2 : OneThroughFive | EvenNumber = 7

let intersectionSetNumber: OneThroughFive & EvenNumber = 2
let intersectionSetNumber2: OneThroughFive & EvenNumber = 4
// let intersectionSetNumber3: OneThroughFive & EvenNumber = 6


type BuildRange<N extends number,Result extends Array<unknown> = []
> = Result['length'] extends N ? Result['length'] : BuildRange<N, [unknown, ...Result]>;


function flipCoin(): "heads" | "tails"{
    if(Math.random() > 0.5) return "heads"
    return "tails" as const
}

const sucess = ["success", {name: "Ashish Gupta", email: "ashish@example.com"}] as const;
const fail = ["error",new Error("Something went wrong!")] as const;



const accepted = ["She said yes",{yes: "Yes I Will Give It A Chance", cellNumber: "xxxxx-xxxxx"}] as const
const rejected = ["Error", new Error("I have a boyfriend")] as const

function askHerOut(){
    if(flipCoin() === "heads") {
        return sucess
    }else{
    return fail

    }
}

const whatDidSheSay = askHerOut()

console.log(whatDidSheSay)
// whatDidSheSay[1].
// console.log(whatDidSheSay)



//* Working with union types

//? Think critically: "AND" vs "OR", as it pretains to the contents of the set, 
// ? vs the assumptions we can make about the value

 type Evens = 2 | 4 | 6 | 8
 type OneToFive = 1 | 2 | 3 | 4 | 5


function printEven(even: Evens): void{}
function printLowNumber(lowNum: OneToFive): void{}
function printEvenNumberUnder5(num: 2 | 4):void{}
function printNumber(num: number): void{}

let x = 5 as Evens | OneToFive
/*
let x = 5 as Evens | OneToFive
This line declares a variable x and assigns it the value 5. The as keyword is used for type assertion, telling TypeScript to treat the value as a certain type. In this case, it's asserting that 5 is of the union type Evens | OneToFive.
However, there's an issue here: 5 is not a valid value for the Evens type. This could potentially lead to runtime errors if not handled properly. TypeScript might allow this due to the union with OneToFive, but it's generally not a good practice to assert a value into a type it doesn't belong to.

A safer and more correct approach would be to use a type guard or to simply declare the variable as the union type without assertion:

let x: Evens = 4; // This is valid



*/

let y: Evens | OneToFive = 5

// ? what does Evens | OneToFive accepts as values?
let evenOrLowNumber: Evens | OneToFive;
evenOrLowNumber = 6
evenOrLowNumber = 3
evenOrLowNumber = 4
evenOrLowNumber = 5

//? what requirements can `Evens | OneThroughFive` meet?

printEven(x) //error
printLowNumber(x) //error
printEvenNumberUnder5(x) //error
printNumber(x)


// * Narrowing with type guards

const [first, second] = whatDidSheSay
if(second instanceof Error){
    second
}else{
    second
}

//* Discriminated Unions

if(first === "error"){
    // In this branch of yuor code, second is an Error
    second
}else{
    // In this branch of your code, second is the user info
    second
}


//* Intersection Types

//? What does Evens & OneThroughFice accept as value?

let evenAndLowNumber: Evens & OneToFive;
evenAndLowNumber = 2;
evenAndLowNumber = 3;
evenAndLowNumber = 4;
evenAndLowNumber = 6;


//? what requirements can `Evens & OneToFive) meet?

let z = 4 as Evens & OneToFive;


printEven(z) // Guaranted to be even
printLowNumber(z) // Guaranteed to be in {1,2,3,4,5} 
printEvenNumberUnder5(z) // Guaranteed to be in {2,4}
printNumber(z) // Guaranteed to be a number




