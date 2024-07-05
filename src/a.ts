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







function runAfter1s(fn: () => void){
  setTimeout(fn, 1000)
}

const doSomething: () => void =() =>{
  console.log("Hello")
  return 5
}

runAfter1s(doSomething)
//How to give types to an object when there is function which returns true or false
//if a user is above 18.
//withoutInterface


//Here in below code you can see if you have to give the type of each object value and you have to write it again each time you use it in a function.
//On the other had you can create an Interface and then just re-use it where you need it. first letter must be CAPITAL whie creating an Interface.



function ifLegal(user: {
firstName: string;
  lastName: string;
  age: number;
}){
  console.log("Hi there " + user.firstName);
}

//Interface
interface User {
  firstName: string;
  lastName: string;
  age: number
}

function isLegal (user: User){
  if(user.age > 18){
    return true;
  }else{
    return false;
  }
}

function greetUser(user: User):void {
  console.log("Hi there " + user.firstName)
}

const user: User = ({
  firstName: "Ashish",
  lastName: "Gupta",
  age: 24

})
console.log(isLegal(user));
greetUser(user);



