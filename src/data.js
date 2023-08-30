
export const filterData = (search, data, filterBy) => {
  if (filterBy === 'title') {
    let result = data.filter(data => data.title.toLowerCase().includes(search.toLowerCase()));
    return result;
  }
};

export const sortData = (data) => {
  const arrayFilms = Array.from(data['films']);
  // Array.from permite hacer copia de un array
  
  let result = arrayFilms.sort(function(a,b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
  });
  return result;
}

export const computeStats = (data,) => {

  const arrayCharacters = data['films'];
  let hayaoMiyazaki = 0;
  let isaoTakahata = 0;
  let yoshifumiKondō = 0;
  let hiroyukiMorita = 0;
  let gorōMiyazaki = 0;
  let hiromasaYonebayashi = 0;
  
  const response = [];

  for (let i = 0; i < arrayCharacters.length; i++ ) {
    if (arrayCharacters[i].director === 'Hayao Miyazaki') {
      hayaoMiyazaki ++;
    }
    if (arrayCharacters[i].director === 'Isao Takahata') {
      isaoTakahata ++;
    }
    if (arrayCharacters[i].director === 'Yoshifumi Kondō') {
      yoshifumiKondō ++;
    }
    if (arrayCharacters[i].director === 'Hiroyuki Morita') {
      hiroyukiMorita ++;
    }
    if (arrayCharacters[i].director === 'Gorō Miyazaki') {
      gorōMiyazaki ++;
    }
    if (arrayCharacters[i].director === 'Hiromasa Yonebayashi') {
      hiromasaYonebayashi ++;
    }  
  }
  response.push({id : 1, name : 'Hayao Miyazaki', countMovies : hayaoMiyazaki});
  response.push({id : 2, name : 'Isao Takahata', countMovies : isaoTakahata});
  response.push({id : 3, name : 'Yoshifumi Kondō', countMovies : yoshifumiKondō});
  response.push({id : 4, name : 'Hiroyuki Morita', countMovies : hiroyukiMorita});
  response.push({id : 5, name : 'Gorō Miyazaki', countMovies : gorōMiyazaki});
  response.push({id : 6, name : 'Hiromasa Yonebayashi', countMovies : hiromasaYonebayashi});
  return response;
}

