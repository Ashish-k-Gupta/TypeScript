interface Amount2{
    currency: string;
    value: number;
}


// extends keyword

function consumeFood(arg: string){
    console.log(arg)
}

class AnimalEats {
    animalLike(food: string){
        consumeFood(food)
    }
}

class AnimalLivesIn extends AnimalEats{
    livesIn(place: string){
        console.log(place)
        return place
    }
}

class Dog extends AnimalLivesIn{
    speak(){
        return "Bhau.. Bhau.."
    }
}

const tommy = new Dog();

tommy.animalLike("pattergary")
tommy.livesIn("House")
console.log(tommy.speak());


//? 'implemets' keyword

interface AnimalLike{
    eat(food:string):void

    typeOfWeather(weather: "Hot" | "Cold" | "spring"): "Hot" | "Cold" | "spring"
       
}
 class Details {
    isReal(){
        return true
    }
 }

class Animal implements AnimalLike{
    eat(food: string): void{
        console.log(`Eating ${food}`)
    }

    typeOfWeather(weather: "Hot" | "Cold" | "spring"):"Hot" | "Cold" | "spring" {
        return weather = "Cold"
    }

    playsWith(toy: string): string{
        console.log(toy)
        return toy
    }
}


class Dog3 implements AnimalLike, Animal, Details{
    eat(food: string){
        return food
    }

    typeOfWeather(weather: "Hot" | "Cold" | "spring"): "Hot" | "Cold" | "spring" {
        return weather = "Cold"
    }
    playsWith(toy: string){
        return toy = "toyCar"
    }
    
    isReal(): boolean {
        return true
    }
}


const lucy =  new Animal
lucy.eat("dogFood")
lucy.typeOfWeather("Hot")
lucy.playsWith("ball")


class Dog2 extends Animal implements AnimalLike{
    bark(volume: "High" | "Low"){
        console.log(volume)
        return volume as "High" | "Low"
    }
}

const jully = new Dog2();
jully.eat("chicken_wings")
jully.playsWith("frisbee")
jully.typeOfWeather("spring")


interface User{
    printUserAge(age: number): number
}


class DetailClass{
    printName(user: string): string
    {
        return user;
    }
}

class newUser implements User, DetailClass{
    printUserAge(age: number): number {
        return 24
    }

    printName(user: string): string {
        return `My name is ${user = "Ashish"}`
    }

}

// Line 130 is an error, TS doesn' work like this.
// class foo extends Dog extends class Dog2 {}


type CanJump = {
    jumpToHeight(): number | [number, number]
}

let jumpheight: [number, number]
jumpheight = [1.7, 2.1]


class Dog4 implements CanJump{
    jumpToHeight(){
        return jumpheight
    }
    eat(food: string){
    consumeFood(food)
    }
}

type CanBark = | number | {bark(): string}

class Dog5 implements CanJump, CanBark{
    jumpToHeight(){
        return jumpheight
    }
    eat(food: string){
    consumeFood(food)
    }
}