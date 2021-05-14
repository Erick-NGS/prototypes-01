// class Person {
//   name = 'Kenobi';

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log(` - Hello there! 
//  - General ${this.name}! Welcome to our ${this.age}th encounter!`);
//   }
// }


/*
 The new Keyword, behind the scenes:
  function <name>(){
    this = {};
    ...
    return this;
  }
*/

function Person() {
  this.age = 30;
  this.name = 'Kenobi';
  this.greet = function () {
    console.log(` - Hello there! 
 - General ${this.name}! Welcome to our ${this.age}th encounter!`);
  }
}

const person = new Person();

person.greet()