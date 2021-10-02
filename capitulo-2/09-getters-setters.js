class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
} 

let lotrChar = new Person('Arthur');
console.log(lotrChar.name);
lotrChar.name = 'Deia';
console.log(lotrChar.name);
lotrChar._name = 'Salem';
console.log(lotrChar.name);