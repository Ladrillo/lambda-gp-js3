// A. the `this` keyword: IMPLICIT BINDING ===================================================

const prius = {
  name: 'Prius',
  make: 'Toyota',
  odometer: 0,
  drive(dist = 10) {
    this.odometer = this.odometer + dist;
    console.log(`We drove ${dist} and we are at ${this.odometer}!!`);
  }
}

// 1- Build a "peter" person object.
//      it has a "name" prop.
//      it has an "age" prop.
//      it has a "greet" method that logs "hi, I am Peter and I am 23" (do NOT use hard-coded name and age!)

const peter = {
  name: "Peter",
  age: 23,
  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age}`);
  }
}

// 2- Build a "fido" dog object.
//      it has a "name" prop.
//      it has a "belly" prop which initializes as an empty array.
//      it has a "eat" method that adds foodstuffs to Fido's belly.
//      it has a "poo" method that empties out belly.
//      it has a "bark" method that logs a bark.

const fido = {
  name: "Fido",
  belly: [],
  eat: function (foodstuff) {
    this.belly = this.belly.concat(foodstuff);
  },
  poo: function () {
    this.belly = [];
  },
  bark: function () {
    console.log("Woof woof");
  }
}

// B. the `this` keyword: NEW BINDING =========================================================

// 3- Create a Person constructor function.
//      how come it does not need a return keyword?

const weather = 'cloudy'; // aha, here.

function Person(nameFromArgs, ageFromArgs) {
  this.name = nameFromArgs;
  this.age = ageFromArgs;
  // is weather here?
  this.greet = function () {
    // weather is not here...
    return `Hi, I am ${this.name} and I am ${this.age} and it is ${weather}`
  }
}

const josh = new Person('Josh', 34);

// 4- Create a Dog constructor function.
//      what does `this` refer to?

function Dog(name) {
  this.name = name;
  this.belly = [];
  this.eat = function (foodstuff) {
    this.belly.push(foodstuff);
  }
  this.poo = function () {
    this.belly = [];
  }
  this.bark = function () {
    console.log("woof woof!")
  }
}

const toby = new Dog('Toby');

// C. the `this` keyword: GLOBAL OBJECT BINDING ===============================================

// IN ORDER TO CREATE A CAR FACTORY
// I create a Car constructor (a function meant to be called with `new`)
function Car(name, make) {
  // when invoked with `new`:
  // an empty object gets created magically and assigned to `this`
  // we tack the usual props and methods to the `this`
  this.name = name;
  this.make = make;
  this.odometer = 0;
  this.drive = function (distance = 10) {
    console.log('DA THIS IN DRIVE: ', this);
    this.odometer = this.odometer + distance;
    console.log(`We drove ${distance} and we are at ${this.odometer}!!`);
  }
  // return this;
  // this object gets returned IMPLICITLY
}

const focus = new Car('Focus', 'Ford');
const focusDriveMethodPulledOutOfFocus = focus.drive;

// 5- Try saving into a variable the "greet" method from Person.
//      invoke greet. Does it work? Why not?

// 6- Try saving into a variable the "eat" method from Dog.
//      try using strict at the top of the file.
//      invoke eat. What happens? Why?

// D. using prototypes ========================================================================

// 7- All Persons should use the same "greet" method from Person.prototype.
//      refactor the Person so we use Person.prototype to attach "greet".

// 8- All Dogs should use the same "eat", "bark" and "poo" methods from Dog.prototype.
//      refactor the Dog so we use Dog.prototype to attach methods.


// E. the `this` keyword:EXPLICIT BINDING =====================================================

// 9- Save into a variable "extractedGreet" the "greet" method from Person.prototype.greet.
//      use "call" and "apply" to invoke the "extractedGreet" with a particular person as the `this`.

// 10- Save into a variable "extractedBark" the "bark" method from Dog.prototype.bark.
//      use "bind" to create a "boundExtractedBark" where the `this` is bound to a particular dog.


// F. pseudo-classical inheritance ============================================================

// 11- Create a Child constructor that inherits from Person