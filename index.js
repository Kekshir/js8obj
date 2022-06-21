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