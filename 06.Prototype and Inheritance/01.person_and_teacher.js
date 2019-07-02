function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    };

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    };

    return {
        Person,
        Teacher
    };
}

// Way to link two functions !!!

function Person(name) {
    this.name = name;
}

function Teacher(name, subject) {
    this.name = name;
    this.subject = subject;
}

Teacher.prototype = Person.prototype;

let me  = new Teacher('Nik', 'JS'); 
console.log(me.name);