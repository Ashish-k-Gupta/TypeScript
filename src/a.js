var humidity = 79; //? Recall Literal types
var lowNumber = 3;
var evenNumber = 8;
var unionSetNumber = 2;
// let unionSetNumber2 : OneThroughFive | EvenNumber = 7
var intersectionSetNumber = 2;
var intersectionSetNumber2 = 4;
function flipCoin() {
    if (Math.random() > 0.5)
        return "heads";
    return "tails";
}
var sucess = ["success", { name: "Ashish Gupta", email: "ashish@example.com" }];
var fail = ["error", new Error("Something went wrong!")];
var accepted = ["She said yes", { yes: "Yes I Will Give It A Chance", cellNumber: "xxxxx-xxxxx" }];
var rejected = ["Error", new Error("I have a boyfriend")];
function askHerOut() {
    if (flipCoin() === "heads") {
        return sucess;
    }
    else {
        return fail;
    }
}
var whatDidSheSay = askHerOut();
console.log(whatDidSheSay);
