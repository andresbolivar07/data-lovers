import { filterData, sortData, computeStats } from './data.js';

import data from './data/ghibli/ghibli.js';

const filmsArray = data['films'];
const reviewArray = data ['Review']

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
    });
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

const printReview = (review) => {

    if (document.getElementById('ghibliReview')){
        const cleanContainer = document.getElementById('container');
        document.getElementById('root').removeChild(cleanContainer);
    }
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'container');

    document.getElementById('root').appendChild(newDiv);

    review.forEach(element => {
        const template = `
        <div class="card">
            <div class="title">${element.name}</div>
            <div class="release_date">${element.description}</div>
            <div class="photo">
                <img src="${element.img}">
                <img src="${element.img2}">
            </div> `;

            newDiv.innerHTML += template;
    });
}

const reviewGhibli = document.getElementById("review");
reviewGhibli.addEventListener('click', () => {
    printReview(reviewArray);
});

const printStats = (movies) => {

    if (document.getElementById('container')) {
        const cleanContainer = document.getElementById('container');
        document.getElementById('root').removeChild(cleanContainer);
    }
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'container');

    document.getElementById('root').appendChild(newDiv);

    movies.forEach(element => {
        const template = `
        <div class="card">
            <div class="name">${element.name}</div>
        </div> `;

            newDiv.innerHTML += template;
    });
}

const statsBtn = document.getElementById("stats");
statsBtn.addEventListener('click', () => {
    const filterStats = computeStats(data);
    printStats(filterStats);
});
