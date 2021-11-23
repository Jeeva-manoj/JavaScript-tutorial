const fruits = new Map()  //map

fruits.set("Apple", 10)
fruits.set("Orange", 20)

console.log(fruits)

function disp(item){
    console.log(item)
}

const fruit_list = ["apple", "orange"]
fruit_list.forEach(disp)  //forEach

function check(value) {
    return value > 18
  }

const numbers = [4, 9, 16, 25, 29]
console.log(numbers.find(check))  //find

function checkadult(age) {
    return age >= 18
  }

const ages = [32, 33, 16, 40]
console.log(ages.filter(checkadult))  //filter

function func(total, num) {
    return total - num
  }

const numbers1 = [175, 50, 25]
console.log(numbers1.reduce(func)) //reduce

function check_age(age) {
    return age > 18
  }

const ages1 = [32, 33, 20, 40]
console.log(ages1.every(check_age)) //every

function check_age1(age) {
    return age > 18
  }

const ages2 = [32, 33, 20, 40]
console.log(ages2.some(check_age1)) //some

var name = "John"
var color = "brown"
var age = 18
  
var details = {name, color, age}  //enhanced object literals
console.log(details)