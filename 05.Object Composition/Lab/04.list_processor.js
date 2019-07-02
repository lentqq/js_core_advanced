let list = function () {
    let commands = [];
    return {
        add: (command) => commands.push(command),
        remove: (command) => {
            commands = commands.filter(x => x !== command);
        },
        print: () => console.log(commands.join(', '))
    }
}();

list.add('hello');
list.add('again');
list.remove('hello');
list.add('again');
list.print();