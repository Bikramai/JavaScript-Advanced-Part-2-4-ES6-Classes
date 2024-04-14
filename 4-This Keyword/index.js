'use strict';

const Circle = function() {
    this.draw = function(){ console.log(this); }
};

const c = new Circle();
// Method Call
c.draw();

const draw = c.draw;

// Function Call
draw();


// Method Call :-

// Function Call :- we're calling this on a stand alone function that is not 
// part o f an object. so when we call this method as a function, by default 
// this ({ console.log(this); }) will point to global object which is window
// in the browser, andd global in node.

// Now to refresh our mind, we know that here 
// -when we use a new operator ->const c = new Circle(); will create a new empty object.
// -set this ->this.draw = function()and set this in constructor function, to point to
// -that object. 
// -if we forget to use new operator, this by default will point to the global object.
// -which is window in browser, or global in node. 


// Strict Mode :- It prevents us from accidentally modifying the global object, coz that's bad prctice.

// In JavaScript we have mode that is called strict mode. 
// When we enable strict mode, js engine will be the most sensitve, 
// so it will do more error checking if there are errors that if there are
// errors that silently fail, it's going to turn them into exceptions, and 
// also it will change the behavior of the this keyword in functions.
// when we enable strict mode, if you call a method as a function, this kwyword
// by default will no longer point to the global object it will set to undefined.


// Let's see how this behave in our ES6 classes.
class circle {
    draw() {
        console.log(this)
    }
}

const c1 = new circle();
const Draw = c1.draw;
draw();

// why we get undefined?
// => coz by default, the body of our classes are executed in the strect mode.

// Strict Mode :- It prevents us from accidentally modifying the global object, coz that's bad prctice.