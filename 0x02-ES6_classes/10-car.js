const cloneCar = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneCar]() {
    return new this.constructor(this.brand, this.motor, this.color);
  }

  cloneCar() {
    return this[cloneCar]();
  }
}
