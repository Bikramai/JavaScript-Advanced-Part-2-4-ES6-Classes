// In constrast we have static methods. Static methods are avaible on the class itself.
// Not the object instance. we often use them to create utility functions that are not 
// specific to a given object.

// For Example, in the circle class, this draw is specific to a circle object. 
// It's a particular circle object that we want to drop, so that's why it's an instance method.

// Static Method:- means that is not tie to a particular object. Let's call that parse.
// So parse takes a string, which is supposed to a json string, we parse it and 
// return a new circle object. Now to make this static we use static keyword on the front, and
// with this, this method will no longer be available on a circle object.
// here we wan't have circle.parse, it doesn't exist.

// let me show you, here in the console, circle has radius, and the draw method. the parse is not here.
// But it's accessible on the class reference so circle.parse. It's here.
// With this method, we are not working with a particular circle object, we're working with a circle 
// class itself. So to called static methods, we don't have to create an instance of a class.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() { //coz this method is aviable on an instance of a class, which is an object.
    }

    // Static Method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{ "radius":1 }');
console.log(circle);

// Note:-
// we use static methods to create utility functions that are not tied to a particular object.
// here one more example of static method

// In js we have built-in object Math and this object gives us a bunch of utility methods.
// when we type Math. we see bunch of utility methods.
// Here we directly access these methods on the math object itself.
// Here Math looks like a class. if this Math object didn't exists in JavaScript
// and we wanted to implement it using ES6 classes, this is how we would do it.
// so, we would dedine a class called Math and define a bunch of static methods like
// class Math {
//     static abs(value) {
//     //...
//     }
// }

// Math.

// then we could access this method directly on the math itself. Now this is cashing with 
// built-in object in JavaScript. So let me rename this below


class Math2 {
    static abs(value) {
        //...
    }
}

Math2.abs()

// we have this abs method here. So again, in this example we're not working with a 
// particular object here, this absolute is utility function that takes an input and
// returns something.
