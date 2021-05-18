const personPrototypes = {
    greeting : function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },

    getMarried : function(lastName) {
        this.lastName = lastName;
    }
}

//One way of creating objects
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'yo';
mary.age = 34;

mary.getMarried('tom');

console.log(mary.greeting());


//Another way of creating objects
const ayush = Object.create(personPrototypes, {
    firstName : {value : 'ayush'},
    lastName : {value : 'kumar'},
    age : {value : 20}
});

console.log(ayush);

console.log(ayush.greeting());