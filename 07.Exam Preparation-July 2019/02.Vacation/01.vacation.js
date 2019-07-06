class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        if (this.kids.hasOwnProperty(grade)) {
            for (const kid of this.kids[grade]) {
                if (kid === `${name}-${budget}`) {
                    return `${name} is already in the list for this ${this.destination} vacation.`;
                }
            };
            this.kids[grade].push(`${name}-${budget}`);
        }
        else {
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`);
        }
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (this.kids.hasOwnProperty(grade)) {
            for (const kid of this.kids[grade]) {
                let kidData = kid.split('-');
                let kidName = kidData[0];
                if (kidName === name) {
                    let index = this.kids[grade].indexOf(kid);
                    this.kids[grade].splice(index, 1);
                    return this.kids[grade];
                }
            };
        };
        return `We couldn't find ${name} in ${grade} grade.`;
    }

    get numberOfCildren() {
        this._numberOfCildren = 0;

        for (const grade in this.kids) {
            this._numberOfCildren += this.kids[grade].length;
        }

        return this._numberOfCildren;
    };

    toString() {
        if (this.numberOfCildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        let result = `${this.organizer} will take ${this.numberOfCildren} children on trip to ${this.destination}\n`;
        Object.entries(this.kids).sort((a, b) => a[0] - b[0]);

        for (const grade in this.kids) {
            result += `Grade: ${grade}\n`;

            let currentNumber = 1;

            for (const kid of this.kids[grade]) {
                result += `${currentNumber}.${kid}\n`;
                currentNumber++;
            }
        }
        return result;
    };
};

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500)
console.log(vacation.toString());



