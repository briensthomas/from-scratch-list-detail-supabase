import { getMovieByGenre } from '../fetch-utils.js';
import { renderMovieByGenre } from '../utils.js';


const movieGenreList = document.getElementById('movie-genre-list');
const pageTitle = document.getElementById('genre-page');


async function loadMovieGenre() {
    const params = new URLSearchParams(window.location.search);
    const genre = params.get('genre');
    const movies = await getMovieByGenre(genre);
    for (let movie of movies) {
        const render = renderMovieByGenre(movie);
        movieGenreList.append(render);
    }
    pageTitle.textContent = params.get('genre');
}

loadMovieGenre();