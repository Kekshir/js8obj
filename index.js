//1
let obj = {a: 1, b: 2, c: 3};
alert(obj['c']);
alert(obj.c);

//2
let user = [
    {
      name: "John",
      age: 30
    },
    {
      name: "Bob",
      age: 21
    },
    {
      name: "Anna",
      age: 19
    }
    ]
function userName(person) {
    return person.name === 'Bob';
}
console.log(user.find(userName));

//3
let city1 = {};
city1.name = 'ГородN';
city1.population = 1000000;

let city2 = {
    name: "ГородM", 
    population: 1e6
}

city1.getName = city2.getName = function () { return this.name; };
console.log(city1.getName());
console.log(city2.getName());