import { filterData, sortData, computeStats } from '../src/data.js';
import data from "../src/data/ghibli/ghibli.js";

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns 2 Castle Movies `filterData`', () => {
    const totalIncludeCastle = 2;
    const callFilterData = filterData("Castle", data.films, "title");
    expect(callFilterData.length).toBe(totalIncludeCastle);
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('return movie name in position [0] `sorData`', () => {
    const movieName = "Castle in the Sky.";
    const callSorData = sortData(data);
    expect(callSorData[0].title).toBe(movieName); 
  })
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('return Hayao Miyazaki film `computeStats`', () => {
    const numFilms = 5;
    const callComputeStats = computeStats(data);
    expect(callComputeStats[1].countMovies).toBe(numFilms);
  })
});
