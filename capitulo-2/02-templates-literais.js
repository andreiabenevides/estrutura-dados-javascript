const book = {
    name: 'Learning Javascript DataStructures and Algorithms'
};
console.log('You are reading' + book.name + '.,\m and this is a new line \n so is this.');


//templates literais devem usar crase e  para interpolar um valor basta defini-lo com um sinal de cifrão e chaves 
console.log(`You are reading ${book.name}., 
    and this is a new line
    and so is this.`
)