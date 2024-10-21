type typeOfDateProperty = keyof Date
type typeOfDatePropertyAsString = typeOfDateProperty & string



async function main() {
    let apiResponse = await Promise.all([
        fetch("https://example@ashish.com"),
        Promise.resolve("Titanium White")

    ]) 
    if(typeof apiResponse !== "undefined"){}

    type typeOfApiResponse = typeof apiResponse 
}

interface Introduction {
    name: string,
    age: number,
    address: string,
    citizenship: string,
    married: boolean,
    1: number,
    [mySymbol]: true    
}

const mySymbol = Symbol("mySymbol")

type keysInInterface = keyof Introduction & symbol


// typeof 

async function typeFun() {
    let responsType = await Promise.all([
        fetch("https://example.com"),
        Promise.resolve("White Walkers")
    ])
    type responseReturn = typeof responsType
}


//?^ note: type alias within a function scope!

const MyAjaxConstructor = new CSSRule()
MyAjaxConstructor.STYLE_RULE
const myAjax = new CSSRule()

const myRule = CSSRule


// Index Access Types

interface Car{
    makeBy: string
    model: string
    year: number
    color:{
        red: string
        green: string
        blue: string
    }
}

let carColor: Car["color"]
let carSomething: Car["not-something-on-car"]
let carColorRedComponent: Car['color']['red']
let carProperty: Car['color' | 'year']


// Use case: The type Registry Pattern

