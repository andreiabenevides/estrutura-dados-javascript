//var pode ser substituído por let
//uma vez que var não apresenta erro quando declaramos novamente a variável

var language = 'Javascript';
var language = 'Ruby';
console.log(language);

//Com let ele lançara erro por ter uma variável criada com o mesmo nome

let language = 'Javascript';
let language = 'Ruby';
console.log(language);

// uma variável const possui um valor somente para leitura, isto é tem um valor constante (Que não muda)

const PI = 3.141593
PI = 3.0
console.log(PI)


const jsFramework = {
    name: 'Angular'
};

jsFramework.name = 'React'; //Não dá erro, pois objetos com const permite que as propriedades recebam novos valores, mas a referencia não pode ser alterada
console.log(jsFramework)

jsFramework = {
    name: 'Vue' // não pode atribuir uma nova ref
}