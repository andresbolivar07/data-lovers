
export const filterData = (search, data) => {
  
  const result = data.filter(data => data.producer === search);
  return result;
}


