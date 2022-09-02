const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js
/*
const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['mumBai', 'DElhi', 'JaIPuR', 'gOa'];

for(let i=0; i<cities.length){
    let firstAlphabet = cities[i].slice(0,1);
    let loweCaseCity = cities[i].toLocaleLowerCase();
    lowerCaseCity.replace(firstAlphabet,firstAlphabet.toUpperCase());
    let listItem = document.createElement('li');
    listItem.textContent = lowerCaseCity;
    list.appendChild(listItem);
}*




