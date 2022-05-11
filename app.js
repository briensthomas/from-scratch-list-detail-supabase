// import functions and grab DOM elements
import { getMovies } from './fetch-utils.js';
import { renderMovie } from './utils.js';

const moviesListEl = document.getElementById('movies-list');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
async function loadMovies() {
    const movies = await getMovies();
    console.log(movies);

    for (let movie of movies) {
        const movieDiv = renderMovie(movie);
        moviesListEl.append(movieDiv);
    }
}

loadMovies();