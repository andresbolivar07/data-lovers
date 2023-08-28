
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
  console.log(arrayCharacters)
  let totalProducer = 0;

  for (let i = 1; i < arrayCharacters; i++ ) {
    if (arrayCharacters[i].director === 'Isao Takahata') {
      totalProducer ++;
      console.log(totalProducer);
    }
  }
  return totalProducer;
}
