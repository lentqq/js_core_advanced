class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let output = `${this.name}\n`;

        for (let rat of this.unitedRats) {
            output += `##${rat.name}\n`;
        }

        return output;
    }
}

let firstRat = new Rat('Peter');
console.log(firstRat.toString());
console.log(firstRat.getRats());
firstRat.unite(new Rat('George'));
firstRat.unite(new Rat('Alex'));
console.log(firstRat.getRats());
console.log(firstRat.toString());