//object.prototype
//Person.prototype

function Person(firstName , lastName , dob) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.changeLastName = function(newLastName) {
    this.lastName = newLastName;
}

const ayush = new Person('Ayush' , 'Kumar' , '2000-10-23');
const mittu = new Person('Mohit' , 'Sakral' , '2002-02-24');


console.log(ayush.getFullName());
console.log(mittu.getFullName())

console.log(mittu);

mittu.changeLastName('kutta');

console.log(mittu.getFullName());

console.log(ayush.hasOwnProperty('firstName'));
console.log(ayush.hasOwnProperty('getFullName'));