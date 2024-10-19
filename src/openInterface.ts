

interface Car{

    runsOn(fuel:string):boolean
    make(company: string): void
       
}

function elonMusk(build: Car): void{
    build.make("Tesla");

    const isElectric = build.runsOn("electricity");
    console.log(`Is the car electric? ${isElectric}`);
}

interface Airplanes{
    runsOn(fuel: string): string
}

function boeing(build: Airplanes){
    build.runsOn("Aluminium Frames"){
        return "Not Safe"
    }
}



declare global {
    interface Window{
        exampleProperty: number;
    }
}

window.document
window.exampleProperty  = 42;


//* Recursive type

type NestedNumbe = number | NestedNumbe[]