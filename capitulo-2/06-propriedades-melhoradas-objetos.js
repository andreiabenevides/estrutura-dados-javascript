//desestruturação de array (array destructuring)

let [x, y] = ['a', 'b'];

//é o mesmo que

let x = 'a';
let y = 'b';

[x, y] = [y, x];

//é o mesmo que

var temp = x;
x = y;
y = temp;

//troca de variáveis

let [x, y] = ['a', 'b'];
let obj = { x, y };
console.log(obj);

// é o mesmo que

var x = 'a';
var y = 'b';
var obj2 = { x: "a", y: "b" };


//nomes de método abreviados

const hello = {
    name: 'abcdef',
    printHello() {
        console.log('Hello');
    }
};
console.log(hello.printHello())

// é o mesmo que

var hello = {
    name: 'abcdef',
    printHello: function printHello() {
        console.log('Hello');
    }
}