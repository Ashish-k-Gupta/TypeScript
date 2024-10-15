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

function pritEve