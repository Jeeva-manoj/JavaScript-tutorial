let a = 20  //block scoped
if (a==20){
    let a = 10
    console.log(a)
}
console.log(a)

var b = 20  //function scoped
if (b==20){
    var b = 10
    console.log(b)
}
console.log(b)

const c = 20  //block scoped and cannot be reassigned

let name = 'John'
let role = 'Developer'

console.log("Hi " + name + " is a " + role)  //without template string
console.log(`Hi ${name} is a ${role}`)  //with template