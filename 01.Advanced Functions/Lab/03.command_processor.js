function getMianipulator () {
    let string = '';

    function append(str) {
         string += str;
    }

    function removeStart(n) {
        string = string.substr(0, n);
    }

    function removeEnd(n) {
        string = string.substring(0, string.length - n);
    }

    function print() {
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let myManipulator = getMianipulator();

myManipulator.append('hello');
myManipulator.print();
myManipulator.append('again');
myManipulator.print();
myManipulator.removeStart(3);
myManipulator.print();
myManipulator.removeEnd(4);
myManipulator.print();