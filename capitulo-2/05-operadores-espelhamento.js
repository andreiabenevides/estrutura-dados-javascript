
function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}

let params = [3, 4, 5];

console.log(sum(...params))


//es5

console.log(sum.apply(undefined, params));


function restParamaterFunction(x, y, ...a) {
    console.log(a.length)
    return (x + y) * a.length;
}



// function restParamaterFunction(x, y) {
//     var a =  Array.prototype.slice.call(arguments, 2);
//     return (x + y) * a.length;
// }
console.log(restParamaterFunction(1, 2, 'hello', true, 7));