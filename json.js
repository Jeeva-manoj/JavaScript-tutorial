let a = {"name":"James", "age":30, "gender":"male"}  //object
let b = '{"name":"James", "age":30, "gender":"male"}'  //JSON

console.log(typeof a)
console.log(typeof b)

a = JSON.stringify(a)  //object to JSON
b = JSON.parse(b)  //JSON to object

console.log(typeof a)
console.log(typeof b)

console.log(b['name'])  //accessing properties
console.log(b.age)

