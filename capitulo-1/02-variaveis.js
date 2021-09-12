var num = 1;
num = 3;
var price = 1.5;
var myName = 'Packt'
var trueValue = true;
var nullVar = null;
var und;

console.log('num: ', num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar:' + nullVar);
console.log('und:' + und);

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
   var myVariable = 'local';

    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';

    return myOtherVariable;
}

console.log(myVariable); // global, pois estamos referenciando uma variável global
console.log(myFunction()); // local pq declaramos a variável dentro da função como uma variável local, portanto o escopo está apenas no interior de myFunction
console.log(myOtherVariable); //a linha exibirá global pq referenciamos a variável global
console.log(myOtherFunction()); // local, na função referenciamos a variável global myOtherVariable e atribuímos o valor local
console.log(myOtherVariable); // por esse motivo exibirá local pois alteramos o valor da variável na function