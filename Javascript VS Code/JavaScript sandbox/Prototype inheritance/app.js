//Prototype Inheritance

function Person(firstName , lastName) { 
    this.firstName = firstName;
    this.lastName = lastName;
}

//Prototype method
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Ayush' , 'Kumar');
console.log(person1);
console.log(person1.greeting());

//Customer Constructer
function Customer(firstName , lastName , phone , membership) {
    Person.call(this , firstName , lastName);

    this.phone = phone;
    this.membership = membership;
}

//inherit the person Prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make Customer.prototype return Customer()
Customer.prototype.constructer = Customer;

Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} Welcome`;
}

//create customer
const customer1 = new Customer('Mohit' , 'Sakral' , '555-555-5555' , 'Standard');
console.log(customer1);
console.log(customer1.greeting());