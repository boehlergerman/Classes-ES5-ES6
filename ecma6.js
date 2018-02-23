'use strict';

// Supertype
class Person {
   constructor(name) {
      this.name = name;
   }

   describe() {
      return `Person called ${this.name}`;
   }
}

// Subtype
class Employee extends Person {
   constructor(name, title) {
      super(name);
      this.title = title;
   }

   describe() {
      return super.describe() + `( ${this.title} )`;
   }

   // Static Method
  static convert(thing) {
    if(thing.name && thing.title) {
        return new Employee(thing.name, thing.title);
    }
  }
}

// ** Test **
let german = new Employee("German", "developer");
german instanceof Person; // true
german instanceof Employee; // true
console.log(german.describe()); // 'Person called german (developer)'
console.log(Employee.convert({ name : "German", title : "developer" }));  // Object Employee
console.log(german.convert) // undefine convert is only a class property and not an instance property
