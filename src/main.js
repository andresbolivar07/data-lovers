import { filterData, sortData } from './data.js';

import data from './data/ghibli/ghibli.js';

const filmsArray = data['films'];


const printData = (movies) => {

    if (document.getElementById('container')){
        const cleanContainer = document.getElementById('container');
        document.getElementById('root').removeChild(cleanContainer);
    }
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

const loadAll = document.getElementById("showAll");
loadAll.addEventListener('click', () => {
    /* Llamada de función showData para mostrar peliculas*/    
    printData(filmsArray);
});

const searchBtn = document.getElementById("submitBtn");
searchBtn.addEventListener('click', () => {
    const search = document.getElementById("searchInput").value;
    const filterFunction = filterData (search, data.films, 'title');
    printData(filterFunction);
});


const upwardBtn = document.getElementById("upward");
upwardBtn.addEventListener('click', () => {
        
    printData(sortData(data, 'title'));
    
});

const fallingBtn = document.getElementById("falling");
fallingBtn.addEventListener('click', () => {
        
    printData(sortData(data, 'title').reverse());
    
});





