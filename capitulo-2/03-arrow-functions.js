var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
}

console.log(circleAreaES5(2));

const circleArea = r => {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
}

console.log(circleArea(2));

const somar = (a, b) => a + b; //quando possui uma única instrução, é possível omitir o return

const duplicar = a => a * 2; // Quando possui somente um argumento, é possível omitir o parenteses



// const formatName = (user) => {
//     return {
//         ...user,
//         name: `${user.firstName} ${user.lastName}`
//     }
// }


//return objeto implicito
const formatName = (user) => ({
    ...user,
    name: `${user.firstName} ${user.lastName}`
})

console.log(formatName({
    firstName: 'Salem',
    lastName: 'Benevides'
}))