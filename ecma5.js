'use strict';

// Supertype
function Person(name) {
   this.name = name;
}

Person.prototype.describe = function () {
   return "Person called " + this.name;
};

// Subtype
function Employee(name, title) {
   Person.call(this, name); // Super ES5
   this.title = title;
}

Employee.prototype = Object.create(Person.prototype); // Extends
Employee.prototype.constructor = Employee;
// or
// Employee.prototype = new Person();

// Static Method
Employee.convert = function(thing) {
  if(thing.name && thing.title) {
      return new Employee(thing.name, thing.title);
  }
};


Employee.prototype.describe = function () {
   return Person.prototype.describe.call(this) + " (" + this.title + ")";
};


// ** Test **
var german = new Employee("German", "developer");
german instanceof Person; // true
german instanceof Employee; // true
console.log(german.describe()); // 'Person called german (developer)'
console.log(Employee.convert({ name : "German", title : "developer" }));  // Object Employee
console.log(german.convert) // undefine convert is only a class property and not an instance property
