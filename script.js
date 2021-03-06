// A. the `this` keyword: IMPLICIT BINDING ===================================================

// 1- Build a "peter" person object.
//      it has a "name" prop.
//      it has an "age" prop.
//      it has a "greet" method that logs "hi, I am Peter and I am 23" (do NOT use hard-coded name and age!)

// 2- Build a "fido" dog object.
//      it has a "name" prop.
//      it has a "belly" prop which initializes as an empty array.
//      it has a "eat" method that adds foodstuffs to Fido's belly.
//      it has a "poo" method that empties out belly.
//      it has a "bark" method that logs a bark.


// B. the `this` keyword: NEW BINDING =========================================================

// 3- Create a Person constructor function.
//      how come it does not need a return keyword?

// 4- Create a Dog constructor function.
//      what does `this` refer to?


// C. the `this` keyword: GLOBAL OBJECT BINDING ===============================================

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