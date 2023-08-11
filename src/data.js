

export const filterData = (data, filterBy) => {
  let result = [];
  if(filterBy === 'producer'){
    result = filmsArray.filter(films => films.producer);
  }
  return result;
}
console.log(result);

