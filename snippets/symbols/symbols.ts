
import arrayFirst from './arrayPrototype';

let arrayNumber = [4,5,6,7,8];
console.log(arrayNumber[arrayFirst]());


console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertySymbols(Array.prototype));


//local symbols 
console.log(Symbol('foo') === Symbol('foo'));

//global symbols
console.log(Symbol.for('foo') === Symbol.for('foo'));

let person = {
    name: "Luke",
    surname: "Skywalker",
    [Symbol("sayHi")] : () => { console.log('Hello from symbol')}
}

console.log(person);

console.log(Object.getOwnPropertyNames(person));

Object.getOwnPropertySymbols(person).forEach( s => {
       let symbol : any = person[s];
       console.log(symbol());
});




