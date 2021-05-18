class Person {
    constructor(firstName , lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName , lastName , phone , membership) {
        super(firstName , lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 'Out of your range';
    }
}

const ayush = new Customer('Ayush' , 'kumar' , '555-555-5555' , 'Premium');

console.log(ayush);
console.log(ayush.greeting());

console.log(Customer.getMembershipCost());