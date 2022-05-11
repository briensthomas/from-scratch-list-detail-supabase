export function renderMovie(movie) {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');

    const movieh2 = document.createElement('h2');
    movieh2.textContent = movie.title;

    const movieImg = document.createElement('img');
    movieImg.src = movie.img;

    const movieh4 = document.createElement('h4');
    movieh4.textContent = `Genre: `;
    movieh4.classList.add('genre');

    const p = document.createElement('p');
    p.textContent = movie.genre;

    const actorP = document.createElement('p');

    actorP.textContent = movie.actor;

    
    movieDiv.append(movieh2, movieImg, movieh4, p, actorP);
    return movieDiv;
}

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