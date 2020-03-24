// class AgePerson {
//   age = 40;
//   printAge() {
//     console.log(this.age);
//   }
// }
// class Person extends AgePerson {
//   name = "Max";
//   constructor() {
//     super();
//     this.age = 30;
//   }
//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// function Person() {
//   this.name = "Max";
//   this.age = "30";
//   this.greet = function() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   };
// }

// Person.describe = function() {
//   console.log("Creating person");
// };

// Person.describe();

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };
// Person.prototype.printAge = function() {
//   console.log(this.age);
// };

// const p = new Person();
// p.greet();
// p.printAge();
// console.dir(p);
// console.dir(Person);
// console.dir(p);
// const p2 = new p.__proto__.constructor();
// console.log(p2);

// console.dir(Object);

// const p = new Person();
// console.dir(p);

const course = {
  title: "Javascript - The Complete guide",
  rating: 5
};
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating}/5`);
  }
});

course.printRating();
