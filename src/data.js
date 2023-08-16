
export const filterData = (search, data, filterBy) => {
  if (filterBy === 'title') {
   let result = data.filter(data => data.title.toLowerCase().includes(search.toLowerCase()));
   return result;
  }
};

export const sortData = (data) => {
  const arrayFilms = data['films'];
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


