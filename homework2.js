function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owners = [];

    this.addOwner = function (owner) {
        this.owners.push(owner);
    };
    this.removeOwner = function (owner) {
        this.owners = this.owners.filter((oldOwner) => oldOwner !== owner);
    };
    this.getOwnerNames = function () {
        return this.owners.map((owner) = owner.fullName());
    };

    this.getOwnersCount = function () {
        return this.owners.length;
    };

    this.getCarInfo = function () {
        return '${this.make} ${this.model} released in ${this.year}. ${this.getOwnersCount()} person who owns this car. There are-${this.getOwnerNames.join(",")}.';
    };


    this.getFullInfo = function () {
        return '${this.make} ${this.model} from ${this.year}';
    };

    this.getCarInfo = function () {
        return `${this.make} ${this.model} released in ${this.year}`;
    };
}


function Person(name, surname, age, gender, cars) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
    if (cars === undefined) {
        cars = [];
    }
    this.fullname = function () {
        return '${this.name} ${this.surname}';
    };
    this.countCars = function () {
        var len = this.cars.length;
        return len;
    };
    this.buysCar = function (car) {
        this.cars.push(car);
        car.addOwner(this);
    };
    this.sellsCar = function (car) {
        this.cars = this.cars.filter((el) => el !== cars);
        car.removeOwner(this);

    };
    this.countCars = function () {
        return this.cars.length;
    };

    this.getAllCarsInfo = function () {
        return `${this.name} owns these cars: ${this.cars
            .map((car) => car.getCarInfo())
            .join(", ")}.`;
    };
}


let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
    daniel: {
        fullName: daniel916.fullName(),
        countCars: daniel916.countCars(),
        getAllCarsInfo: daniel916.getAllCarsInfo(),
    },
    elon: {
        fullName: ilona.fullName(),
        countCars: ilona.countCars(),
        getAllCarsInfo: ilona.getAllCarsInfo(),
    },
    duti_picoti: {
        getOwnersCount: duti_picoti.getOwnersCount(),
        getOwnerNames: duti_picoti.getOwnerNames(),
        getFullInfo: duti_picoti.getFullInfo(),
        getCarInfo: duti_picoti.getCarInfo(),
    },
    stodevianosto: {
        getOwnersCount: stodevianosto.getOwnersCount(),
        getOwnerNames: stodevianosto.getOwnerNames(),
        getFullInfo: stodevianosto.getFullInfo(),
        getCarInfo: stodevianosto.getCarInfo(),
    },
});

