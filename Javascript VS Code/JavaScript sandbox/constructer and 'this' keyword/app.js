// Person Constructer
function Person(name , dob) {
    this.name = name;
    this.birthday = new Date(dob);

    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const ayush = new Person('Ayush' , '2000-10-23');
console.log(ayush);
console.log(ayush.calculateAge());