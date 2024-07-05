// var generateName = require('sillyname');
import generateName from "sillyname";
import superheroes from "superheroes";

var name = superheroes.random();
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);
console.log(`My superhero name is ${name}.`);
