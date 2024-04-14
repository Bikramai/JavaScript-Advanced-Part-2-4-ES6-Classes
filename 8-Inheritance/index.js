class Shape {

    // let's add color in shape
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move');
    }
}

class Circle extends Shape { 
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }
}

const c = new Circle('blue', 3);
