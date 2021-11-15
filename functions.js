function greet(){                     //function declaration
    console.log('Hello world')  
}

greet()  //function calling


let add = function(num1, num2){       //function expression
    return num1+num2
}

let result = add(3,4)
console.log(result)


function area(r){
    let pi = 3.14         //local variable
    return (pi * r *r)
}

let output = area(2)   //global variable
console.log(output)


let mul = (val1, val2) => {        //arrow function
    return val1*val2
}

let out = mul(2,3)
console.log(out)

function sub(a1,a2){     //a1 and a2 are parameters
    return a1-a2
}

let val = sub(5,4)      //5 and 4 are arguments
console.log(val)

function Person(name, age){
    this.Name = name
    this.Age = age
}

Person.prototype.nationality = 'India'   //object prototype

let value = new Person('John', '8')
console.log(value.nationality)