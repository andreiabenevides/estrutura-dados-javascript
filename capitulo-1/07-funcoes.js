//sintaxe básica
function sayHello() {
    console.log('Hello!')
}

sayHello();

///Função com argumento

function output(text, texttwo) {
    console.log(text, texttwo);
}

output('Hello!!!', 'Other text');

//devolvendo valor


function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(1, 2);

output(result)