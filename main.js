var message = (name === "John") ? "Hello" : "Nice to meet you";


var names = ['chris', 'sean', 'raine'];
var capitalizeNames = function (inputNames) {
    var outputNames = [];
    for (var i = 0; i < inputNames.length; i++) {
        var firstLetter = inputNames[i][0]
        var rest = names[i].slice(1);
        outputNames.push(firstLetter.toUpperCase() + rest);
    }
    return outputNames;
}
var capitalizeName = function (name) {
    var firstLetter = name[0];
    var rest = name.slice(1);
    return firstLetter.toUpperCase() + rest;
}
var capitalNames = names.map(capitalizeName).join(",");

// filter
names.filter(function (name) {
    return name.length > 4;
})

//oop
var Vehicle = function (wheelCount, color) {
    this.wheels = wheelCount;
    this.color = color;
}

Vehicle.prototype.honk = function () {

}

var Car = function (color) {
    this.wheels = 4;
    this.color = color;
}
Car.prototype = new Vehicle()
Car.prototype.honk = function () {
    console.log('beep beep!')
}
Car.prototype.move = function (dist) {
    console.log('Moving car:', dist)
}
Vehicle.prototype.toString = function () { }
var car = new Car('red');
car.move(100)

//Instance of the Vehicle class
var cycle = new Vehicle(2, 'black');
car.honk();