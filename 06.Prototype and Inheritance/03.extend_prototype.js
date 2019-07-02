function extendClass() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `name: ${this.name}, email: ${this.email}`;
        }
    };
    Person.prototype.species = 'human';
    Person.prototype.toSpeciesString = function () {
        return `I am a ${this.species}.${this.toString()}`;
    }
    let person = new Person('Pesho', 'pesho.com');
    console.log(person);
    console.log(person.species);
    console.log(person.toSpeciesString());
};

extendClass();