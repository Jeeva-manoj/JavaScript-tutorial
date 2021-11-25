const x = [1,2,3,4,5]

const [first, second, ...remaining] = x  //spread operator on arrays

console.log(first)
console.log(second)
console.log(remaining)

const vehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
const extra_details = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
const updated = {...vehicle, ...extra_details}  //spread operator on objects

function add(...args) {
    let result = 0
  
    for (let arg of args) result += arg;  //rest operator
  
    return result
  }
  
console.log(add(1))   
console.log(add(1,2)) 
console.log(add(1, 2, 3, 4, 5)) 