// Abstraction :- 
// -is one of the Core principles OOP
// -means hidding the details and complexity, and showing only the essential parts.
// -Remember the DVD player.
// -to implement abstraction we use private properties and methods. so we hide certain 
// -members of an object so they won't be addessible from the outside.


// How to implement private properties and methods with ES6 classes.
// -There are basically three different approaches
// -first approach is using prefix underscore and a naming convention.
// -second is by using ES6 New primitive type called symbols.-number, string, boolean
// -third is by using ES6 map.

// In ES6 we have another primitive called symbol.
// symbol is a function we call to generate a symbol.
// a symbol is essentially a unique identifier. Everytime we called this function,
// we get a new unique identifier. And note this is not a constructor function.
const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    // Hwe do we implement a private method?
    // In ES6 we have this new feature called computed property names.
    [_draw]() {

    }

}

const c = new Circle(1)