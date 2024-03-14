//Método .forEach
let myHTML = '<ul>'
const numbersList = [1, 2, 3, 4, 5];

numbersList.forEach((number, index, array) => {
	myHTML += `<li>${number}</li>`;
});
myHTML += '</ul>';

console.log(numbersList);