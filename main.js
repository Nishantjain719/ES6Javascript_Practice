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

