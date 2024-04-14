// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
// }


// ES6 Classes :- In JavaScript, classes are essentially functions. They are constructor functions.

class Circle {
    constructor(radius) {
        this.radius = radius;
        // this.move = function () {}
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);

// go to www.babel.js.io, Babel is a JavaScript compiler we we give it our modern js code,
// and it compiles it down to ES5(ES2015) code that all browsers understand.