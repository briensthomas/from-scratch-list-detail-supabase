import { getMovieById } from '../fetch-utils.js';

const movieName = document.getElementById('movie-name');
const movieImage = document.getElementById('movie-image');
const movieGenre = document.getElementById('movie-genre');
const moviePlot = document.getElementById('movie-plot');
const movieTitle = document.getElementById('title');

async function loadMovieDetails() {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    const movie = await getMovieById(id);
    movieName.textContent = movie.title;
    movieImage.src = `.${movie.img}`;
    movieGenre.textContent = `${movie.genre}`;
    moviePlot.textContent = `${movie.plot}`;
    movieTitle.textContent = `${movie.title}`;
}

loadMovieDetails();

// Function to load list of movies by genre
