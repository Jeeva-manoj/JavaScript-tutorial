class Car{
    constructor(name, year){
        this.name = name        //class
        this.year = year
    }
}

const car1 = new Car('Ford', 2015)
const car2 = new Car('Ferrari', 2020)  //object

class Car1 {
    constructor(brand) {
      this.name = brand
    }
    present() {
      return 'I have a ' + this.name
    }
  }
  
  class Model extends Car1 {
    constructor(brand, mod) {
      super(brand)
      this.model = mod
    }
    show() {
      console.log(this.present() + ', it is a ' + this.model)   //inheritance
    }
  }
  
let myCar = new Model("Ford", "Mustang");
myCar.show()