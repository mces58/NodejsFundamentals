import { selectors } from "../selectors";

export const displayResults = (movies) => {
  movies.forEach((movie) => {
    const html = `
    <li class="col-md-3">
        <div class="card shadow-lg">
        <img
            src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
            class="card-img-top img-fluid"
            alt="movie poster"
            onerror="this.src='https://placehold.co/500x750?text=Not+Image&font=lora'" />
        <div class="card-body">
            <h5 class="card-title align-top">
            <a href="#${movie.id}">${movie.title}</a>
            <span class="badge bg-primary p-1">${movie.vote_average}</span>
            </h5>
            <p class="card-text">
           ${movie.overview}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </li>
`;
    selectors.result.insertAdjacentHTML("beforeend", html);
  });
};

export const clearInput = () => {
  selectors.txtKeyword.value = "";
};

export const clearResults = () => {
  selectors.result.innerHTML = "";
};
