let expect = require('chai').expect;

class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = { rate: 0, votes: 0, songs: [] }
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if (songs.length > 0) {
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if (arr.length > 0) {

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}

describe('SoftUniFy', function () {
    it('is allSongs an object', function () {
        let instance = new SoftUniFy();
        expect(instance.allSongs).to.deep.equal({});
    });
    it('Download song works properly', function () {
        let myClass = new SoftUniFy();
        myClass.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        expect(myClass.allSongs.hasOwnProperty('Eminem'));
    });
    it('is the song empty', function () {
        let myClass = new SoftUniFy();
        expect(myClass.playSong('song')).to.equal(`You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!`)
    });
    it('rate artist', function () {
        let myClass = new SoftUniFy();
        expect(myClass.rateArtist('artist')).to.equal('The artist is not on your artist list.');
    });
});