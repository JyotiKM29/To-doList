import React from 'react';
import './App.css';

let name:string ;
name = "Jyoti";
let age:number;
let isStudent: boolean;
let hobbies: string[];
let role:[number , string]; //tuples 
role=[8,'suraj'];

// Interfece key word
type Person = {
  name: string;
  age?: number; //this is now option i.e if you don't define itb in object it will not give error

}

let person: Person = {
  name :"Jyoti",
  age :22

}

// if we want array of it
let lotofpeople: Person[];

// union type - it mean assign to type to the variable
let code: number | string;
code = 34567;
code = 'Suraj';

// function declaration
function display (name:string){
  console.log(name);
}
display("Ujala");

// type to function
let printName:Function;

// arrow function
let printNames: (name:string) => void;


// anything --not to recommendend
let names:any;

// better Approach to it 
let personName: unknown;

// Similar for function
let printNames2: (name:string) => never;
// difference between them is void return undefine 
// but never doesn't return any thing


// // defining of object also be done as 
// type Person = {
//   name: string;
//   age?: number; //this is now option i.e if you don't define itb in object it will not give error

// }
















function App() {
  return (
    <div className="App">
      <h1>Hello! Jyoti</h1>
    </div>
  );
}

export default App;
