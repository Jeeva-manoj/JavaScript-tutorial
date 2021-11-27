function add(n1, n2, display){
    let sum = n1 + n2
    display(sum)
}

function display(out){
    console.log(out)
}

add(1,3, display)    //callback

let promise = new Promise(function(resolve, reject){
    
    resolve()
    reject()
})

promise.then(
    function (value){
        console.log('Success')     //promise
    },

    function (error){
        console.log('Failure')
    }
)

async function disp() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("Hello world")
    });
    console.log(await myPromise)     //async and await
  }
  
disp();

let file = "https://jsonplaceholder.typicode.com/todos/1"

fetch (file)
    .then(x => x.text())
    .then(y => console.log(y))   //fetch api