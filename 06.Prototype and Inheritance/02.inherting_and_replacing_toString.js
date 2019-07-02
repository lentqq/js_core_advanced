function inheritigAndReplasingToString() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `${super.toString()}, courese: ${this.course}`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `${super.toString()}, subject: ${this.subject}`;
        }
    }
    //  return {
    //      Person,
    //      Teacher,
    //      Student
    //  };
     let perosn = new Person('kolio', 'kolio@abv')
     let student = new Student('Pesho', 'pesho@abv')
     let teacher = new Teacher('Gosho', 'gosho@abv', 'JSCore');
     console.log(perosn.toString());
     console.log(student.toString());
     console.log(teacher.toString());
};

inheritigAndReplasingToString();

