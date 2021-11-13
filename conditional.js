let a = 10
let b = 20
let c = 30 

if (a>b)
    console.log('a is greater')  //if


if (a>b)
    console.log('a is greater')
else
    console.log('b is greater')  //if else


if (a>b && a>c)
    console.log('a is greater')
else if (b>c)
    console.log('b is greater')
else
    console.log('c is greater')  //if else if else


let result
result = a>b ? 'a is greater':'b is greater'
console.log(result)  //ternary operator

let val = 'b'

switch(val){
    case 'a':
        console.log(1)
        break
    case 'b':
        console.log(2)
        break
    case 'c':
        console.log(3)  //switch
        break
}
