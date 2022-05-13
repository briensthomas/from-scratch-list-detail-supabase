export function renderMovie(movie) {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');

    const movieh2 = document.createElement('h2');
    movieh2.textContent = movie.title;

    const movieImg = document.createElement('img');
    movieImg.src = movie.img;

    const movieAnchor = document.createElement('a');
    movieAnchor.href = `./movie-details/?id=${movie.id}`;

    const movieh4 = document.createElement('h4');
    movieh4.textContent = `${movie.genre}`;
    movieh4.classList.add('genre');


    movieAnchor.append(movieh2, movieImg);
    movieDiv.append(movieAnchor, movieh4);
    return movieDiv;
}

export function renderMovieByGenre(movie) {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');

    const movieh2 = document.createElement('h2');
    movieh2.textContent = movie.title;

    const movieImg = document.createElement('img');
    movieImg.src = `.${movie.img}`;

    const movieAnchor = document.createElement('a');
    movieAnchor.href = `../movie-details/?id=${movie.id}`;

    const movieh4 = document.createElement('h4');
    movieh4.textContent = `${movie.genre}`;
    movieh4.classList.add('genre');


    movieAnchor.append(movieh2, movieImg);
    movieDiv.append(movieAnchor, movieh4);
    return movieDiv;
}

// export function renderMovieDetails(movie) {
//     const
// }

// const ul = document.createElement('ul');
// ul.classList.add('genre');
// for (let genre of movie.genre) {
//     const li = document.createElement('li');
//     li.textContent = genre;
//     ul.append(li);
// }

// const actorUl = document.createElement('ul');
// actorUl.classList.add('actors');
// for (let actor of movie.actors) {
//     const li = document.createElement('li');
//     li.textContent = actor + ' ';
//     actorUl.append(li);
// }