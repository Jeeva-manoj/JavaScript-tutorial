let object = {
    greet: function(){
        console.log('Hello World')  //non-concise method
    }
}

object.greet()

let object1 = {
    greet(){
        console.log('Hello World')  //concise method
    }
}

object1.greet()

let object3 = {
    a: 'Hello',   //non-concise properties
    b: 'World'
}

console.log(object3)

let a = 'Hello', b = 'World'
let object4 = {a, b}         //concise properties

console.log(object4)

