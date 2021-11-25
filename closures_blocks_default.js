function Function1() {
    let a = 4  //local variable
    return a * a
  }

console.log(Function1())

let a = 4  //global variable
function Function2() {
  return a * a
}

console.log(Function2())


{
    let x = 10
    console.log(x)  //explicit block
}

let x = 5

function Function3(x, y=5){  //Default parameter
  return x + y
}

console.log(Function3(x))