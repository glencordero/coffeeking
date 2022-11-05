// instantiating classes (object is an instance of class)

class Vehicle {
    constructor (type, cylinders, fuelType){
        this._type = type
        this._cylinders = cylinders
        this._fuelType = fuelType
    }
    describeYourself(){
        return `I am a ${this.type}`
    }

    get type() {
        return this._type
    }

    set type(type){
        this._type = type
    }
    get cylinders() {
        return this._cylinders
    }

    set cylinders(cylinders){
        this._cylinders = cylinders
    }
    get fuelType() {
        return this._fuelType
    }

    set fuelType(fuelType){
        this._fuelType = fuelType
    }
}

class Car extends Vehicle {
    constructor (type, cylinders, fuelType){
        super(type, cylinders, fuelType)
    }
}

class Motorcycle extends Vehicle {
    constructor (type, cylinders, fuelType){
        super(type, cylinders, fuelType)
    }
}


class Truck extends Vehicle {
    constructor (type, cylinders, fuelType){
        super(type, cylinders, fuelType)
    }
}

let car1 = new Car("car", 4, "gasoline")
let truck1 = new Truck("truck", 8, "diesel")
console.log(truck1)

class Sportscar extends Car {
    constructor (type, cylinders, fuelType){
        super(type, cylinders, fuelType)
    }
    
    describeYourself(){
        return `${super.describeYourself()} and I am very cool`
    }
}

let sportscar1 = new Sportscar("sportscar", 8, "gasoline")
console.log(sportscar1.describeYourself())

