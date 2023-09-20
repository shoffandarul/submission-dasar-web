// object blueprint
function Car(brand, color, maxSpeed, chassisNumber){
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function () {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function () {
    console.log(`${this.brand} ${this.color} is turning`);
}

// new object
const car1 = new Car('Toyota', 'Red', '200', 'TO-1');

console.log(car1);
car1.drive();


// class
class Dar {
    constructor(brand, color, maxSpeed,chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }

    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
}

// new object
const dar1 = new Dar('Honda', 'Silver', '180');
dar1.chassisNumber = 'HD-01';

console.log(dar1);
dar1.drive();


// get set
class User{
    // property
    constructor(firstName, lastName, noID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._noID = `${Math.floor(Math.random() * 1000) + 1}`;
    }

    // method
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    setFullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getID() {
        return this._noID;
    }

    setID() {
        console.log('Unable to change ID');
    }
}

const user1 = new User('John', 'Doe');
user1.getFullName();
user1.setFullName('Doe Josh');
user1.getFullName();
user1.getID();
user1.setID('123');
user1._noID('123'); // bypass
user1.getID();

// member visibility
class people{
    #idNumber = null; // enclosing class

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#idNumber = this.#generateIdNumber();
    }

    #generateIdNumber() {
        return `${Math.floor(Math.random() * 1000) + 1}`;
    }
}


// Pewarisan
// SuperClass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} send ${message} to ${receiver}`);
    }
}

// Subclass
class WhatsAppService extends MailService{
    //overriding property
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }
    //overriding method
    sendMessage(message, receiver) {
        console.log(`${this.sender} send ${message} to ${receiver} via WhatsApp`);
    }

    sendBroadcastMessage(message, receivers) {
        for(const receiver in receivers){
            this.sendMessage(message, receiver);
        }
    }
}

class EmailService extends MailService{
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message,receiver);
        }, delay);
    }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
whatsapp.sendDelayedMessage(); // Error

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
email.sendBroadcastMessage(); // Error

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false


// objectComposition
class Developer{
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is commiting changes...`)
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI`);
        }
    }
}
function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API`);
        }
    }
}
function canDeployApp(developer) {
    return {
        DeployApp: () => {
            console.log(`${developer.name} is deploying App`);
        }
    }
}

function createFrontEndDev(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}
function createBackEndDev(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}
function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}
function createFullStackDev(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = createFrontEndDev('Fulan');












class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal {
    eat() {
        return `${this.name} sedang makan!`;
    }
}
class Eagle extends Animal {
    fly() {
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit("Labi", 2, true);
const myEagle = new Eagle("Elo", 4, false);
myRabbit.eat();
myEagle.fly();
console.log(myRabbit.isMammal);
console.log(myEagle.isMammal);