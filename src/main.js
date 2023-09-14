import { filterData, sortData, computeStats } from "./data.js";

import data from "./data/ghibli/ghibli.js";

const filmsArray = Array.from(data["films"]);

const printData = (movies) => {
  if (document.getElementById("container")) {
    const cleanContainer = document.getElementById("container");
    document.getElementById("root").removeChild(cleanContainer);
  }
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "container");

  document.getElementById("root").appendChild(newDiv);

  movies.forEach((element) => {
    const template = `
        <div class="card">
            <div class="title">${element.title}</div>
            <div class="photo">
                <img src="${element.poster}">
            </div> 
            <div class="description">Review: ${element.description}</div>
            <div class="director">Director: ${element.director}</div>
            <div class="producer">Producer: ${element.producer}</div>
            <div class="release_date">Release date: ${element.release_date}</div>
        </div>`;

    newDiv.innerHTML += template;
  });
};
const loadAll = document.getElementById("showAll");
loadAll.addEventListener("click", () => {
  /* Llamada de función showData para mostrar peliculas*/
  printData(filmsArray);
});

const searchBtn = document.getElementById("submitBtn");
searchBtn.addEventListener("click", () => {
  const search = document.getElementById("searchInput").value;
  const filterFunction = filterData(search, data.films, "title");
  printData(filterFunction);
});

const upwardBtn = document.getElementById("upward");
upwardBtn.addEventListener("click", () => {
  printData(sortData(data, "title"));
});

const fallingBtn = document.getElementById("falling");
fallingBtn.addEventListener("click", () => {
  printData(sortData(data, "title").reverse());
});

const review = Array.from(data["Review"]);

const printReview = (review) => {
  if (document.getElementById("container")) {
    const cleanContainer = document.getElementById("container");
    document.getElementById("root").removeChild(cleanContainer);
  }
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "container");

  document.getElementById("root").appendChild(newDiv);

  review.forEach((element) => {
    const template = `
        <div class="card">
            <div class="title">${element.name}</div>
            <div class="release_date">${element.description}</div>
            <div class="photo">
                <img src="${element.img}">
            </div> 
            <div class="release_date">${element.description2}</div>
            <div class="photo">
                <img src="${element.img2}">
            </div>  
            <div class="release_date">${element.description3}</div>
        </div> `;

    newDiv.innerHTML += template;
  });
};

const reviewGhibli = document.getElementById("review");
reviewGhibli.addEventListener("click", () => {
  printReview(review);
});

const printStats = (movies) => {
  if (document.getElementById("container")) {
    const cleanContainer = document.getElementById("container");
    document.getElementById("root").removeChild(cleanContainer);
  }
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "container");

  document.getElementById("root").appendChild(newDiv);

  newDiv.innerHTML += `
    <div class="card">
            <div class="tableDic">
            <table class="default">
            <caption>Directores y número de peliculas en Studio Ghibli.</caption>
            <thead>
                <tr>
                    <th>Director</th>
                    <th>No. de Películas</th>
                </tr>
            </thead>`;
  const tableStats = document.querySelector("table");

  movies.forEach((element) => {
    const template = `
        
            <tbody>
                <tr> 
                    <td class="name">${element.name}</td>
                    <td class="countMovies">${element.countMovies}</td>
                </tr>
            </tbody>`;
    tableStats.innerHTML += template;
  });
  newDiv.innerHTML += `
        </table>
        </div>
        </div>`;
};

const statsBtn = document.getElementById("stats");
statsBtn.addEventListener("click", () => {
  const filterStats = computeStats(data);
  printStats(filterStats);
});

const resetPage = () => {
  window.location.reload("index.html")
}
const btnHome = document.getElementById("resetPageBtn");
btnHome.addEventListener("click", resetPage);
