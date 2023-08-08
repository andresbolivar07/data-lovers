import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

const prinData = (movies) => {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'container');

    document.getElementById('root').appendChild(newDiv);

    movies.films.forEach(element => {
        const template = `
        <div class="card">
            <div class="title">${element.title}</div>
            <div class="photo">
                <img src="${element.poster}">
            </div>`;
            newDiv.innerHTML += template;
    })
}
prinData(data);

console.log(example, data);
