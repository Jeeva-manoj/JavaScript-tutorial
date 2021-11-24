let hello = () => {console.log('Hello World')}  //function declaration

hello()  //function calling

let add = (a,b) => {console.log(a+b)}  //with arguments

add(1,2)

let greet = val => "Hello " + val  //without parantheses

console.log(greet('World'))

let mul = (a,b) => a*b 

console.log(mul(3,2))

let sum = (a,b, c, d) => {
    let sum = a + b + c + d
    return sum
}

console.log(sum(3,2,4,1))  //multiple inputs