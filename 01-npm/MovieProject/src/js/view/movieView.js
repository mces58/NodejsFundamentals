import { selectors } from "../selectors";

export const displayMovie = (movie) => {
  const html = `
       <div class="row">
        <div class="col-md-4">
            <img src="https://image.tmdb.org/t/p/w500/${
              movie.poster_path
            }" class="img-fluid" alt="poster"
            onerror="this.src='https://placehold.co/500x750?text=${"Poster Not Avaible"}&font=lora'">
        </div>

        <div class="col-md-8">
            <h4>${movie.title}</h4>
            <p>${movie.overview}</p>
            <p>
                <span class="badge bg-primary">${movie.vote_average}</span>
            </p>            
        </div>
       </div>
    `;
  selectors.movieDetailsContainer.classList.remove("d-none");
  selectors.movieDetails.innerHTML = html;
};

export const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const closeMovieDetails = () => {
  selectors.movieDetailsContainer.classList.add("d-none");
};
