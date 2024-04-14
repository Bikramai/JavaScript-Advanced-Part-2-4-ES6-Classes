// Weak Maps :- weakMapss which is a new type in ES6 to implement private properties and methodsin an object.
// A weakMap is essentially a dictionary where keys are objects and values can be anythings.
// And the reason we call them weakmaps is coz the keys are weak. 
// so if there is no references to these keys, they will be garbage collector.


// Method 1
// I personally prefer to work with each privaste member independently, 
const _radius = new WeakMap();
const _move = new WeakMap(); // How about defining private method, we use another key map

class Circle {
    constructor(radius) {
        _radius.set(this, radius);  
        // we call set method. The first argument is the key, 
        // and we can see that key has to be object, it cannot be a symbol.
        // here we pass this which represents the instance of circle object, that's our key.
        // and radius argument. now technically, we can access this radius private property
        // if we can get addess to this weakMap.

        // private function
        // _move.set(this, function() {
        //     console.log('move', this);
            
        // we got the message feom the move method, but this is undefined.
        // coz we knew that earlier that body of this class is executed in strict mode, 
        // and this by default will be set to undefined to the gloval object.


        _move.set(this, () =>{
            console.log('move', this);
        // we want to access the instance o fthe circle object. How can we do this?
        // well, instead of using regular function and we can use arrow function and problem will go away.
        // it is going to be inherited feom the constructor function.
        });
    }

    // so if we want to access the radius property inside of the class
    draw() {
        // console.log(_radius.get(this))
        _move.get(this)();

        console.log('draw');
    }

}

const c = new Circle(1)

// Method 2 - little bit polluted 
// but we can create all in on private property in WeakMap.
// const pprivateProps = new Weak Map();

// class Circle {
//     constructor(radius) {
//         pprivateProps.set(this, {
//             radius: radius,
//             move: () => {

//         }
//     }
// )};

// privateProps.get(this)