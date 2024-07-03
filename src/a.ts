//Funntion with single argument in ts needs you mention the type of input it accepts

function greet(firstName : string) {
  console.log("Hello," + firstName )
}

greet("Ashish")



//function with multiple argument need type for each input type you'll put in there
 //
//function greetFull (firstName: string, lastName: string, age: number){
  //console.log("Hello," + firstName + " " + lastName + "\nYou are" + age + "Years old") }
//
//greetFull("Ashish", "Gupta", 24)
//
//function sum(numberOne:number, numberTwo: number) {
  //console.log(numberOne + numberTwo)
//}
//
//sum(24, 22)
//


function adultOrNot(age: number): boolean{
      return age >= 18;
}

let result = adultOrNot(21)
console.log(result)

//How to give a type to function 

function Return1s(fn: () => void){
  return resultHere()
}

function resultHere() {
  console.log("Ashish")
}

Return1s(resultHere);









function parentFunv (child:(name: string) => string) {
  setTimeout(() => {
 console.log(child("Aaryan")); 
  }, 10000);
}


function child(name:string) {
  return name;
}

parentFunv(child);
