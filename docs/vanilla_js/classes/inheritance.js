"use strict";

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`Shape draw ${this.width}, ${this.height}, ${this.color}`);
  }

  getArea() {
    return this.width * this.height;
  }
}

const shape = new Shape(5, 5, "red");
// ingeritance from Shape
class Rectangle extends Shape {}

const rectangle = new Rectangle(10, 10, "green");
rectangle.draw();

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
  draw() {
    super.draw();
    console.log(`Triangle : ${this.getArea()}`);
  }
}

const triangle = new Triangle(20, 30, "gray");
console.log(`triangle.getArea : ${triangle.getArea()}`);
triangle.draw();

console.log(shape instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
