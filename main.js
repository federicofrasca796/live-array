//Creare array che chiede all'utente un numero compreso tra 0 ed il limite max degli elementi dell'array e stampa in console

/* strumenti
- array
- prompt()
- console.log
*/

const teachers = ['Fabio', 'Tiziano', 'Fabiola'];
teachers.push('Chiara');
// quanti elementi ci stanno nell'array?
const askNum = parseInt(prompt(`inserisci un numero compreso tra 0 e ${teachers.length - 1}`));
// console.log(teachers);
// console.log(askNum);
console.log(teachers[askNum]);
