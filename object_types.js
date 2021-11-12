let a = [1,2,3,4]  //Array
console.log(a)

let b = new Set([1,3,2,2,1])  //Set
console.log(b)

let c = new Map([['name','abc'], ['age','7']])  //Map
console.log(c)

a.push(5)  //Adding elements in array
console.log(a)

b.add(5)  //Adding elements in set
console.log(b)

c.set('gender','male')  //Adding elements in map
console.log(c)

a.pop(5)  //Deleting elements in array
console.log(a)

b.delete(5)  //Deleting elements in set
console.log(b)

c.delete('gender', 'male')  //Deleting elements in map
console.log(c)

const d = new Date(2021, 11, 20)  //Date
console.log(d)