// Implementing Getter and Setter in ES6 classes

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value){
        if (value<= 0) throw new Error('invalid radius')
        _radius.set(this, value);
    }
}

const c = new Circle(1);