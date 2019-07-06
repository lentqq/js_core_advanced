let expect = require('chai').expect;

class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}

describe('FilmStudio', function () {
    let sampleInstance;
    beforeEach(function () {
        sampleInstance = new FilmStudio('Niky');
    });

    it('Testing constructor studioName property', function () {
        expect(sampleInstance.name).to.equal('Niky');
    });
    it('Testing constructor films property', function () {
        expect(sampleInstance.films).to.eql([]);
    });
    it('testing makeMove filmName', function () {
        let result = sampleInstance
            .makeMovie('Star Wars', ['Mrak Hamilton', 'Carry Fisher', 'Me']);
        expect(result.filmName).to.equal('Star Wars');
    });
    it('Testing makeMove roles', function () {
        let result = sampleInstance
            .makeMovie('Star Wars', ['Mark Hamilton', 'Carry Fisher']);
        expect(result.filmRoles).to.deep.equal([{ role: 'Mark Hamilton', actor: false }, { role: 'Carry Fisher', actor: false }]);
    });
    it('Testing makeMove with a few arguments', function () {
        expect(() => sampleInstance.makeMovie(['Mark Hamilton', 'Carry Fisher']))
            .to.throw('Invalid arguments count');
    });
    it('Testing makeMove with wrong argument', function () {
        expect(() => sampleInstance.makeMovie(52, ['Mark Hamilton', 'Carry Fisher']))
            .to.throw('Invalid arguments');
    });
    it('Testing lookingForProducer', function () {
        sampleInstance.makeMovie('Star Wars', ['Mark Hamilton', 'Carry Fisher']);
        expect(() => sampleInstance.lookForProducer('George Lucas'))
            .to.throw('George Lucas do not exist yet, but we need to money...');
    });
    it('Testing lookingForProducer with right arguments', function () {
        sampleInstance.makeMovie('Star Wars', ['Mark Hamilton', 'Carry Fisher']);
        let result = sampleInstance.lookForProducer('Star Wars');
        expect(result).to.equal('Film name: Star Wars\ncast:\nfalse as Mark Hamilton\nfalse as Carry Fisher\nfalse');
    });
    it('Testing makeMove with wright casting', function () {
        sampleInstance.makeMovie('Star Wars', ['Mark Hamilton', 'Carry Fisher']);
        let result = sampleInstance.casting('Niky', 'Mark Hamilton');
        expect(result).to.equal('You got the job! Mr Niky you are next Mrk Hamilton in the Star Wars. Congratz!');
    });
    it('Testing makeMove with wright casting', function () {
        sampleInstance.makeMovie('Star Wars', ['Mark Hamilton', 'Carry Fisher']);
        let result = sampleInstance.casting('Niky', 'Spiderman');
        expect(result).to.equal('Niky we can not find a Spiderman role...');
    });
    it('Testing casting', function() {
        let result = sampleInstance.casting('Niky', 'Spiderman');
        expect(result).to.equal('There are no films yet in Niky. ')
    });
});