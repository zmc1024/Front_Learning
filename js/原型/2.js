Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

Car.prototype = {
    name: 'BMW'
}

function Car(color, owner) {
    this.color = color
    this.owner = owner
    // this.name = 'BMW'
    // this.lang = 4900
    // this.height = 1400
}

var car = new Car('red', 'tingting')
var car1 = new Car('green', 'sisi')

console.log(car.name);
console.log(car1.name);