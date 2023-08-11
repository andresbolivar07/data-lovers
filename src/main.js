import { filterData } from './data.js';

import data from './data/ghibli/ghibli.js';

const filmsArray = data['films'];

const printData = (movies) => {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'container');

    document.getElementById('root').appendChild(newDiv);

    movies.forEach(element => {
        const template = `
        <div class="card">
            <div class="title">${element.title}</div>
            <div class="release_date">${element.release_date}</div>
            <div class="photo">
                <img src="${element.poster}">
            </div> `;
            newDiv.innerHTML += template;
    })
}

const loadAll = document.getElementById("showAll")
loadAll.addEventListener('click', () => {
    /* Llamada de función showData para mostrar peliculas*/    
    printData(filmsArray);
});



